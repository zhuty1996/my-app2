import React, { Component } from 'react'
import './left-nav.less'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import {
  PieChartOutlined,
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
                        <Link to='/home'>
                            <PieChartOutlined />
                            <span>首页</span>
                        </Link>
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
                            <Link to='/category'>
                                <MailOutlined />
                                <span>品类管理</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="3">
                            <Link to='/product'>
                                <MailOutlined />
                                <span>商品管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="4">
                        <Link to='/user'>
                            <PieChartOutlined />
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <Link to='/role'>
                            <PieChartOutlined />
                            <span>角色管理</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub2"
                        title={
                        <span>
                            <MailOutlined />
                            <span>图形图表</span>
                        </span>
                        }
                    >
                        <Menu.Item key="6">
                            <Link to='/chars/bar'>
                                <MailOutlined />
                                <span>柱形图</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="7">
                            <Link to='/chars/line'>
                                <MailOutlined />
                                <span>折线图</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="8">
                            <Link to='/chars/pie'>
                                <MailOutlined />
                                <span>饼状图</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
