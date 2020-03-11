import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Form, Input} from 'antd'

//添加分类的组件
const Item = Form.Item

class UpdateForm extends Component {
    static propTypes = {
        categoryName : PropTypes.string.isRequired,
        setForm : PropTypes.func.isRequired
    }
    componentWillMount(){
        //将form对象通过setForm()方法传递给父组件
        this.props.setForm(this.props.form)
    }
    
    render() {
        return (
            <Form>
                <Item>
                    <Input placeholder='请输入分类名称' value={this.props.categoryName}/>
                </Item>
            </Form>
        )
    }
}
export default UpdateForm