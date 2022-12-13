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
const MAX_CHILDREN_LENGTH = 4

/**
 * @description  生成树结构数据
 * @date 2022-12-13 16:33:02
 */
export const generateTreeData = (
  isRoot?: boolean,
  level?: number,
  prevId?: string,
  tns?: TreeNode
): TreeNode => {
  // const _tns = tns || generateTreeNode()
  // const _level = level || 0

  // const children: TreeNode[] = []
  // for (let i = 0; i < MAX_CHILDREN_LENGTH; i++) {
  //   const item = generateTreeNode(prevId)
  //   _tns.children?.push(item)
  //   children.push(item)
  // }

  // if (_level < 0) return _tns
  // children.forEach((key, index) => {
  //   if (index === MAX_CHILDREN_LENGTH) return
  //   // _tns[index].children = []
  //   return generateTreeData(level, key, tns[index].children)
  // })
  const originLevel = level ?? MAX_LEVEL
  const _level = originLevel - 1

  const rootNode: TreeNode = generateTreeNode()

  // 达到指定层数则不再增加数据
  if (_level < 0) {
    return rootNode
  }

  if (isRoot) {
    const rootNode: TreeNode = generateTreeNode()
    for (let index = 0; index < MAX_CHILDREN_LENGTH; index++) {
      const childNode = generateTreeNode(rootNode.id)
      // 将父节点的id 存入子节点的 prevId中
      rootNode?.children?.push(childNode)
      generateTreeData(false, _level, rootNode.id, childNode)
    }
    return rootNode
  } else {
    for (let index = 0; index < MAX_CHILDREN_LENGTH; index++) {
      const childNode = generateTreeNode(prevId)
      generateTreeData(false, _level, childNode.id, childNode)
      tns?.children?.push(childNode)
    }
  }

  return rootNode
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
    const treeData = generateTreeData(true)

    const responseData = treeToResponseData(treeData)

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
