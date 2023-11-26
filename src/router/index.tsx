import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
// 导入组件（懒加载）
const Home = React.lazy(
  () => import(/* webpackChunkName: 'Home' */ '@/views/home')
)
const Detail = React.lazy(
  () => import(/* webpackChunkName: 'Detail' */ '@/views/detail')
)
const NotFound = React.lazy(
  () => import(/* webpackChunkName: 'Detail' */ '@/views/notFound')
)

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: <Home /> },
  { path: '/detail', element: <Detail /> },
  { path: '*', element: <NotFound /> }
]

export default routes
