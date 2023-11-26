// 高性价比数据
export interface GoodPriceInfoType {
  _id?: string
  type?: string
  title?: string
  list?: List[]
}

export interface List {
  id: string
  picture_url: string
  verify_info: VerifyInfo
  name: string
  price: number
  price_format: string
  star_rating_color: string
  reviews_count: number
  bottom_info?: BottomInfo
  lat: number
  lng: number
  image_url: string
  star_rating?: number
  reviews?: Review[]
}

export interface VerifyInfo {
  messages: string[]
  text_color: string
}

export interface BottomInfo {
  content: string
  content_color: string
  font_size: string
  visibility: string
}

export interface Review {
  comments: string
  created_at: string
  is_translated: boolean
  localized_date: string
  reviewer_image_url: string
  review_id: string
}
