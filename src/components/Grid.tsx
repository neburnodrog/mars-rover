import * as React from 'react';
import styled from 'styled-components';
import Rover from './Rover';

/**
 *  CELL COMPONENT // each cell is a row in the parent column component
 */
const Cell = styled.button`
  background-color: transparent;
  border: 1px solid sandybrown;
  padding: 0px;
  height: 49px;
  width: 49px;
`;

/**
 *  GRID COMPONENT
 */
const GridStyle = styled.div`
  width: 490px;
  height: 490px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid sandybrown;
`;

export interface GridProps {
  grid: boolean[];
}

export class Grid extends React.Component<GridProps> {
  renderCell(cell: boolean, i: number) {
    return <Cell key={i}>{cell ? <Rover></Rover> : null}</Cell>;
  }

  render() {
    return <GridStyle>{this.props.grid.map((cell, i) => this.renderCell(cell, i))}</GridStyle>;
  }
}
