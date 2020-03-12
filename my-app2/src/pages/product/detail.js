import React, { Component } from 'react'
import { Card, List } from 'antd'
import {ArrowLeftOutlined} from '@ant-design/icons'

import LinkButton from '../../components/link-button/link-button'

//详情子路由
export default class Detail extends Component {
    render() {
        //读取home传递过来的state数据：具体哪个产品 
        const {name, desc, price, detail} = this.props.location.state
        const title = (
            <span>
                <LinkButton><ArrowLeftOutlined onClick={ () => this.props.history.goBack()} /></LinkButton>
                <span>商品详情</span>
            </span>
        )
        
        return (
            <Card title={title}>
                <List footer={null}>
                    <List.Item>
                        <span className='list-left'>商品名称</span>
                        <span>{name}</span>
                    </List.Item>
                    <List.Item>
                        <span className='list-left'>商品描述</span>
                        <span>{desc}</span>
                    </List.Item>
                    <List.Item>
                        <span className='list-left'>商品价格</span>
                        <span>{price}</span>
                    </List.Item>
                    <List.Item>
                        <span className='list-left'>所属分类</span>
                        <span>电脑——>笔记本</span>
                    </List.Item>
                    <List.Item>
                        <span className='list-left'>商品详情</span>
                        <span dangerouslySetInnerHTML={{__html: detail}}></span>
                    </List.Item>
                </List>
                    
                
                
            </Card>
        )
    }
}
