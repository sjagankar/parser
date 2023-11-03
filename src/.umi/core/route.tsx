// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import clientLoaders from './loaders.js';
import React from 'react';

export async function getRoutes() {
  return {
    routes: {"1":{"path":"/","parentId":"@@/global-layout","id":"1","clientLoader":clientLoaders['1']},"2":{"path":"/realtime","parentId":"@@/global-layout","id":"2","clientLoader":clientLoaders['2']},"3":{"path":"/bulk","parentId":"@@/global-layout","id":"3","clientLoader":clientLoaders['3']},"4":{"path":"/job","parentId":"@@/global-layout","id":"4","clientLoader":clientLoaders['4']},"@@/global-layout":{"id":"@@/global-layout","path":"/","isLayout":true}},
    routeComponents: {
'1': React.lazy(() => import(/* webpackChunkName: "p__advanced__index" */'@/pages/advanced/index.jsx')),
'2': React.lazy(() => import(/* webpackChunkName: "p__realtime__index" */'@/pages/realtime/index.jsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__advanced__index" */'@/pages/advanced/index.jsx')),
'4': React.lazy(() => import(/* webpackChunkName: "p__job__index" */'@/pages/job/index.jsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/Users/satya/Documents/workspace/apps/parser/src/layouts/index.jsx')),
},
  };
}
