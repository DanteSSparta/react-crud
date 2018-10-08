import React, { Component } from "react";
import styled from 'styled-components';

class Categories extends Component {

  state = {
		categories: []
	}

  componentDidMount() {
    fetch('https://test-task-server.herokuapp.com/api/v1/category/all')
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then(categories => {
        this.setState({categories});
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let list = this.state.categories.map(category => (
      <div key={category._id}>
        <h3>{category.title}</h3>
      </div>
    ));
    return(
      <div className='container'>
        <H1Styled>Categories</H1Styled>
        <div>
          {list}
        </div>
      </div>
    );
  }
}

export default Categories;

const H1Styled = styled.h1`
  margin: 20px auto;
  text-align: center;
`;
