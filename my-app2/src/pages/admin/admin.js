import React, { Component } from 'react'
import {Layout} from 'antd'
import LeftNav from '../../components/left-nav/left-nav'
import Header from '../../components/header/header'

const { Content, Footer, Sider } = Layout;

// 后台管理的路由组件
export default class Admin extends Component {
    render() {
        return (
            <Layout style={{height : '100%'}}>
                <Sider >
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor: 'white'}}>Content</Content>
                    <Footer style={{textAlign: 'center', color: '#ccc'}}>推荐使用谷歌浏览器</Footer>
                </Layout>
            </Layout>
        )
    }
}
