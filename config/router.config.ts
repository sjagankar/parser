export default [
  {
    path: '/', redirect: '/try', wrappers: [
      '@/wrappers/auth',
    ],
  },
  { path: '/activation/:id', component: 'activation' },
  { path: '/resumes', component: 'resume_parser' },
  { path: '/try', component: 'resume_parser' },
  { path: '/appsumo', component: 'signup' },
  { path: '/login', component: 'login' },
  { path: '/appsumo/login', component: 'login' },
  { path: '/register', component: 'signup' },
  {
    path: '/documents',
    routes: [
      {
        path: '/documents', component: 'documents',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        path: '/documents/add', component: 'resume_parser',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        path: '/documents/:id', component: 'document',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
    ]
  },
  {
    path: '/jd', component: 'jd_parser'
  },
  {
    path: '/settings', component: 'settings', wrappers: [
      '@/wrappers/auth',
    ],
  },
  {
    path: '/documentation', component: 'documentation', wrappers: [
      '@/wrappers/auth',
    ],
  },

];
