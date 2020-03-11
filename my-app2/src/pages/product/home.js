import React, { Component } from 'react'
import {Card, Select, Input, Table, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import LinkButton from '../../components/link-button/link-button'

const Option = Select.Option

export default class Home extends Component {
    constructor(){
        super()
        this.initColumns()
    }
    state = {
        products : [
            {
                'status' : '1',
                'id' : '65453112121',
                'name' : '联想Think Pad',
                'desc' : '年度重量级新品加薄机身',
                'price' : '6000',
                'pCategoryId' : '34354543454',
                'categoryId' : '5453454443',
                '__v' : '0'
            },
            {
                'status' : '0',
                'id' : '646412313213',
                'name' : '华硕(AUSU)飞行堡垒',
                'desc' : '15.6寸大屏游戏笔记本',
                'price' : '6799',
                'pCategoryId' : '213454534',
                'categoryId' : '2132135454',
                '__v' : '0'
            },
        ], //商品的数组
        
    }
    //初始化table的列的数组
    initColumns = () => {
        this.columns =[
            {
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '商品描述',
                dataIndex: 'desc',
            },
            {
                title: '价格',
                dataIndex: 'price',
                render: (price) => '*' + price //当前指定了对应的属性，传入的是对应的值
            },
            {
                title: '状态',
                width: '100px', //指定宽度
                dataIndex: 'status',
                render: (status) => {
                    return(
                        <div>
                            <Button type='primary'>{status === '1' ? '上架' : '下架'}</Button>
                            <p>{status === '1' ? '已下架' : '在售'}</p>
                        </div>
                    )
                }
            },
            {
                title: '操作',
                width: '100px',
                render: (product) => {
                    return(
                    <div>
                        <LinkButton>详情</LinkButton>
                        <LinkButton>修改</LinkButton>
                    </div>
                    )
                }
            }
          ]
    }
    render() {
        const {products} = this.state
        const title = (
        <div>
            <Select value='1'>
                <Option value='1'>按名称搜索</Option>
                <Option value='2'>按描述搜索</Option>
            </Select>
            <Input placeholder='输入关键字搜索' style={{width : 150, margin: '0 15px'}}/>
            <Button type='primary'>搜索</Button>
        </div>)
        const extra = (
        <Button type='primary'>
            <PlusOutlined/>添加商品
        </Button>)
        return (
            <Card title={title} extra={extra}>
                <Table dataSource={products} columns={this.columns} rowKey='id' bordered/>
            </Card>
        )
    }
}
