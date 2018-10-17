import React, { Component } from "react";
import styled from 'styled-components';

class CreateAndEdit extends Component {
  render() {
    console.log(this.props.params, this.props.location.pathname);
    return (
      <div className='container'>
        <h1>{ this.props.location.pathname.includes("/create") ? 'Create ' + this.props.params.model  : 'Edit ' + this.props.params.model }</h1>
      </div>
    );
  }
}

export default CreateAndEdit;
