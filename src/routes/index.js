import React, { lazy } from 'react'

const ListPage = lazy(() => import( /* webpackChunkName: 'ListPage' */ '../pages/List'))
const CreatePage = lazy(() => import( /* webpackChunkName: 'CreatePage' */ '../pages/Create'))

export default [
  {
    path: '/',
    exact: true,
    component: <ListPage />
  },
  {
    path: '/create',
    exact: false,
    component: <CreatePage />
  },
]
