import React, { Component } from 'react'
import './left-nav.less'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


//左侧导航组件
export default class LeftNav extends Component {
    state = {
        collapsed: false,
      };
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <div>
                <div className='left-nav'>
                    <Link to='/' className='left-nav-header'>
                        <img src={logo} alt="logo"/>
                        <h1>后台管理</h1>
                    </Link>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                    >
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>首页</span>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <MailOutlined />
                            <span>商品</span>
                        </span>
                        }
                    >
                        <Menu.Item key="2">
                            <MailOutlined />
                            <span>品类管理</span>
                        </Menu.Item>

                        <Menu.Item key="3">
                            <MailOutlined />
                            <span>商品管理</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
