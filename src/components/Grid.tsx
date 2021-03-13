import * as React from 'react';
import { Component } from 'react';
import styled from "styled-components";


/**
 *  CELL COMPONENT
 */

const CellStyle = styled.button`
  background-color: transparent;
  border: 1px solid sandybrown;
  color: palevioletred;
`;

interface CellProps {
  coordinates: number[];
}

const Cell = (props: CellProps) => {
  return(
    <CellStyle>{props.coordinates}</CellStyle>
  );
}


/**
 *  ROW COMPONENT
 */

const ColStyle = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`;

interface ColProps {
  colNumber: number;
}

class Column extends Component<ColProps> {

  renderCell(i: number) {
    const coordinates = [this.props.colNumber, i]
    return <Cell coordinates={coordinates}></Cell>;
  }

  render() {
    return (
      <ColStyle>
        {this.renderCell(0)}
        {this.renderCell(1)}
        {this.renderCell(2)}
        {this.renderCell(3)}
        {this.renderCell(4)}
        {this.renderCell(5)}
        {this.renderCell(6)}
        {this.renderCell(7)}
        {this.renderCell(8)}
        {this.renderCell(9)}
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
  renderRow(i: number) {
    return <Column colNumber={i}></Column>;
  }

  render() {
    return (
      <Grid>
        {this.renderRow(0)}
        {this.renderRow(1)}
        {this.renderRow(2)}
        {this.renderRow(3)}
        {this.renderRow(4)}
        {this.renderRow(5)}
        {this.renderRow(6)}
        {this.renderRow(7)}
        {this.renderRow(8)}
        {this.renderRow(9)}
      </Grid>
    );
  }
}
