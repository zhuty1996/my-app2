import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import { Menu } from 'antd';


import './left-nav.less'
import logo from '../../assets/images/logo.png'
import menuConfig from '../../config/menuConfig'

const { SubMenu } = Menu;


//左侧导航组件
class LeftNav extends Component {
    constructor(props){
        super(props)
        this.menuNodes = this.getMenuNodes(menuConfig)
    }
    
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
                const path = this.props.location.pathname
                //查找与当前请求路径匹配的子item
                const cItem = item.children.find( cItem => cItem.key === path)
                //如果存在则说明当前item所对应的子列表需要展开
                if(cItem){
                    this.openKey = item.key
                }
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

    //在第一次render之前执行一次，为第一次render准备数据（同步的）
    // componentWillMount(){
    //     this.menuNodes = this.getMenuNodes(menuConfig)
    //     console.log('要替换componentWillMount！！！！！！！！！！！')
    // }

    render() {
        //得到当前请求的路由路径
        const path = this.props.location.pathname
        const openKey = this.openKey
        return (
            <div>
                <div className='left-nav'>
                    <Link to='/' className='left-nav-header'>
                        <img src={logo} alt="logo"/>
                        <h1>后台管理</h1>
                    </Link>
                </div>
                <Menu
                    selectedKeys={[path]} //selectedKeys当前选中的菜单项 key 数组;defaultSelectedKeys初始选中的菜单项 key 数组
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                    >

                    {this.menuNodes}

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

export default withRouter(LeftNav)