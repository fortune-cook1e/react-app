import { Chart, Interval, Tooltip, Axis, Coordinate } from 'bizcharts'
import React, { useMemo } from 'react'

import Layout from '../Layout'

import { DEPARTMENT_OPTIONS } from '@/constants/staff'
import { Department, IStaff } from '@/types'

interface PieStaffData {
  count: number
  department: string
}

interface Props {
  staffData?: IStaff[]
}

const DepartmentDistribution = ({ staffData = [] }: Props): JSX.Element => {
  const staffPieChartData = useMemo(() => {
    if (!staffData.length) return []
    return staffData.reduce((acc: PieStaffData[], cur: IStaff) => {
      const hasExistedItem = acc.find(item => item.department === cur.department)
      if (hasExistedItem) {
        hasExistedItem.count++
      } else {
        acc.push({
          count: 1,
          department: cur.department
        })
      }
      return acc
    }, [])
  }, [staffData])

  const staffPieChartDataTotal = useMemo(() => {
    return staffPieChartData.reduce((acc, cur) => acc + cur.count, 0)
  }, [staffPieChartData])

  const cols = {
    department: {
      formatter: (val: Department) => {
        return DEPARTMENT_OPTIONS.find(o => o.value === val)?.label || ''
      }
    }
  }

  return (
    <Layout title='部门分布'>
      <Chart
        height={300}
        data={staffPieChartData}
        scale={cols}
        interactions={['element-active']}
        autoFit
      >
        <Coordinate type='theta' radius={0.75} />
        <Tooltip showTitle={false} />
        <Axis visible={false} />
        <Interval
          position='count'
          adjust='stack'
          color='department'
          style={{
            lineWidth: 1,
            stroke: '#fff'
          }}
          label={[
            'department',
            {
              content: (data: any) => {
                const departmentLabel =
                  DEPARTMENT_OPTIONS.find(o => o.value === data.department)?.label || ''
                const percent = ((data.count / staffPieChartDataTotal) * 100).toFixed(2)
                return `${departmentLabel}: ${percent}%`
              }
            }
          ]}
        />
      </Chart>
    </Layout>
  )
}

export default DepartmentDistribution
