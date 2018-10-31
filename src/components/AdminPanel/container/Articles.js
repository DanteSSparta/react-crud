import React, { Component } from "react";
import ViewTable from '../presentation/ViewTable';
import notificator from './../../../utils/notificator';
import Spinner from './../../Spinner';
// import {  } from ''

class ContainerArticles extends Component {
  /*eslint-disable no-unused-vars*/
  state = {
    articles: [],
    category: []
  }


  editArticle = (article) => {
    this.setState({editing: Object.assign({}, this.state.editing, article)})
  }

  deleteArticle = (id) => {
    fetch('https://test-task-server.herokuapp.com/api/v1/article/' + id, { method: "DELETE" })
      .then(res => {
        if (res.status >= 400) {
          notificator({error: [res.statusText]});
        }
        else {
          notificator({success: ['Article delete']});
        }
      })
      .then(
        fetch('https://test-task-server.herokuapp.com/api/v1/article/all')
          .then(res => {
            return res.json();
          })
          .then(articles => {
            this.setState({articles});
          })
      );
  }

  saveArticle = (data, article) => {
    fetch('https://test-task-server.herokuapp.com/api/v1/article/update', { method: "PUT", body: article })
      .then(res => {
        if (res.status >= 400) {
          notificator({error: [res.statusText]});
        }
        else {
          notificator({success: ['Update']});
        }
        return res.json();
      })
      .then(
        fetch('https://test-task-server.herokuapp.com/api/v1/article/all')
          .then(res => {
            return res.json();
          })
          .then(articles => {
            this.setState({articles});
            notificator({success: ['Success']});
          })
      );
  }

  createArticle = (data) => {
    fetch('https://test-task-server.herokuapp.com/api/v1/article/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json'}
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        let state = this.state.articles;
        this.setState({articles: [...this.state.articles, response] });
        notificator({success: ['Create article']});
      });
  }

  componentDidMount() {
    fetch('https://test-task-server.herokuapp.com/api/v1/article/all')
      .then(res => {
        return res.json();
      })
      .then(articles => {
        this.setState({articles});
      });

    fetch('https://test-task-server.herokuapp.com/api/v1/category/all')
      .then(res => {
        return res.json();
      })
      .then(category => {
        this.setState({category});
      });
  }

  render() {
    let header = ['Title','Text', 'Description', 'Category', 'Action'];
    let body = ['title', 'text', 'description', 'categoryId'];
    return(
      <div className='container'>
        <h1>Articles admin</h1>
        <a href="/admin/articles/create">Create a article</a>
        {
          this.state.articles.length === 0 ?
          <Spinner/>
          :
          <ViewTable
            header = {header}
            body = {body}
            value = {this.state.articles}
            category = {this.state.category}
            deleteArticle = {this.deleteArticle}
            editArticle = {this.editArticle}
          />
        }
      </div>
    );
  }
}

export default ContainerArticles;
