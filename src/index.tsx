import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
// 导入根组件
import App from './App'
// 导入样式
import 'antd/dist/reset.css'
import 'normalize.css'
// 导入store
import store from '@/store'
// 引入i18n国际化配置文件
import '@/i18n/config'

// 设置主题色
document.documentElement.setAttribute('data-theme', 'light')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <HashRouter>
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
      </HashRouter>
    </Provider>
  </Suspense>
)
