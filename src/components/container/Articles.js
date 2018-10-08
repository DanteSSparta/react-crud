import React, { Component } from "react";
import styled from 'styled-components';

class Articles extends Component {

  state = {
		articles: []
	}

  componentDidMount() {
    fetch('https://test-task-server.herokuapp.com/api/v1/article/all')
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then(articles => {
        this.setState({articles});
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let list = this.state.articles.map(article => (
      <div key={article._id}>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </div>
    ));
    return(
      <div className='container'>
        <H1Styled>Articles</H1Styled>
        <div>
          {list}
        </div>
      </div>
    );
  }
}

export default Articles;

const H1Styled = styled.h1`
  margin: 20px auto;
  text-align: center;
`;
