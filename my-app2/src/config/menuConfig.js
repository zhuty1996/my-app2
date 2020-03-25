import React from 'react'
import {
    PieChartOutlined,
    MailOutlined,
  } from '@ant-design/icons';

const menuList = [
    {
        title: '首页',  //菜单对应标题
        key: '/home',   //路由
        icon: <PieChartOutlined/>,   //图标名称
    },
    {
        title: '商品',  
        key: '/cp',   
        icon: <MailOutlined/>,   
        children: [     //子菜单列表
            {
                title: '品类管理',  
                key: '/category',   
                icon: <MailOutlined/>,   
            },
            {
                title: '商品管理',  
                key: '/product',   
                icon: <MailOutlined/>, 
            }
        ]
    },
    {
        title: '用户管理',  
        key: '/user',   
        icon: <MailOutlined/>,  
    },
    {
        title: '角色管理',  
        key: '/role',   
        icon: <MailOutlined/>,  
    },
    {
        title: '图形图表',  
        key: '/chars',   
        icon: <MailOutlined/>,   
        children: [     
            {
                title: '柱状图',  
                key: '/chars/bar',   
                icon: <MailOutlined/>,   
            },
            {
                title: '折线图',  
                key: '/chars/line',   
                icon: <MailOutlined/>, 
            },
            {
                title: '饼状图',  
                key: '/chars/pie',   
                icon: <MailOutlined/>,   
            }
        ]
    }
]

export default menuList