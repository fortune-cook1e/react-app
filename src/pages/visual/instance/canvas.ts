import { CSSProperties } from 'react'
import { CanvasComponentData } from '../types'

type ListenerFunc = (data?: any) => any

export class GlobalCanvas {
	canvasComList: CanvasComponentData[] // 画布展示的数据
	listeners: ListenerFunc[] // 订阅函数
	selectedCom: CanvasComponentData | null // 当前选中的组件
	canvasChangedHistory: CanvasComponentData[][] // 画布改变历史记录

	constructor() {
		this.canvasComList = []
		this.listeners = []
		this.selectedCom = null
		this.canvasChangedHistory = []
	}

	getCanvasData(): CanvasComponentData[] {
		return this.canvasComList
	}

	// 添加组件
	addCmp(c: CanvasComponentData): void {
		this.selectedCom = c
		const cmps = this.getCmps()
		this.updateCmps([...cmps, c])
	}

	// 获取选中的组件
	getSelectedCom(): CanvasComponentData | null {
		return this.selectedCom
	}

	// 设置渲染组件列表
	setCmps(cmps: CanvasComponentData[]): void {
		this.canvasComList = cmps
	}

	// 更新画布包括重新绘制
	updateCmps(cmps: CanvasComponentData[]): void {
		this.setCmps(cmps)
		this.runListeners()
	}

	// 获取所有组件
	getCmps(): CanvasComponentData[] {
		return this.canvasComList
	}

	// 更新单个组件
	updateCmp(c: CanvasComponentData): void {
		const cmps = this.getCmps()
		for (let i = 0; i < cmps.length; i++) {
			if (cmps[i].uniqueId === c.uniqueId) {
				cmps[i] = c
				break
			}
		}
		this.setCmps(cmps)
	}

	// 更新选中组件的props属性
	updateSelectedCmpValue(value: any): void {
		const _selectedCom = this.getSelectedCom()
		if (!_selectedCom) return
		const cmp: CanvasComponentData = {
			..._selectedCom,
			props: value
		}
		this.selectedCom = cmp
		this.updateCmp(cmp)
	}

	// 更新选中组件样式
	updateSelectedCmpStyle(style: CSSProperties): void {
		const _selectedCom = this.getSelectedCom()
		if (!_selectedCom) return
		const com = {
			..._selectedCom,
			style
		}
		this.selectedCom = com
		this.updateCmp(com)
	}

	// TODO: 欠缺记录画布操作历史记录

	// 执行订阅函数
	runListeners(): void {
		this.listeners.forEach(listener => {
			listener()
		})
	}

	// 订阅——并且返回取消订阅
	subscribe(listener: ListenerFunc): () => void {
		this.listeners.push(listener)
		return () => {
			this.listeners = this.listeners.filter(lis => lis !== listener)
		}
	}
}
