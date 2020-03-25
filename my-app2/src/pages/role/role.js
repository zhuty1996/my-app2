import React, { Component } from 'react'
import { Card, Button, Table, Modal} from 'antd'

import AddForm from './add-form'
import AuthForm from './auth-form'

//角色管理路由
export default class Role extends Component {
    constructor(props){
        super(props)
        this.myRef=React.createRef()
    }
    state={
        roles: [
            {
                name: '1',
                create_time: '111111',
                auth_time: '111111',
                auth_name: 'admin',
                _id: '1',
                menus: [
                    '/home',
                    '/product',
                    '/chars/line'
                ]
            },
            {
                name: '2',
                create_time: '111111',
                auth_time: '111111',
                auth_name: 'admin',
                _id: '2',
                menus: [
                    "/home",
                    "/product",
                    "/category",
                    "/chars/bar"
                ]
            },
            {
                name: '3',
                create_time: '111111',
                auth_time: '111111',
                auth_name: 'admin',
                _id: '3',
                menus: [
                    "/home",
                    "/category",
                    "/product",
                    "/user",
                    "/role",
                    "/chars/line",
                    "/chars/bar",
                    "/chars/pie"
                ]
            }
        ],
        role: {}, //选中的行
        isShowAdd: false, //是否显示添加界面
        isShowAuth: false, //是否显示添加角色界面
    }
    //可以点击当前行任意地方即可变成选中状态
    selectRow = (record) => {
        // console.log(record) //record:当前选中的行
        this.setState({ role: record})
    }
    //确认框取消
    handleCancel = e => {
        // console.log(e);
        this.setState({
            isShowAdd: false,
        });
    }
    //添加角色
    addRole = (e) => {
        this.setState({
            isShowAdd: false,
        });
    }
    //更新角色
    updateRole = () => {
        this.setState({
            isShowAuth: false,
        })
        //得到最新的menus,role是roles的引用变量
        const menus = this.myRef.current.getMenus()
        const {role} = this.state
        role.menus = menus
        role.auth_time = Date.now()
        this.setState({
            roles: [...this.state.roles]
        })
    }
    render() {
        this.columns = [
            {
                title: '角色名称',
                dataIndex: 'name',
            },
            {
                title: '创建时间',
                dataIndex: 'create_time',
            },
            {
                title: '授权时间',
                dataIndex: 'auth_time',
            },
            {
                title: '授权人',
                dataIndex: 'auth_name',
            }
        ]
        const {roles,role,isShowAdd,isShowAuth} = this.state
        const title = (
            <span>
                <Button type='primary' onClick={ () => {this.setState({isShowAdd: true})}} style={{marginRight: 20}}>创建角色</Button>
                <Button type='primary' disabled={!role._id} onClick={ () => {this.setState({isShowAuth: true})}} >设置角色权限</Button>
            </span>
        )
        return (
            <Card title={title}>
                <Table 
                    bordered 
                    rowKey='_id'
                    dataSource={roles}
                    columns={this.columns}
                    pagination={{defaultPageSize: 5}}
                    rowSelection={{type: 'radio',selectedRowKeys: [role._id]}}
                    onRow={(record) => ({
                    onClick: () => {
                        this.selectRow(record);
                    },
                    })}
                />
                <Modal
                      title='添加角色'
                      visible={isShowAdd}
                      onOk={this.addRole}
                      onCancel={this.handleCancel}
                    >
                      <AddForm />
                </Modal>
                <Modal
                      title='角色权限'
                      visible={isShowAuth}
                      onOk={this.updateRole}
                      onCancel={ () => {this.setState({ isShowAuth: false})}}
                    >
                    {/* 有 key 的非可控组件 */}
                      <AuthForm 
                        role={role} 
                        ref={this.myRef} 
                        key={role._id} 
                      />
                </Modal>
            </Card>
        )
    }
}
