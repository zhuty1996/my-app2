import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';


import './left-nav.less'
import logo from '../../assets/images/logo.png'
import menuConfig from '../../config/menuConfig'

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
    /*根据menu的数据数组生成对应的标签数组
      使用map() + 递归调用
    */
    getMenuNodes_map = (menuConfig) =>{
        return menuConfig.map( (item) => {
            //判断数据数组是否含有children来选择渲染哪个标签
           if(!item.children){
               return (
                <Menu.Item key={item.key}>
                    <Link to={item.key}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
               )
           } else {
               return(
                <SubMenu
                    key={item.key}
                    title={
                    <span>
                        {item.icon}
                        <span>{item.title}</span>
                    </span>
                    }
                >
                {/* 如果有子节点则 递归调用 又走一遍来渲染出Menu.Item*/}
                    {this.getMenuNodes_map(item.children)} 
                </SubMenu>
               )
           } 
        })
    }

    /*根据menu的数据数组生成对应的标签数组
      使用map() + 递归调用
    */
    getMenuNodes = (menuConfig) => {
        return menuConfig.reduce( (pre,item) => { //pre是上一次统计的结果
            //向pre中添加<Menu.Item>或<SubMenu/>
            if (!item.children){
                pre.push(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }else{
                pre.push(
                    <SubMenu
                        key={item.key}
                        title={
                        <span>
                            {item.icon}
                            <span>{item.title}</span>
                        </span>
                        }
                    >
                       {this.getMenuNodes(item.children)} 
                    </SubMenu>
                )
            }
            return pre //当前统计的结果
        },[])
    }

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

                    {this.getMenuNodes(menuConfig)}

                    {/* <Menu.Item key="1">
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
                    </SubMenu> */}
                </Menu>
            </div>
        )
    }
}
