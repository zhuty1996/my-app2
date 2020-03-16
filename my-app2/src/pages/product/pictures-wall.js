import React, { Component } from 'react'
import { Modal, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default class PicturesWall extends Component {
    state = {
        previewVisible: false, //标识是否显示大图预览界面
        previewImage: '', //大图的url
        fileList: [
            {
                uid: '-1', // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
                name: 'image.png', // 文件名
                status: 'done', // 状态有：uploading done error removed
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-5',
                name: 'image.png',
                status: 'error',
            },
        ],
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        //显示指定图片对应的大图
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    }

    //     文件状态改变的回调，返回为：
    //     file: { /* ... */ },
    //     fileList: [ /* ... */ ],
    //     event: { /* ... */ },
    handleChange = ({ file,fileList }) => {
        console.log('file',file)
        this.setState({ fileList })
    }
    

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76" //上传的地址
                    accept="image/*" //接受上传的文件类型
                    listType="picture-card" //上传列表的内建样式
                    fileList={fileList} //已经上传的文件列表（受控）
                    onPreview={this.handlePreview} //点击文件链接或预览图标时的回调
                    onChange={this.handleChange} //上传文件改变时的状态
                >
                    {fileList.length >= 4 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}
