/* 应用的根组件*/
import React, { Component } from 'react'
import {Button , message } from 'antd'

export default class App extends Component {
    handleClick = () => {
        message.success('点击成功')
    }
    render() {
        return (
            <Button type="primary" onClick={this.handleClick}>按钮</Button>
        )
    }
}
