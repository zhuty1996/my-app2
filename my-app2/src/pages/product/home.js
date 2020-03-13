import React, { Component } from 'react'
import {Card, Select, Input, Table, Button, message } from 'antd'
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
                '__v' : '0',
                'detail' : '<h3>shdkjshadhksjahdkjs</h3>'
            },
            {
                'status' : '0',
                'id' : '646412313213',
                'name' : '华硕(AUSU)飞行堡垒',
                'desc' : '15.6寸大屏游戏笔记本',
                'price' : '6799',
                'pCategoryId' : '213454534',
                'categoryId' : '2132135454',
                '__v' : '0',
                'detail' : '<h3>dsjadlajsldkjsa</h3>'
            },
        ], //商品的数组
        searchType: 'productName', //搜索类型
        searchName: '', //输入的搜索

    }

    updateStatus= (status) => {
        if( status === '1'){
            message.success('更新商品成功')
            this.setState({
                status: '0'
            })
        }else {
            message.success('更新商品成功')
            this.setState({
                status: '1'
            })
        }
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
                    console.log('status',status)
                    return(
                        <div>
                            <Button 
                            type='primary'
                            onClick={ () => {this.updateStatus(status)}}
                            >
                            {status === '1' ? '上架' : '下架'}</Button>
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
                    {/* 将product对象使用state传递给目标路由组件 */}
                        <LinkButton onClick={ () => this.props.history.push('/product/detail', {product})}>详情</LinkButton>
                        <LinkButton onClick={ () => this.props.history.push('/product/addupdate', product)}>修改</LinkButton>
                    </div>
                    )
                }
            }
          ]
    }

        //发送数据接口请求
    // getProduct = async(pageNum) => {
    //     this.setState({loading: true}) //显示loading
    //     const {searchName, searchType} = this.state
    //     //如果搜索关键字有值，说明要进行搜索分页，否则为一般分页
    //     let result //结果统一处理
    //     if(searchName){
    //         result = await reqSearchProducts({pageNum, pageSize: 3, searchName, searchType})
    //     }else{
    //         result = await reqProducts(pageNum, 3)
    //     }
    //     this.setState({loading: false}) //隐藏loading
    //     if(result.status === 0){
    //         //取出分页数据，更新状态，显示分页列表
    //         this.setState({
    //             total,
    //             products: result.data.list,
    //         })
    //     }
    // }

    render() {
        const {products, searchType, searchName} = this.state
        console.log('searchType',searchType)
        console.log('searchName', searchName)
        const title = (
        <div>
        {/* 获取搜索类型的值 */}
            <Select value={searchType} onChange={value => this.setState({searchType: value})}>
                <Option value='productName'>按名称搜索</Option>
                <Option value='productDesc'>按描述搜索</Option>
            </Select>
            {/* 获取输入的搜索条件的值 */}
            <Input placeholder='输入关键字搜索' style={{width : 150, margin: '0 15px'}} value={searchName} onChange={e => this.setState({searchName: e.target.value})} />
            {/* onClick={ () => {this.getProduct(1)}} 搜索事件，this.getProduct()是请求接口数据的函数，1是当前页数*/}
            <Button type='primary' >搜索</Button>
        </div>)
        const extra = (
        <Button type='primary' onClick={ () => this.props.history.push('/product/addupdate')}>
            <PlusOutlined />添加商品
        </Button>)
        return (
            <Card title={title} extra={extra}>
                <Table dataSource={products} columns={this.columns} rowKey='id' bordered />
                {/* pagination={{onChange: (pageNum) => {this.getProduct(pageNum)}}} 翻页发送请求，this.getProduct()是请求接口数据的函数 */}
            </Card>
        )
    }
}
