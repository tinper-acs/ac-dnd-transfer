import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transfer } from 'tinper-bee';
const propTypes = {
    title: PropTypes.string,
};
import './index.css'
class AcDndTransfer extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        enterKey:'',
        targetKeys:this.props.targetKeys||[]
      };
      this.dragEnter=this.dragEnter.bind(this)
      this.dragEnd=this.dragEnd.bind(this)
    }
    componentDidMount() {

    }
    dragEnter(e,key){
      console.log('enterKey',key)
      this.setState({
        enterKey:key
      })
    }
    dragEnd(e,key){
      const { enterKey, targetKeys } = this.state
      const tempTargetKeys = targetKeys.slice()
      let dragKey = tempTargetKeys.findIndex((item)=>item===key)
      let dragEnterKey = tempTargetKeys.findIndex((item)=>item===enterKey)
      console.log(dragKey,dragEnterKey)

      let tempObj = tempTargetKeys[dragKey]
      tempTargetKeys[dragKey]=tempTargetKeys[dragEnterKey]
      tempTargetKeys[dragEnterKey]=tempObj
      this.setState({
        targetKeys:tempTargetKeys
      })
      console.log('dragEnd',key);
    }

    render() {
      const {
        targetKeys
      } = this.state
      console.log(targetKeys)
      return (
        <Transfer
          {...this.props}
          targetKeys={targetKeys}
          render={(da)=>{
              return (<span className="item" id={da.key} key={da.key} draggable="true" onDragEnd={(e)=>this.dragEnd(e,da.key)} onDragStart={this.dragStart} onDragEnter={(e)=>this.dragEnter(e,da.key)}>
              {da.title}
             </span>)
            }
          }
        />
      );
    }
  };

AcDndTransfer.propTypes = propTypes;
export default AcDndTransfer;
