import { Form, Input, Select } from 'antd'
import { ButtonType } from 'antd/lib/button'
import React, { useEffect, useState } from 'react'

import { EngineCmpProps } from '../../../../types'

import { TYPE_OPTIONS } from './const'

import { useEngineContext } from '@/pages/visual/context'
import { EngineButtonProps } from '@/pages/visual/types/attr'

const { Item } = Form

const Button = (props: EngineCmpProps): JSX.Element => {
  const { globalEngine } = useEngineContext()
  const { values } = props

  const { text, type } = values as EngineButtonProps

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value
    globalEngine.updateSelectedCmpValues({
      text: val
    })
  }

  const onTypeChange = (t: ButtonType) => {
    globalEngine.updateSelectedCmpValues({
      type: t
    })
  }

  return (
    <Form>
      <Item label='标题'>
        <Input placeholder='请输入标题' value={text} onChange={onTextChange} />
      </Item>
      <Item label='按钮类型'>
        <Select
          placeholder='请选择按钮类型'
          value={type}
          options={TYPE_OPTIONS}
          onChange={onTypeChange}
        />
      </Item>
    </Form>
  )
}

export default Button
