import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import './header.less'
import formateDate from '../../utils/date'
import menuCofig from '../../config/menuConfig'

class Header extends Component {
    state ={
        currentTime : formateDate(Date.now())
    }
    getTime = () => {
        // 每隔1s获取当前时间，并更新状态数据currentTime
        setInterval( () => {
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
                const cItem = item.children.find(cItem => cItem.key === path) 
                //如果有值说明才有匹配的
                if(cItem){
                    title = cItem.title
                }
            }
        })
        return title
    }
        //一般执行异步操作：发请求/启动定时器
    componentDidMount(){
        //获取当前时间
        this.getTime()
    }
    render() {
        const titleH1 = this.getTitle()
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎,admin(1)</span>
                    <a >退出(2)</a>
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