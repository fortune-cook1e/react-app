import { CSSProperties } from 'react'

import { EngineComponentData, EngineCmpValuesType } from '../types'

import { DEFAULT_PAGE_CONFIG, DEFAULT_ENGINE_DATA } from './../constants/index'
import { PageConfig } from './../types/index'

type ListenerFunc = (data?: any) => any

export class Engine {
  engineDataList: EngineComponentData[] // 引擎展示的数据
  listeners: ListenerFunc[] // 订阅函数
  selectedCom: EngineComponentData | null // 当前选中的组件
  pageConfig: PageConfig // 当前页面配置
  // canvasChangedHistory: EngineComponentData[][] // 画布改变历史记录

  constructor(engineDataList?: EngineComponentData[]) {
    this.engineDataList = engineDataList || DEFAULT_ENGINE_DATA
    this.listeners = []
    this.selectedCom = null
    this.pageConfig = DEFAULT_PAGE_CONFIG
    // this.canvasChangedHistory = []
  }

  getEngineData(): EngineComponentData[] {
    return this.engineDataList
  }

  getEnginePageConfig(): PageConfig {
    return this.pageConfig
  }

  // 添加组件
  addCmp(c: EngineComponentData): void {
    this.selectedCom = c
    const cmps = this.getCmps()
    this.updateCmps([...cmps, c])
  }

  // 设置选中组件
  setSelectedCmp(cmp: EngineComponentData | null): void {
    this.selectedCom = cmp
    if (cmp) {
      this.updateCmp(cmp)
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

  // 移除组件
  removeCmp(id: string): void {
    // TODO: 移除分2种情况： 1. 当前选中组件 2. 当前非选中组件
    // 设置当前选中情况分2种：1. 当前只有一个 2. 当前数据总量大于1
    const _cmps = this.engineDataList.filter(d => d.uniqueId !== id)
    if (id === this.selectedCom?.uniqueId) {
      this.setSelectedCmp(null)
      this.updateCmps(_cmps)
    } else {
      this.updateCmps(_cmps)
    }
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

  //  重置
  resetAll(): void {
    this.engineDataList = []
    this.selectedCom = null
    this.runListeners()
    this.listeners = []
  }

  // TODO: 欠缺记录画布操作历史记录

  updatePageConfig(pageconfig: PageConfig): void {
    this.pageConfig = pageconfig
    this.runListeners()
  }

  // 更新当前页面样式
  updatePageConfigStyle(style: CSSProperties): void {
    const _style = {
      ...this.pageConfig.style,
      ...style
    }
    this.pageConfig.style = _style
    this.runListeners()
  }

  // 更新页面标题
  updatePageConfigTitle(title: string): void {
    this.pageConfig.title = title
    this.runListeners()
  }

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
