import randomWords from 'random-words'

import { NodeData, RelationEnum, RelationOriginData } from './types'

import { randomString } from '@/utils'

interface ResponseData {
  nodes: NodeData[]
  relationships: RelationOriginData[]
}

interface TreeNode extends NodeData {
  prevId: string
  children?: TreeNode[]
}

const MAX_LEVEL = 2
const MAX_CHILDREN_LENGTH = 3

// 生成树数据
export const generateTree = (
  _level: number = MAX_LEVEL,
  prevId?: string,
  _parent?: TreeNode
): TreeNode => {
  const parent = _parent || generateTreeNode(prevId)
  const children: TreeNode[] = []
  if (_level === 0) return parent

  for (let i = 0; i < MAX_CHILDREN_LENGTH; i++) {
    const node = generateTreeNode(parent.id)
    children.push(node)
  }
  parent.children = children
  const level = _level - 1
  children.forEach((node, index) => {
    return generateTree(level, node.id, node)
  })
  return parent
}

/**
 * @description 根据树结构数据生成 nodes 数据
 * @date 2022-12-13 17:04:50
 */
export const generateNodesByTree = (treeData: TreeNode, tns?: NodeData[]): NodeData[] => {
  const _tns: NodeData[] = tns || []
  const { id, properties } = treeData

  const node: NodeData = {
    id,
    properties
  }

  _tns.push(node)

  treeData.children?.forEach(c => {
    generateNodesByTree(c, _tns)
  })

  return _tns
}

/**
 * @description 根据树结构数据生成relation数据
 * @date 2022-12-13 17:05:05
 */

export const generateRelationshipsByTree = (
  treeData: TreeNode,
  tns?: RelationOriginData[]
): RelationOriginData[] => {
  const _tns: RelationOriginData[] = tns || []
  const { id, prevId } = treeData

  const relationData: RelationOriginData = generateRelationData(prevId, id)

  _tns.push(relationData)

  treeData.children?.forEach(c => {
    generateRelationshipsByTree(c, _tns)
  })

  return _tns.filter(t => t.startNode !== '')
}

/**
 * @description 根据树mock数据生成mock响应数据
 * @param {*}
 * @date 2022-12-13 17:05:25
 * @Author gaoliang
 * @see
 * @return {*}
 */
export const treeToResponseData = (treeData: TreeNode): ResponseData => {
  const _nodes: NodeData[] = generateNodesByTree(treeData)
  const _relationships: RelationOriginData[] = generateRelationshipsByTree(treeData)

  return {
    nodes: _nodes,
    relationships: _relationships
  }
}

// export const generateResponseData = (isRoot?:boolean,level?:number,tns?:)

export const mockResponseDataFunc = (): Promise<ResponseData> => {
  return new Promise((resolve, reject) => {
    const treeData = generateTree()

    const responseData = treeToResponseData(treeData)

    console.log({ treeData, responseData })
    setTimeout(() => {
      resolve(responseData)
    }, 4)
  })
}

export const generateTreeNode = (prevId = ''): TreeNode => {
  return {
    id: randomString(),
    properties: {
      avatar: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/yued/ai-mp/assets/default_head.png',
      name: randomWords(1)[0],
      count: Math.floor(Math.random() * 40),
      role: randomWords(1)[0]
    },
    prevId,
    children: []
  }
}

export const generateNodeData = (): NodeData => {
  return {
    id: randomString(),
    properties: {
      avatar: 'https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/yued/ai-mp/assets/default_head.png',
      name: randomWords(1)[0],
      count: Math.random() * 40,
      role: randomWords(1)[0]
    }
  }
}

export const generateRelationData = (start: string, end: string): RelationOriginData => {
  return {
    id: randomString(),
    startNode: start,
    endNode: end,
    type: Math.floor(Math.random() * 2) === 0 ? RelationEnum.Role : RelationEnum.Social,
    text: randomWords(1)[0]
  }
}
