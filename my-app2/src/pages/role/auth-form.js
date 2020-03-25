import React, { Component } from 'react'
import {Form, Input, Tree} from 'antd'
import menuConfig from '../../config/menuConfig'

//添加分类的组件
const Item = Form.Item

const treeData = [
    {
        title: '平台权限',
        key: 'all',
        children: menuConfig
    },
]

export default class AuthForm extends Component {
    constructor(props){
        super(props)
        //根据传入角色的menus生成初始状态
        const {menus} = this.props.role
        this.state = {
            checkedKeys: menus
        }
    }
    //点击树节点触发
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    //点击复选框触发
    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
        this.setState({
            checkedKeys
        })
    }
    //为父组件提交 获取最新menus的方法
    getMenus = () => this.state.checkedKeys
    render() {
        const {role} = this.props
        const {checkedKeys} = this.state
        return (
            <div>
                <Form>
                    <Item 
                        name="roleName" 
                        label="角色名称" 
                        labelCol={ {span: 4}} 
                        wrapperCol={{span: 19}} 
                    >
                        <Input defaultValue={role.name} disabled/>
                    </Item>
                </Form>
                <Tree 
                    checkable
                    defaultExpandAll
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                    treeData={treeData}
                    checkedKeys={checkedKeys}
                >

                </Tree>
            </div>
        )
    }
}