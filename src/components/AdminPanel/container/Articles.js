import React, { Component } from "react";
import ViewTable from 'components/AdminPanel/presentation/ViewTable';
import CreateAndEdit from 'components/AdminPanel/presentation/CreateAndEdit';
import notificator from 'utils/notificator';
import Spinner from 'components/Spinner';
import { connect } from 'react-redux';
import { getAllArticles, createArticle, deleteArticle, updateArticle, getArticle } from 'actions/Articles';
import { getAllCategories } from 'actions/Categories';
import { adminPanelToggle } from 'actions/AdminPanel';

class ContainerArticles extends Component {

  componentDidMount() {
    this.props.getAllArticles();
    this.props.getAllCategories();
  }

  renderView = () => {
    let header = ['Title','Text', 'Description', 'Category', 'Action'];
    let body = ['title', 'text', 'description', 'categoryId'];
    return <ViewTable
      header = {header}
      body = {body}
      value = {this.props.articles}
      deleteArticle = {this.deleteArticle}
      editArticle = {this.editArticle}
      createAction = {() => this.props.adminPanelToggle('create')}
    />;
  }

  renderCreate = () => {
    let label = ['Title','Text', 'Description', 'Category'];
    let input = ['title', 'text', 'description', 'categoryId'];
    let dropdown = {
      'Category' : this.props.category.map(item => {
        return item.title
      })
    };
    return <CreateAndEdit
      action={this.props.panel}
      back={() => this.props.adminPanelToggle('view')}
      label={label}
      input={input}
      dropdown={dropdown}
      />
  }

  renderEdit = () => {

  }

  renderContainer = () => {
    switch (this.props.panel) {
      case 'view':
        return this.renderView();
      case 'create':
      case 'edit':
        return this.renderCreate();
      default:
        break;
    }
  }

  render() {
    return(
      <div className='container'>
        <h1>Articles admin</h1>
        {
          this.props.loading ?
          <Spinner/>
          :
          this.renderContainer()
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
  },
  getAllCategories : () => {
    dispatch(getAllCategories());
  },
  adminPanelToggle: (data) => {
    dispatch(adminPanelToggle(data));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerArticles);
