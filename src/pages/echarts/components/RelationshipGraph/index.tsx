import { GraphChart, GraphSeriesOption } from 'echarts/charts'
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components'
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { useEffect, useRef } from 'react'

import { MOCK_DATA } from './data'

type EChartsOption = echarts.ComposeOption<
  TitleComponentOption | TooltipComponentOption | LegendComponentOption | GraphSeriesOption
>

echarts.use([TitleComponent, TooltipComponent, LegendComponent, GraphChart, CanvasRenderer])

const RelationshipGraph = (): JSX.Element => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current)

      console.log({ MOCK_DATA })

      MOCK_DATA.nodes.forEach(function (node: any) {})

      const option: EChartsOption = {
        // title: {
        //   text: 'Les Miserables',
        //   subtext: 'Default layout',
        //   top: 'bottom',
        //   left: 'right'
        // },
        tooltip: {},
        // legend: [
        //   {
        //     // selectedMode: 'single',
        //     data: MOCK_DATA.categories.map(function (a: { name: string }) {
        //       return a.name
        //     })
        //   }
        // ],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph', // 类型设置为关系图
            legendHoverLink: true, // 可以点击图例来隐藏一个组
            layout: 'force',
            force: {
              repulsion: 1500, // 每个节点之间的斥力因子，越大离的越远
              layoutAnimation: true,
              friction: 0.3, // 刷新时节点的移动速度，越大越快，0 - 1 之间
              edgeLength: [100, 130] // 两节点之间的距离
            },

            label: {
              show: true, // 节点圆盘上的文字
              fontStyle: 'italic', // 文字风格，normal，italic，oblique 三种可选
              fontSize: 12,
              color: '#000000'
            },
            symbolSize: 60, // 全局节点尺寸
            itemStyle: {
              // 给节点加上阴影，显着立体
              // shadowColor: '#C0C0C0',
              // shadowOffsetX: 2,
              // shadowOffsetY: 2
            },
            data: MOCK_DATA.nodes,
            links: MOCK_DATA.links,
            // 让节点可以通过鼠标拖拽和移动的设置
            roam: true, // 开启鼠标平移及缩放
            draggable: true, // 节点是否支持鼠标拖拽。
            edgeSymbol: ['circle', 'arrow'], // 两节点连线的样式
            edgeSymbolSize: [5, 10],
            cursor: 'pointer', // 鼠标悬浮时在图形元素上时鼠标的样式

            labelLayout: {
              moveOverlap: 'shiftX', // 标签重叠时，挪动标签防止重叠
              draggable: true // 节点标签是否允许鼠标拖拽定位
            },
            emphasis: {
              scale: true, // 节点放大效果
              focus: 'adjacency'
            },
            lineStyle: {
              color: '#3d3d3f',
              width: 2,
              curveness: 0 // 节点连线的曲率，0-1 越大越弯。
            }
          }
        ]
      }

      myChart.setOption(option)
    }
  }, [])

  return <div ref={chartRef} style={{ width: '100%', height: '800px' }} />
}

export default RelationshipGraph
