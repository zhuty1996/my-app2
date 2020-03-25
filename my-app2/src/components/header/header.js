import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Modal } from 'antd';

import './header.less'
import formateDate from '../../utils/date'
import menuCofig from '../../config/menuConfig'
import LinkButton from '../link-button/link-button'

class Header extends Component {
    state ={
        currentTime : formateDate(Date.now())
    }
    getTime = () => {
        // 每隔1s获取当前时间，并更新状态数据currentTime
        this.intervalId = setInterval( () => {
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
        },1000)
    }
    getTitle = () => {
        const path = this.props.location.pathname
        let title
        //如果当前path与key一样，则取他的title
        menuCofig.forEach(item => { 
            if(item.key === path){
                title = item.title
            }else if (item.children){
                //在所有子item中查找符合条件的
                const cItem = item.children.find(cItem =>  path.indexOf(cItem.key) === 0) 
                //如果有值说明才有匹配的
                if(cItem){
                    title = cItem.title
                }
            }
        })
        return title
    }
    logOut = () => {
        Modal.confirm({
            title: '退出登录',
            content: '确定退出登录吗',
            okText: '确定',
            cancelText: '取消',
            //使用箭头函数来获取this
            onOk: () => {
                //删除保存的user数据
                
                //跳转到登陆页面
              this.props.history.replace('/login')

              console.log('确定',this);
            },
            onCancel() {
              console.log('取消');
            },
          });
    }

    //一般执行异步操作：发请求/启动定时器
    componentDidMount(){
        //获取当前时间
        this.getTime()
    }

    //当前组件卸载之前调用
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render() {
        const titleH1 = this.getTitle()
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎,admin(1)</span>
                    <LinkButton onClick={this.logOut}>退出(2)</LinkButton>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>
                    {titleH1}
                    </div>
                    <div className='header-bottom-right'>
                        <span>{this.state.currentTime}</span>
                        <span>北京</span>
                        <span>晴</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)