import React, { Component } from "react";
import ViewTable from 'components/AdminPanel/presentation/ViewTable';
import notificator from 'utils/notificator';
import Spinner from 'components/Spinner';
import { connect } from 'react-redux';
import { getAllArticles, createArticle, deleteArticle, updateArticle, getArticle } from 'actions/Articles';
import { getAllCategories } from 'actions/Categories';
import { adminPanelToggle } from 'actions/AdminPanel';

class ContainerArticles extends Component {

  componentDidMount() {
    this.props.getAllArticles();
  }

  render() {
    let header = ['Title','Text', 'Description', 'Category', 'Action'];
    let body = ['title', 'text', 'description', 'categoryId'];
    console.log(this.props);
    return(
      <div className='container'>
        <h1>Articles admin</h1>
        <a href="/admin/articles/create">Create a article</a>
        {
          this.props.loading ?
          <Spinner/>
          :
          <ViewTable
            header = {header}
            body = {body}
            value = {this.props.articles}
            deleteArticle = {this.deleteArticle}
            editArticle = {this.editArticle}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles : state.articles.articles,
  loading : state.articles.loading,
  article : state.articles.article,
  error : state.articles.error,
  category : state.categories.categories,
  panel : state.adminPanel.state
})

const mapDispatchToProps = (dispatch) => ({
  getAllArticles : () => {
    dispatch(getAllArticles());
  },
  createArticle : (data) => {
    dispatch(createArticle(data));
  },
  deleteArticle : (data) => {
    dispatch(deleteArticle(data));
  },
  updateArticle : (data) => {
    dispatch(updateArticle(data));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerArticles);
