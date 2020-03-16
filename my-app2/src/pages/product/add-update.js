import React, { Component } from 'react'
import {Card, Form, Input, Cascader, Button} from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import LinkButton from '../../components/link-button/link-button'
import PicturesWall from './pictures-wall'
const { TextArea } = Input;


//添加和更新的子路由
export default class AddUpdate extends Component {
    //获取子组件的方法
    constructor(props){
        super(props)

        //创建用来保存ref标识的标签对象的容器
        this.rw = React.createRef()
    }
    state = { 
        //Cascader级联选择器的数据
        options : [
            {
            value: "34354543454",
            label: '电脑',
            isLeaf: false, //false：代表有下一级
            },
            {
            value: 'phone',
            label: '手机',
            isLeaf: false,
            },
        ]
    }
    onFinish = values => {
        console.log('Success:', values);
        const imgs = this.rw.current.getImgs()
        console.log('imgs',imgs)
    };
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    // 验证价格的自定义验证
    validatorPrice = (rule,value) => {
        if(value*1 > 0){
            return Promise.resolve()
        }else{
            return Promise.reject('价格必须大于0！')
        }
    }
    //Cascater监听
    onChange = (value, selectedOptions) => {
        console.log(value, selectedOptions)
    };
    //Cascater动态加载选项
    loadData = selectedOptions => {
        const targetOption = selectedOptions[selectedOptions.length - 1]; //selectedOptions[0]
        //显示loading
        targetOption.loading = true

        // load options lazily
        setTimeout(() => {
            targetOption.loading = false
            targetOption.children = [
                {
                    label: `${targetOption.label} Dynamic 1`,
                    value: '5453454443',
                    isLeaf: true,
                },
                {
                    label: `${targetOption.label} Dynamic 2`,
                    value: 'dynamic2',
                    isLeaf: true,
                },
            ]
            //更新状态 模拟请求异步获取数据并更新
            this.setState({
                options: [...this.state.options],
            });
        }, 1000)
    }
    render() {
        let product = this.props.location.state //如果是添加则应该没有值，修改有值
        const isUpdate = !!product //判断是否为null，undefined，空串
        product = product || {} //如果没有值，则保存为空对象
        console.log('product',product)

        const categoryIds = [] //用来接收级联分类ID的数组 
        if(isUpdate){
            //商品是一级分类的
            categoryIds.push(product.categoryId)
            
        }else{
            //商品是二级分类的
            categoryIds.push(product.pCategoryId)
            categoryIds.push(product.categoryId)
        }
        console.log('categoryIds',categoryIds)


        //指定Item布局的配置对象
        const layout = {
            labelCol: { span: 2 }, //左侧label的宽度
            wrapperCol: { span: 8 }, //右侧输入框的宽度
        }
        const title = (
            <span>
                <LinkButton><ArrowLeftOutlined style={{fontSize: 20}} onClick={ () => this.props.history.goBack()} /></LinkButton>
                <span>{isUpdate? '修改商品' : '添加商品'}</span>
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
                        <Input placeholder='商品名称' defaultValue={product.name} />
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
                    {/* 默认值不显示？？？？？？？？ */}
                        <TextArea defaultValue={product.desc} placeholder={product.desc} allowClear />
                        
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
                        <Input type='number' addonAfter='元' defaultValue={product.price}/>
                    </Form.Item>
                    <Form.Item 
                        label='商品分类:'
                        name='productOptions'
                        rules={[{
                            required: true,
                            message: '请指定商品分类!',
                        }]}
                        >
                        <Cascader 
                            options={this.state.options} 
                            loadData={this.loadData} 
                            onChange={this.onChange}
                            changeOnSelect //当此项为 true 时，点选每级菜单选项值都会发生变化
                            placeholder="请选择商品分类" 
                            defaultValue= {categoryIds}
                            />
                    </Form.Item>
                    <Form.Item label='商品图片:'>
                    {/* 获取子组件的方法 */}
                        <PicturesWall ref={this.rw} />
                    </Form.Item>
                    <Form.Item label='商品详情:'>
                        <Input placeholder="请输入商品详情" />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>提交</Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}
