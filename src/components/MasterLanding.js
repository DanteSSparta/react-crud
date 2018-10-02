import React, { Component } from "react";
import FooterComponent from './container/Footer';
import HeaderComponent from './container/Header';

class MasterLanding extends Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <HeaderComponent/>
        {this.props.children}
      </div>
    );
  }
}

export default MasterLanding;
