import React, { Component } from "react";
import styled from 'styled-components';
import edit from './../../../icons/edit.svg';
import cancel from './../../../icons/cancel.svg';
import garbage from './../../../icons/garbage.svg';

class Articles extends Component {


  render() {
    let list = this.props.articles.map(article => (
      <tr key={article._id}>
        <td>{article.title}</td>
        <td>{article.text}</td>
        <td>{article.description}</td>
        <td>{article.categoryId}</td>
        <td>
          <ActionImage src={edit} alt="edit" onClick={()=>this.props.editArticle(article)}/>
          <ActionImage src={garbage} alt="delete" onClick={()=>this.props.deleteArticle(article._id)}/>
        </td>
      </tr>
    ));
    return(
      <div>
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Text</td>
              <td>Description</td>
              <td>Category</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Articles;

const ActionImage = styled.img`
  witdh: 20px;
  height: 20px;
  cursor: pointer;
`;
