import React, { Component } from 'react'
import './login.less'
import logo from '../../assets/images/logo.png'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// 登陆的路由组件
export default class Login extends Component {
    
    render() {
        //onFinish 提交表单且数据验证成功后回调事件
        const onFinish = values => {
            // 统一验证：values的值
            console.log('Received values of form: ', values);
          };
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt=''/>
                    <h1>后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={onFinish}
                        initialValues={{
                            remember: true,
                        }}>
                        {/* 声明式校验 */}
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                whitespace: true,
                                message: '请输入用户名!',
                            },
                            {
                                min: 4,
                                message: '请输入至少4位用户名!',
                            },
                            {
                                max: 12,
                                message: '用户名最多12位!',
                            },
                            {
                                pattern: /^[a-zA-Z0-9_]+$/,
                                message: '用户名必须是字母、数字或下划线!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            // 自定义验证
                            rules={[
                                {
                                    validator(rule, value) {
                                    if (!value ) {
                                        return Promise.reject('请输入密码');
                                    }
                                    else if (value.length < 4){
                                        return Promise.reject('请输入4位以上密码');
                                    }
                                    else if (value.length > 12){
                                        return Promise.reject('请输入12位以内密码');
                                    }
                                    else if (!/^[a-zA-Z0-9_]+$/.test(value)){
                                        return Promise.reject('密码是字母数字或下划线');
                                    }
                                    return Promise.resolve();
                                    },
                                }
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
        
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
