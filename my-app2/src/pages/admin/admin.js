import React, { Component } from 'react'
import {Layout} from 'antd'
import { Switch, Redirect,Route } from "react-router-dom";

import LeftNav from '../../components/left-nav/left-nav'
import Header from '../../components/header/header'
//引入子组件
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const { Content, Footer, Sider } = Layout;

// 后台管理的路由组件
export default class Admin extends Component {
    render() {
        return (
            <Layout style={{minHeight : '100%'}}>
                <Sider >
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/product' component={Product}/>
                            <Route path='/role' component={Role}/>
                            <Route path='/user' component={User}/>
                            <Route path='/chars/bar' component={Bar}/>
                            <Route path='/chars/line' component={Line}/>
                            <Route path='/chars/pie' component={Pie}/>
                            <Redirect to='/home'/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#ccc'}}>推荐使用谷歌浏览器</Footer>
                </Layout>
            </Layout>
        )
    }
}
