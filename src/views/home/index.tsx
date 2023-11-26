import React, { memo, useEffect } from 'react'
import {
  useAppSelector,
  useAppDispatch,
  shallowEqualApp
} from '@/hooks/UseSelectorHookType'
import type { ReactNode, FC } from 'react'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import { useTranslation } from 'react-i18next'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'
import dayjs from 'dayjs'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const { goodPriceInfo } = useAppSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  const { t, i18n } = useTranslation()
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <p
          onClick={() => {
            i18n.changeLanguage('zh')
          }}
        >
          中文
        </p>
      )
    },
    {
      key: '2',
      label: (
        <p
          onClick={() => {
            i18n.changeLanguage('en')
          }}
        >
          英文
        </p>
      )
    }
  ]

  return (
    <HomeWrapper>
      <h1>{t('article')}</h1>
      <div>
        {t('currentTime', { time: dayjs().format('YYYY-MM-DD HH:mm:ss') })}
      </div>
      <div className="info">{goodPriceInfo.title}</div>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            点我
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </HomeWrapper>
  )
}

export default memo(Home)
