import React, { Component } from 'react'
import { Card, Table, Button} from 'antd';
import { PlusOutlined} from '@ant-design/icons'

import LinkButton from '../../components/link-button/link-button'

export default class Category extends Component {
  state = {
    columns : [
      {
        title: '分类', //列头显示文字（函数用法 3.10.0 后支持）
        dataIndex: 'name', //列数据在数据项中对应的路径，支持通过数组查询嵌套路径
        key: 'name', //React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性
      },
      {
        title: '操作',
        width: '300px',
        key: 'action',
        render: (text, record) => ( //生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并
          <span>
            <LinkButton style={{ marginRight: 16 }}>修改分类</LinkButton>
            {/* 向事件回调函数传递参数：先定义一个匿名函数，在函数调用 处理的函数并传入参数 */}
            <LinkButton onClick={ () => {this.showSubCategorys(text)}}>查看子分类</LinkButton>
          </span> 
        ),
      },
    ],
    data : [
      {
        parentId: '0',
        _id: '1',
        name: '家用电器',
        __v: 0
      },
      {
          parentId: '0',
          _id: '2',
          name: '电脑',
          __v: 0
      },
      {
          parentId: '0',
          _id: '3',
          name: '冰箱',
          __v: 0
      },
      {
        parentId: '0',
        _id: '4',
        name: '手机',
        __v: 0
      },
      {
        parentId: '0',
        _id: '5',
        name: '厨房电器',
        __v: 0
      },
      {
        parentId: '0',
        _id: '6',
        name: '母婴幼儿',
        __v: 0
      },
    ],
  }
  
  //接收到该行的parentId _id等信息
  showSubCategorys = (text) => {
    const subColums =[{
      title: '分类',
      dataIndex: 'name',
      key: 'name',
    },
      {
        title: '操作',
        width: '300px',
        key: 'action',
        render: (text, record) => ( 
          <span>
            <LinkButton style={{ marginRight: 16 }}>修改分类</LinkButton> 
          </span>
        ),
      }
    ]
    const subData = [
      {
        parentId: '1',
        _id: '1',
        name: '子分类',
        __v: 0
      },
      {
          parentId: '1',
          _id: '2',
          name: '子分类',
          __v: 0
      },
      {
          parentId: '1',
          _id: '3',
          name: '子分类',
          __v: 0
      },
      {
        parentId: '1',
        _id: '4',
        name: '子分类',
        __v: 0
      },
      {
        parentId: '1',
        _id: '5',
        name: '子分类',
        __v: 0
      },
      {
        parentId: '1',
        _id: '6',
        name: '子分类',
        __v: 0
      },] 
    this.setState({
      columns: subColums,
      data: subData,
    }, () => { //在状态更新且重新render()后执行
      console.log('data:',this.state.data)
    })
  }

  showCategorys = () => {
    const columns = [
      {
        title: '分类', //列头显示文字（函数用法 3.10.0 后支持）
        dataIndex: 'name', //列数据在数据项中对应的路径，支持通过数组查询嵌套路径
        key: 'name', //React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性
      },
      {
        title: '操作',
        width: '300px',
        key: 'action',
        render: (text, record) => ( //生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并
          <span>
            <LinkButton style={{ marginRight: 16 }}>修改分类</LinkButton>
            {/* 向事件回调函数传递参数：先定义一个匿名函数，在函数调用 处理的函数并传入参数 */}
            <LinkButton onClick={ () => {this.showSubCategorys(text)}}>查看子分类</LinkButton>
          </span> 
        ),
      },
    ];
    const data = [
      {
        parentId: '0',
        _id: '1',
        name: '家用电器',
        __v: 0
      },
      {
          parentId: '0',
          _id: '2',
          name: '电脑',
          __v: 0
      },
      {
          parentId: '0',
          _id: '3',
          name: '冰箱',
          __v: 0
      },
      {
        parentId: '0',
        _id: '4',
        name: '手机',
        __v: 0
      },
      {
        parentId: '0',
        _id: '5',
        name: '厨房电器',
        __v: 0
      },
      {
        parentId: '0',
        _id: '6',
        name: '母婴幼儿',
        __v: 0
      },
    ]
    this.setState({
      columns: columns,
      data: data,
    })
  }

    render() {
        //Card的左侧文字
        const title = this.state.data[1].parentId === '0' ? '一级分类列表' : (<div><LinkButton onClick={this.showCategorys}>一级分类列表</LinkButton> <span>--> 一级分类的子分类</span></div>)
        //Card的右侧
        const extra = (
            <Button type='primary'>
                <PlusOutlined />添加
            </Button>
        )
      
        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table columns={this.state.columns} dataSource={this.state.data} bordered rowKey='_id' pagination={{defaultPageSize: 5, showQuickJumper: true,}}>

                    </Table>
                </Card>
            </div>
        )
    }
}
