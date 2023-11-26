import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDisCountData
} from '@/services'
import { InitialStateType } from './types'

const initialState: InitialStateType = {
  goodPriceInfo: {},
  highScoreInfo: {},
  disCountInfo: {}
}

// 获取首页各个模块的数据
export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  (payload, { dispatch }) => {
    // 1.请求首页高性价比数据
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    // 2.获取首页高评分数据
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreDataAction(res))
    })
    // 3.获取首页打折数据
    getHomeDisCountData().then((res) => {
      dispatch(changeDisCountDataAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // 1.保存高性价比数据
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    // 2.保存高评分数据
    changeHighScoreDataAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    // 3.保存打折数据
    changeDisCountDataAction(state, { payload }) {
      state.disCountInfo = payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreDataAction,
  changeDisCountDataAction
} = homeSlice.actions

export default homeSlice.reducer
