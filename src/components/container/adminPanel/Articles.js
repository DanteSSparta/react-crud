import React, { Component } from "react";
import Articles from './../../presentational/adminPanel/Articles';
import notificator from './../../../utils/notificator';
import Spinner from './../../Spinner';

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
    fetch('https://test-task-server.herokuapp.com/api/v1/article/131412312s', { method: "DELETE" })
      .then(res => {
        if (res.status >= 400) {
          notificator({error: [res.statusText]});
        }
        else {
          notificator({success: ['Success']});
        }
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
        {
          this.state.articles.length === 0 ?
          <Spinner/>
          :
          <Articles
            header = {header}
            body = {body}
            articles = {this.state.articles}
            category = {this.state.category}
            createArticle = {this.createArticle}
            deleteArticle = {this.deleteArticle}
            editArticle = {this.editArticle}
            saveArticle = {this.saveArticle}
          />
        }
      </div>
    );
  }
}

export default ContainerArticles;
