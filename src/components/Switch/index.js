/**
 * Created by stonehx on 16-10-30.
 */
import React, {Component} from 'react';
import './index.styl';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchStatus: 'Off'
    };

    this.handleSwitch2=this.handleSwitch2.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }

  handleSwitch2(status){
    this.setState({
      switchStatus:status
    })
  }

  handleClick(){
    alert(1)
  }

  render() {
    return (
      <div className="switch">
        <div className="left" onClick={()=>{this.handleSwitch2('Off')}}>Off</div>
        <div className="right" onClick={()=>{this.handleSwitch2("On")}}>On</div>
        <div className="status">{this.state.switchStatus}</div>
        <button onClick={()=>{this.handleClick()}}>点击</button>
      </div>
    )
  }
}

export default Switch;
