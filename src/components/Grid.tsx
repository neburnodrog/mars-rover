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

interface ColumnProps {
  colArray: (string|null)[];
}

class Column extends Component<ColumnProps> {
  renderCell(rowIndex: number) {
    const cellValue = this.props.colArray[rowIndex];
    return <Cell>{ cellValue }</Cell>;
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
const GridStyle = styled.div`
  width: 490px;
  height: 490px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  border: 1px solid sandybrown;
`;

interface GridProps {
}

interface GridState {
  grid: (string|null)[][];
}

export class Grid extends React.Component<GridProps, GridState> {
  state = {
    grid: Array(10).fill(Array(10).fill(null)),
  }

  renderRow(colIndex: number) {
    const column = this.state.grid[colIndex];
    return <Column colArray={column}></Column>;
  }

  render() {
    return (
      <GridStyle>
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
      </GridStyle>
    );
  }
}
