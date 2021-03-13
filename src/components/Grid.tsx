import * as React from 'react';
import { Component } from 'react';
import styled from "styled-components";


/**
 *  CELL COMPONENT // each cell is a row in the parent column component
 */

const Cell = styled.button`
  background-color: transparent;
  border: 1px solid sandybrown;
  color: palevioletred;
`;

/**
 *  COL COMPONENT
 */
const ColStyle = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`;

class Column extends Component {

  renderCell() {
    return <Cell></Cell>;
  }

  render() {
    return (
      <ColStyle>
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
      </ColStyle>
    );
  }
}


/**
 *  GRID COMPONENT
 */
const Grid = styled.div`
  width: 490px;
  height: 490px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  border: 1px solid sandybrown;
`;

export class GridComponent extends React.Component {
  renderRow() {
    return <Column></Column>;
  }

  render() {
    return (
      <Grid>
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
      </Grid>
    );
  }
}
