import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import AddUpdate from './add-update'
import Detail from './detail'
import Home from './home'

//商品路由
export default class Product extends Component {
    render() {
        return (
            <Switch>
                <Route path='/product' exact component={Home} />
                <Route path='/product/detail' component={Detail}/>
                <Route path='/product/addupdate' component={AddUpdate}/>
                <Redirect to='/product'/>
            </Switch>
        )
    }
}
