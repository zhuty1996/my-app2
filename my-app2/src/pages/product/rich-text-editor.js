import React, { Component } from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html' //文字转换成html
import htmlToDraft from 'html-to-draftjs' //html转换成文字
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import PropTypes from 'prop-types'

export default class EditorConvertToHTML extends Component {
		constructor(props){
			super(props)
			const html = this.props.detail
			if (html){ //如果有值，根据html字符串创建一个对应的编辑对象
				const contentBlock = htmlToDraft(html)
				const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
				const editorState = EditorState.createWithContent(contentState);
				this.state = {
					editorState,
				}
			}
		}
		static propTypes ={
			detail: PropTypes.string
		}

    state = {
      editorState: EditorState.createEmpty(), //创建了一个没有内容的编辑对象
    }
  
    //输入过程中实时回调
    onEditorStateChange = (editorState) => {
      this.setState({
        editorState,
      });
		};
		
		getDetail = () => {
			//返回输入数据对应的html格式的文本
			return draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
		}
		
		//
		uploadImageCallBack = (file) => {
			return new Promise(
				(resolve,reject) => {
					const xhr = new XMLHttpRequest()
					xhr.open('POST', 'https://api.imgur.com/3/image')
					xhr.setRequestHeader('Authorization', 'Client-ID XXXXX')
					const data = new FormData()
					data.append('image', file)
					xhr.send(data)
					xhr.addEventListener('load', () => {
						const response = JSON.parse(xhr.responseText)
						resolve({data: {link: response.data.url}})
					})
					xhr.addEventListener('error', () => {
						const error = JSON.parse(xhr.responseText)
						reject(error)
					})
				}
			)
		}
  
    render() {
      const { editorState } = this.state;
      return (
          <div>
              <Editor
								editorState={editorState}
								editorStyle={{border: '1px solid black', minHeight: 200, paddingLeft: 10}}
								onEditorStateChange={this.onEditorStateChange}
								toolbar={{
									image: { uploadCallback: this.uploadImageCallBack, alt: {present: true,mandatory: true}}
								}}
							/>
							{/* <textarea
								disabled
								value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
							/> */}
          </div>
      );
    }
  }