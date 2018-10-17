import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './App.css';
import MasterLanding from './components/MasterLanding';
import AdminArticles from "./components/container/adminPanel/Articles";
import AdminCategories from "./components/container/adminPanel/Categories";
import AdminRecipes from "./components/container/adminPanel/Recipes";
import AdminPanel from "./components/container/adminPanel/AdminPanel";
import CreateAndEdit from "./components/presentational/adminPanel/CreateAndEdit";
import HomePage from "./components/container/HomePage";
import Articles from "./components/container/Articles";
import Categories from "./components/container/Categories";
import Recipes from "./components/container/Recipes";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MasterLanding}>
          <IndexRoute component={HomePage}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/articles" component={Articles}/>
          <Route path="/recipes" component={Recipes}/>

          <Route path="/admin" component={AdminPanel}/>
          <Route path="/admin/categories" component={AdminCategories}/>
          <Route path="/admin/articles" component={AdminArticles}/>
          <Route path="/admin/recipes" component={AdminRecipes}/>
          <Route path="/admin/:model/create" component={CreateAndEdit}/>
          <Route path="/admin/:model/edit/:id" component={CreateAndEdit}/>
    		</Route>
      </Router>
    );
  }
}

export default App;
