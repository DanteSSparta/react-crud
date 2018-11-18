import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './App.css';
import MasterLanding from './components/MasterLanding';
import AdminArticles from "./components/AdminPanel/container/Articles";
import AdminCategories from "./components/AdminPanel/container/Categories";
import AdminRecipes from "./components/AdminPanel/container/Recipes";
import AdminPanel from "./components/AdminPanel/container/AdminPanel";
import HomePage from "./components/container/HomePage";
import Articles from "./components/container/Articles";
import Categories from "./components/container/Categories";
import Recipes from "./components/container/Recipes";

class AppRoute extends Component {
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
    		</Route>
      </Router>
    );
  }
}

export default AppRoute;
