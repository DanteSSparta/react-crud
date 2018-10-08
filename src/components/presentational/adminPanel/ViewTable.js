import React, { Component } from "react";
import styled from 'styled-components';
import edit from './../../../icons/edit.svg';
import cancel from './../../../icons/cancel.svg';
import garbage from './../../../icons/garbage.svg';

class ViewTable extends Component {


  render() {
    let tableBody = this.props.value.map(tag => (
      <tr key={tag._id}>
        {
          this.props.body.map((elem , i) => (
            <td key={tag._id + i}>{tag[elem]}</td>
          ))
        }
        <td>
          <ActionImage src={edit} alt="edit" onClick={()=>this.props.editArticle(tag)}/>
          <ActionImage src={garbage} alt="delete" onClick={()=>this.props.deleteArticle(tag._id)}/>
        </td>
      </tr>
    ));
    let tableHead =
      <tr>
        {
          this.props.header.map((elem, i) => (
            <td key={i}>{elem}</td>
          ))
        }
      </tr>;
    return(
      <div>
        <table>
          <thead>
            {tableHead}
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewTable;

const ActionImage = styled.img`
  witdh: 20px;
  height: 20px;
  cursor: pointer;
`;
