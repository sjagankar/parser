import pageRoutes from './router.config';
import envConfig from './env.config';
import metaConfig from './meta.config';

export default {
  npmClient: 'yarn',
  routes: pageRoutes,
  mfsu: false,
  proxy: {
    '/api/': {
      target: `https://api.cvviz.com`,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  clientLoader: {},
  define: envConfig,
  scripts: [`var rootHeight; setInterval(function () {
    var currentRootHeight = document.body.scrollHeight;
    if (rootHeight !== currentRootHeight) {
        window.parent.postMessage({ "type": "frame-resized", "from:":"cvviz.com", "value": currentRootHeight }, '*');
        rootHeight = currentRootHeight;
    }}, 500)`,
  ],
  metas: metaConfig
};
