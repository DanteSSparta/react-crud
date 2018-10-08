import React, { Component } from "react";
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

class Spinner extends Component {

   render() {
    return(
      <StyledDiv>
        <Loader type="Circles" color="#3c567b" height={100} width={100} />
      </StyledDiv>
    );
   }
}

export default Spinner;

const StyledDiv = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;
