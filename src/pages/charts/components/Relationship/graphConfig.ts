import { RelationshipNodeData } from './types'

export default {
  automaticRearrangeAfterDropNode: false,
  collapsible: false,
  highlightDegree: 1,
  highlightOpacity: 0.1,
  linkHighlightBehavior: true,
  maxZoom: 12, // 最大和最小保持一致 缩放会导致箭头漂移
  minZoom: 0.1, //
  // initialZoom: 0.7,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: false,
  width: 967,
  height: 944,
  directed: true,
  d3: {
    alphaTarget: 0.5,
    gravity: -10000,
    linkLength: 400
  },
  node: {
    renderLabel: false,
    size: {
      width: 1360,
      height: 1360
    }
  },
  link: {
    renderLabel: true,
    labelProperty: function (node: RelationshipNodeData): string {
      return node.text
    },
    color: '#5C8EFA',
    fontColor: '#5081FD',
    fontSize: 20,
    fontWeight: 'normal',
    highlightColor: 'rgba(92, 142, 250, 1)',
    highlightFontSize: 20,
    highlightFontWeight: 'normal',
    mouseCursor: 'pointer',
    opacity: 1,
    semanticStrokeWidth: true,
    strokeWidth: 2,
    type: 'STRAIGHT'
  }
}

// const config: Partial<GraphConfiguration<NodeData, RelationLinkData>> | undefined = {
//   width: 1400,
//   height: 800,
//   automaticRearrangeAfterDropNode: true, // 拖拽节点时 其他节点跟着移动
//   staticGraph: false, // 是否为静态节点，如果是静态节点 node中需要有x y坐标
//   collapsible: true, // 点击是否可以折叠节点
//   directed: true, // 是否为有向图
//   // focusZoom: 3,
//   maxZoom: 12,
//   minZoom: 0.05,
//   nodeHighlightBehavior: true, // 节点hover时的行为是否开启
//   highlightOpacity: 0.1,
//   linkHighlightBehavior: true,
//   highlightDegree: 5,
//   initialZoom: 0.6,
//   d3: {
//     alphaTarget: 0.5,
//     gravity: -4000
//   },
//   node: {
//     renderLabel: false,
//     size: {
//       width: 1360,
//       height: 1220
//     }
//   },
//   link: {
//     renderLabel: true,
//     labelProperty: function (node) {
//       return node.text
//     },
//     color: '#5C8EFA',
//     fontColor: '#5081FD',
//     fontSize: 20,
//     fontWeight: 'normal',
//     highlightColor: 'rgba(92, 142, 250, 1)',
//     highlightFontSize: 20,
//     highlightFontWeight: 'normal',
//     mouseCursor: 'pointer',
//     opacity: 1,
//     semanticStrokeWidth: true,
//     strokeWidth: 2,
//     type: 'STRAIGHT'
//   }
// }
