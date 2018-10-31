import React, { Component } from "react";
import HeaderComponent from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MasterLanding extends Component {
  render() {
    let admin = this.props.location.pathname.includes('admin') ? 'admin' : '';
    return(
      <div>
        <ToastContainer/>
        <HeaderComponent admin={admin}/>
        {this.props.children}
      </div>
    );
  }
}

export default MasterLanding;
