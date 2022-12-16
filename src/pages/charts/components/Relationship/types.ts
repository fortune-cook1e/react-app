// import { NodeLevelNodeConfiguration, LinkLevelLinkConfiguration } from 'react-d3-graph'

export interface RelationshipNodeData extends Partial<any> {
  id: string
  properties: {
    avatar: string
    name: string
    count: number
    role: string
  }
}

export enum RelationEnum {
  Role = 0,
  Social = 1
}

export interface RelationOriginData extends Partial<any> {
  id: string
  startNode: string
  endNode: string
  type: RelationEnum
  text: string
}

export interface RelationLinkData extends RelationOriginData {
  source: string // startNode
  target: string // endNode
}

export interface GraphData {
  nodes: RelationshipNodeData[]
  links: RelationLinkData[]
  focusedNodeId?: string
}
