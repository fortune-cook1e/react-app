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
	cmpList: string
}

export interface AddVisualRequest {
	cmpList: string
}

export interface UpdateVisualRequest extends AddVisualRequest {
	id: string
}

export interface FetchVisualListResponse {
	list: VisualItem[]
}
