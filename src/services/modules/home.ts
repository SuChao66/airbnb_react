import scRequest from '..'

// 获取高性价比数据
export function getHomeGoodPriceData() {
  return scRequest.get({
    url: 'home/goodprice'
  })
}

// 高评分数据
export function getHomeHighScoreData() {
  return scRequest.get({
    url: 'home/highscore'
  })
}

// 折扣数据
export function getHomeDisCountData() {
  return scRequest.get({
    url: 'home/discount'
  })
}
