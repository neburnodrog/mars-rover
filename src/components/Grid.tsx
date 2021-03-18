import * as React from 'react';
import styled from 'styled-components';
import { Rover } from './Rover';
import { Shit } from './Shit';
import { Plant } from './Plant';

const Cell = styled.button<{ explored: boolean }>`
  background-color: transparent;
  border: 1px solid ${(props) => (props.explored ? '#00800085' : '#f4a4606e')};
  padding: 0px;
  height: 49px;
  width: 49px;
  box-shadow: 0px 0px ${(props) => (props.explored ? '6px #00800085' : '0px #f4a4606e')};
`;

const GridStyle = styled.div`
  width: 490px;
  height: 490px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #f4a4606e;
`;

export type GridProps = {
  grid: boolean[];
  position: number[];
  direction: string;
  logBook: number[][];
};

export class Grid extends React.Component<GridProps> {
  renderCellOrShit(i: number) {
    /** If the index in the grid equals the actual position render Rover */

    const { position, direction } = this.props;
    const CoordinatesAsIndex = Number(position.join(''));
    const explored = this.checkIfExplored(i);

    if (i === CoordinatesAsIndex) {
      return (
        <Cell key={i} explored={false}>
          <Rover direction={direction}></Rover>
        </Cell>
      );
    }

    if (!explored) {
      return (
        <Cell key={i} explored={explored}>
          <Shit></Shit>
        </Cell>
      );
    }

    return (
      <Cell key={i} explored={explored}>
        <Plant></Plant>
      </Cell>
    );
  }

  checkIfExplored = (i: number): boolean => {
    const StringIndex = String(i);
    const ArrayOfStrings = StringIndex.length === 1 ? ['0', StringIndex] : StringIndex.split('');
    const cellCoordinates = ArrayOfStrings.join(',');
    return this.props.logBook.map(String).includes(cellCoordinates);
  };

  render() {
    const { grid } = this.props;

    return <GridStyle>{grid.map((v, i) => this.renderCellOrShit(i))}</GridStyle>;
  }
}
