import { configureStore } from '@reduxjs/toolkit'
// 导入modules
import homeReducer from './modules/home'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer
  }
})

export default store
