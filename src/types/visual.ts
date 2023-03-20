import { EngineComponentType } from './../pages/visual/types/index'

export interface JsonVisualItem {
  cmpType: EngineComponentType
  name: string
  style: string
  uniqueId: string
  values: string
}

export interface VisualItem {
  id: string
  cmp_list: string
  page_config: string
}

export interface AddVisualRequest {
  cmp_list: string
  page_config: string
}

export interface UpdateVisualRequest extends AddVisualRequest {
  id: string
}

export interface FetchVisualListResponse {
  list: VisualItem[]
}
