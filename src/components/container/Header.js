import React, { Component } from "react";
import { Link } from 'react-router';
import styled from 'styled-components';

class HeaderComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <NavBar>
        <Link to='/'>Home</Link>
        <Link to='/category'>Category</Link>
        <Link to='/recept'>Recept</Link>
        <Link to='/article'>Article</Link>
      </NavBar>
    );
  }
}

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: #3c567b;
  display: flex;
  flex-direction: row;
	justify-content: center;
  
`;

export default HeaderComponent;
