import React, { lazy } from 'react'

const ListPage = lazy(() => import( /* webpackChunkName: 'ListPage' */ '../components/List'))
const CreatePage = lazy(() => import( /* webpackChunkName: 'CreatePage' */ '../components/Create'))

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
