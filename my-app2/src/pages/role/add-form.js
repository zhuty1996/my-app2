import React, { Component } from 'react'
import {Form, Input} from 'antd'

//添加分类的组件
const Item = Form.Item

export default class AddForm extends Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <Form>
                <Item 
                    name="roleName" 
                    label="角色名称" 
                    labelCol={ {span: 4}} 
                    wrapperCol={{span: 19}} 
                    rules={[{ required: true, message: '请输入角色名称' }]}
                >
                    <Input placeholder='请输入角色名称' />
                </Item>
            </Form>
        )
    }
}