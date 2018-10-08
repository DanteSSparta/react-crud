import React, { Component } from "react";
import { Link } from 'react-router';
import styled from 'styled-components';

class HeaderComponent extends Component {

  render() {
    let admin = this.props.admin ? '/' + this.props.admin : '';
    return(
      <NavBar>
        <div className='container'>
          <NavLink to={admin + '/'}>{ admin ? 'Admin panel' : 'Home'}</NavLink>
          <NavLink to={admin + '/categories'}>Category</NavLink>
          <NavLink to={admin + '/recipes'}>Recept</NavLink>
          <NavLink to={admin + '/articles'}>Article</NavLink>
        </div>
      </NavBar>
    );
  }
}

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: #3c567b;
  .container {
    display: flex;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  height: 60px;
  width: auto;
  display: flex;
  align-items: center;
  font-family: 'Roboto-Regular', sans-serif;
  color: white;
  text-decoration: none;
  padding-right: 15px;
  padding-left: 15px;
`;

export default HeaderComponent;
