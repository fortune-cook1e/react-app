import { useState, useEffect } from 'react'

import { DB_KEYS } from './../../constants/storage'

import { fetchMockData } from '@/apis/mock'
import useIndexedDb from '@/hooks/useIndexedDb'
import { IMockData } from '@/types/mock'

interface Props {
  cache?: boolean
}

interface UseMockDataResponse {
  data: IMockData[]
}

const useMockData = ({ cache = true }: Props = {}): UseMockDataResponse => {
  const { getItem, setItem } = useIndexedDb()
  const [data, setData] = useState<IMockData[]>([])

  useEffect(() => {
    const initData = async () => {
      const _dbData = await getItem<IMockData[]>(DB_KEYS.mockData)
      if (cache && _dbData) {
        setData(_dbData)
      } else {
        const response = await fetchMockData()
        setData(response)
        setItem(DB_KEYS.mockData, response)
      }
    }
    initData()
  }, [cache])

  return {
    data
  }
}

export default useMockData
