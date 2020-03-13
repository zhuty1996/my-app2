import React, { Component } from 'react'
import {Card, List, Form, Input, Cascader, Upload, Button} from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import LinkButton from '../../components/link-button/link-button'
import { number } from 'prop-types';
const { TextArea } = Input;
//添加和更新的子路由
export default class AddUpdate extends Component {
    onFinish = values => {
        console.log('Success:', values);
    };
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    // 验证价格的自定义验证
    validatorPrice = (rule,value) => {
        if(value*1 > 0){
            return Promise.resolve()
        }else{
            return Promise.reject('价格必须大于0！');
        }
    }
    render() {
        //指定Item布局的配置对象
        const layout = {
            labelCol: { span: 2 }, //左侧label的宽度
            wrapperCol: { span: 8 }, //右侧输入框的宽度
          }
        const title = (
            <span>
                <LinkButton><ArrowLeftOutlined style={{fontSize: 20}} onClick={ () => this.props.history.goBack()} /></LinkButton>
                <span>商品详情</span>
            </span>
        )
        return (
            <Card title={title}>
                <Form {...layout} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                {/* 表单验证必须在Form.Item加上name属性 */}
                    <Form.Item 
                        name="productName"
                        label='商品名称:' 
                        rules={[{
                                    required: true,
                                    whitespace: true,
                                    message: '请输入商品名称!',
                                }]}>
                        <Input placeholder='商品名称' />
                    </Form.Item>
                    <Form.Item 
                        label='商品描述:'
                        name="productDesc"
                        rules={[{
                                    required: true,
                                    whitespace: true,
                                    message: '请输入商品描述!',
                        }]}
                    >
                        <TextArea placeholder="请输入商品描述" autoSize={{ minRows: 2, maxRows: 6 }} />
                    </Form.Item>
                    <Form.Item 
                        label='商品价格:'
                        name='productPrice'
                        rules={[{
                            required: true,
                            whitespace: true,
                            message: '请输入商品价格!',

                        },
                        // 自定义验证，价格应该大于0
                        {
                            validator: this.validatorPrice
                        }
                        ]}
                        >
                        <Input type='number' addonAfter='元' />
                    </Form.Item>
                    <Form.Item label='商品分类:'>
                        <Input placeholder="商品分类" />
                    </Form.Item>
                    <Form.Item label='商品详情:'>
                        <Input placeholder="商品详情" />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>提交</Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}
