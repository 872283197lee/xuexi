require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MyHeader from './header';
import Switch from './Switch';
import Footer from './footer';


class AppComponent extends React.Component {
  render() {
    return (
     <div className="app-wrapper">
       <MyHeader/>
       <Switch/>
       <Footer/>
     </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
