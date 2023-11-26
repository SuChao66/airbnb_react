import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Detail: FC<IProps> = () => {
  return <div>Detail</div>
}

export default memo(Detail)
