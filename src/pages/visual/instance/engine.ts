import { CSSProperties } from 'react'
import { EngineComponentData, EngineCmpValuesType } from '../types'

type ListenerFunc = (data?: any) => any

export class Engine {
	engineDataList: EngineComponentData[] // 引擎展示的数据
	listeners: ListenerFunc[] // 订阅函数
	selectedCom: EngineComponentData | null // 当前选中的组件
	// canvasChangedHistory: EngineComponentData[][] // 画布改变历史记录

	constructor(engineDataList?: EngineComponentData[]) {
		this.engineDataList = engineDataList || []
		this.listeners = []
		this.selectedCom = null
		// this.canvasChangedHistory = []
	}

	getEngineData(): EngineComponentData[] {
		return this.engineDataList
	}

	// 添加组件
	addCmp(c: EngineComponentData): void {
		this.selectedCom = c
		const cmps = this.getCmps()
		this.updateCmps([...cmps, c])
	}

	// 设置选中组件
	setSelectedCmp(uid: string): void {
		const _selected = this.engineDataList.find(c => c.uniqueId === uid)
		!!_selected && (this.selectedCom = _selected)
		if (_selected) {
			this.selectedCom = _selected
			this.updateCmp(_selected)
		}
	}

	// 获取选中的组件
	getSelectedCmp(): EngineComponentData | null {
		return this.selectedCom
	}

	// 设置渲染组件列表
	setCmps(cmps: EngineComponentData[]): void {
		this.engineDataList = cmps
	}

	// 更新画布包括重新绘制
	updateCmps(cmps: EngineComponentData[]): void {
		this.setCmps(cmps)
		this.runListeners()
	}

	// 获取所有组件
	getCmps(): EngineComponentData[] {
		return this.engineDataList
	}

	// 更新单个组件
	updateCmp(c: EngineComponentData): void {
		const cmps = this.getCmps()
		for (let i = 0; i < cmps.length; i++) {
			if (cmps[i].uniqueId === c.uniqueId) {
				cmps[i] = c
				break
			}
		}
		this.updateCmps(cmps)
	}

	// 更新选中组件的props属性
	updateSelectedCmpValues(values: Partial<EngineCmpValuesType>): void {
		const _selectedCom = this.getSelectedCmp()
		if (!_selectedCom) return

		// SHIT: 隐患点 目的是为传递单个参数 不用全部一起传
		const _values: any = {
			...this.selectedCom?.values,
			...values
		}

		const cmp: EngineComponentData = {
			..._selectedCom,
			values: _values
		}

		this.selectedCom = cmp
		this.updateCmp(cmp)
	}

	// 更新选中组件样式
	updateSelectedCmpStyle(style: CSSProperties): void {
		const _selectedCom = this.getSelectedCmp()
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
