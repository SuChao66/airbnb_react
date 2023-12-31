import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { useRoutes } from 'react-router-dom'
// 导入路由配置文件
import routes from '@/router'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <div className="app">
      <div className="header">header</div>
      <div className="page">{useRoutes(routes)}</div>
    </div>
  )
}

export default memo(App)
