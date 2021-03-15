import { FilledInput } from "@material-ui/core";
import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import Rover from "./Rover";

const gridArray: boolean[][] = [];
for (let i = 0; i < 10; i++) {
  gridArray.push([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
}

const [col, row] = [0, 3];
gridArray[col][row] = true;

/**
 *  CELL COMPONENT // each cell is a row in the parent column component
 */

const Cell = styled.button`
  background-color: transparent;
  border: 1px solid sandybrown;
  padding: 0px;
`;

/**
 *  COL COMPONENT
 */
const ColStyle = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`;

interface ColumnProps {
  colArray: boolean[];
}

class Column extends Component<ColumnProps> {
  renderCell(rowIndex: number) {
    const cellValue = this.props.colArray[rowIndex];
    return <Cell>{cellValue ? <Rover></Rover> : null}</Cell>;
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

interface GridProps {}

interface GridState {
  grid: boolean[][];
}

export class Grid extends React.Component<GridProps, GridState> {
  state = {
    grid: gridArray,
  };

  renderCol(colIndex: number) {
    const column = this.state.grid[colIndex];
    return <Column colArray={column}></Column>;
  }

  render() {
    return (
      <GridStyle>
        {this.renderCol(0)}
        {this.renderCol(1)}
        {this.renderCol(2)}
        {this.renderCol(3)}
        {this.renderCol(4)}
        {this.renderCol(5)}
        {this.renderCol(6)}
        {this.renderCol(7)}
        {this.renderCol(8)}
        {this.renderCol(9)}
      </GridStyle>
    );
  }
}
