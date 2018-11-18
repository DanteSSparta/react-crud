import React, { Component } from "react";
import styled from 'styled-components';

class CreateAndEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props
    };
  }

  renderInput = () => {
    return this.state.label.map(item => {
      console.log(this.props.dropdown[item]);
      return <div key={item}>
        {this.props.dropdown.item}
      </div>;
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>{ this.state.action === 'create' ? 'Create' : 'Edit ' }</h1>
        <button onClick={this.state.back}>Back</button>
        {this.renderInput()}
      </div>
    );
  }
}

export default CreateAndEdit;
