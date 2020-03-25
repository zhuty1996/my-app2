import React, { Component } from 'react'
import { Card, Button, Table, Modal} from 'antd'

import AddForm from './add-form'

//角色管理路由
export default class Role extends Component {
    state={
        roles: [
            {
                name: '1',
                create_time: '111111',
                auth_time: '111111',
                auth_name: 'admin',
                _id: '1'
            },
            {
                name: '2',
                create_time: '111111',
                auth_time: '111111',
                auth_name: 'admin',
                _id: '2'
            },
            {
                name: '3',
                create_time: '111111',
                auth_time: '111111',
                auth_name: 'admin',
                _id: '3'
            }
        ],
        role: {}, //选中的行
        isShowAdd: false //是否显示添加界面
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
        const {roles,role,isShowAdd} = this.state
        const title = (
            <span>
                <Button type='primary' onClick={ () => {this.setState({isShowAdd: true})}} style={{marginRight: 20}}>创建角色</Button>
                <Button type='primary' disabled={!role._id}>设置角色权限</Button>
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
            </Card>
        )
    }
}
