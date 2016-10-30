/**
 * Created by stonehx on 16-10-30.
 */
import React from 'react';

// const CopyRight = (props)=> {
//   return (
//     <div>
//       {props.title}
//     </div>
//   )
// };


class CopyRight extends React.Component{
  render(){
    const {title,name}=this.props;
    return(
      <div>
        {title}
        {name}
      </div>
    )
  }
}

export default CopyRight;
