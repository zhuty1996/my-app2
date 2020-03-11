import React, { Component } from 'react'
import {Form, Select, Input} from 'antd'

//添加分类的组件
const Item = Form.Item
const Option = Select.Option

class AddForm extends Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <Form>
                <p>所属分类：</p>
                <Item>
                    <Select defaultValue={1} onChange={this.handleChange}>
                        <Option value={1}>一级分类</Option>
                        <Option value={2}>2</Option>
                        <Option value={3}>3</Option>
                        <Option value={41}>4</Option>
                        <Option value={5}>5</Option>
                        <Option value={6}>6</Option>
                    </Select>
                </Item>
                <p>分类名称：</p>
                <Item name="field">
                    <Input placeholder='请输入分类名称' />
                </Item>
            </Form>
        )
    }
}
export default AddForm