import React, {Component} from 'react';
import DB from './DB'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            link:'./output/baidu.png',
            errorMsg:'',
        }
    }

    _submit(){
        DB.Create.link({
            link:this.link.value,
        }).then(data=>{
            this.setState({
                link:data.url,
            })
        },({errorMsg})=>{
            this.setState({
                errorMsg,
            })
        })
    }

    render(){
        const {link,errorMsg} = this.state
        return [
            <h3 key='title'>链接地址转图片</h3>,
            <div key='link' className='in'>
                <span>链接地址:</span>
                <input placeholder='https://baidu.com'
                    ref={link=>this.link=link}
                    type="text"/>
                <a href="javascript:;" onClick={this._submit.bind(this)}>确定</a>
            </div>,
            <div key='preview' className='preview'>
                <img src={link} alt=""/>
            </div>,
            <p key='p'>
                服务器不存储数据,不定时清空,建议
                <a href={link} download="saveimage">下载</a>
            </p>,
            <div key='dialog' id="dialog" style={{display:(errorMsg?'':'none')}}>
                <a href="javascript:;"></a>
                <div>
                    {errorMsg}
                    <span onClick={()=>{
                        this.setState({
                            errorMsg:'',
                        })
                    }}>确定</span>
                </div>
            </div>
        ]
    }
}
