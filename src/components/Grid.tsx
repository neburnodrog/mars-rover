import * as React from 'react';
import styled from 'styled-components';
import { Rover } from './Rover';

/**
 *  CELL COMPONENT // each cell is a row in the parent column component
 */
const Cell = styled.button<{ explored: boolean }>`
  background-color: transparent;
  border: 1px solid ${(props) => (props.explored ? 'tomato' : 'sandybrown')};
  padding: 0px;
  height: 49px;
  width: 49px;
  box-shadow: 0px 0px ${(props) => (props.explored ? '6px tomato' : '0px sandybrown')};
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
  border: 1px solid tomato;
`;

export type GridProps = {
  grid: boolean[];
  position: number;
  direction: string;
  logBook: number[];
};

export class Grid extends React.Component<GridProps> {
  renderCell(i: number, position: number, direction: string, logBook: number[]) {
    /** If the index in the grid equals the actual position render Rover */
    return (
      <Cell key={i} explored={this.checkIfExplored(i, logBook)}>
        {i === position ? <Rover direction={direction}></Rover> : null}
      </Cell>
    );
  }

  checkIfExplored = (i: number, logBook: number[]) => {
    return i in logBook;
  };

  render() {
    const { grid, position, direction, logBook } = this.props;

    return <GridStyle>{grid.map((v, i) => this.renderCell(i, position, direction, logBook))}</GridStyle>;
  }
}
