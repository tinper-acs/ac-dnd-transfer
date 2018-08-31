
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" 应用组件名称","code":"/**\r\n *\r\n * @title 应用组件名称\r\n * @description 应用组件描述\r\n *\r\n */\r\n\r\n// import React, { Component } from 'react';\r\n// import Temp from '../../src/index';\r\n\r\n//  class Demo1 extends Component {\r\n    \r\n// }\r\n\r\n// \r\n\r\n\r\n\r\nimport React, { Component } from 'react';\r\nimport Temp from '../../src/index';\r\n\r\nconst mockData = [];\r\nfor (let i = 0; i < 20; i++) {\r\n  mockData.push({\r\n    key: i.toString(),\r\n    title: `content${i + 1}`,\r\n    description: `description of content${i + 1}`,\r\n    disabled: i % 3 < 1,\r\n\r\n  });\r\n}\r\n\r\nconst targetKeys = mockData\r\n        .filter(item => +item.key % 3 > 1)\r\n        .map(item => item.key);\r\n\r\nclass Demo extends React.Component {\r\n  state = {\r\n    targetKeys,\r\n    selectedKeys: [],\r\n    showModal: false,\r\n    modalSize: ''\r\n  }\r\n\r\n  handleChange = (nextTargetKeys, direction, moveKeys) => {\r\n    this.setState({ targetKeys: nextTargetKeys });\r\n\r\n    console.log('targetKeys: ', targetKeys);\r\n    console.log('direction: ', direction);\r\n    console.log('moveKeys: ', moveKeys);\r\n  }\r\n\r\n  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {\r\n    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });\r\n\r\n    console.log('sourceSelectedKeys: ', sourceSelectedKeys);\r\n    console.log('targetSelectedKeys: ', targetSelectedKeys);\r\n  }\r\n\r\n  handleScroll = (direction, e) => {\r\n    console.log('direction:', direction);\r\n    console.log('target:', e.target);\r\n  }\r\n\r\n\r\n  render() {\r\n    const state = this.state;\r\n\r\n    return (\r\n       <Temp\r\n          dataSource={mockData}\r\n          titles={['Source', 'Target']}\r\n          targetKeys={state.targetKeys}\r\n          selectedKeys={state.selectedKeys}\r\n          onChange={this.handleChange}\r\n          onSelectChange={this.handleSelectChange}\r\n          onScroll={this.handleScroll}\r\n          render={item => item.title}\r\n        />\r\n    );\r\n  }\r\n}\r\n","desc":" 应用组件描述"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
