/**
 * Created by stonehx on 16-10-30.
 */
import React,{Component} from 'react';
import CopyRight from '../copyRight';
import './index.styl';

class Footer extends Component{
  constructor(props){
    super(props);
    this.state={
      title:'neuq 2016',
      name:'1323'
    }
    this.timer=null;
  }

  handleChange=()=>{
    this.timer=setTimeout(()=>{
      clearTimeout(this.timer)
      this.setState({
        title:'yanshandaxue',
        name:'3213124fsdfsd'
      })
    },3000)
  }
  componentWillMount(){
    console.log("我将要被加载")
  }
  componentDidMount(){
    console.log("我已经加载完成")
  }

  render(){
    console.log("我已经被渲染了")
    const {title,name}=this.state;
    return(
      <div>
        <CopyRight title={title} name={name}/>
        <CopyRight title="copy:; 2016 东北大学版权所有" name="3231232"/>
        <CopyRight title="copy:; 2016 东65c6awd5wd学版权所有" name="3231232"/>
        <button onClick={this.handleChange}>盖欧彼</button>
      </div>
    )
  }
}

export default Footer;
