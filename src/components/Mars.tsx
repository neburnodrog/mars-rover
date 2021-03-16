import * as React from 'react';
import styled from 'styled-components';
import marsPic from '../images/mars2.jpg';
import { Grid } from './Grid';
import { Controls } from './Controls';
import { Instructions } from './Instructions';

/**
 *  Possible Directions
 */
const directions = 'NESW';

/**
 *  Mars Component Style
 */
const MarsStyle = styled.div`
  border-radius: 50%;
  background-image: url(${marsPic});
  background-repeat: no-repeat;
  background-size: 800px;
  background-position: -50px;
  width: 700px;
  height: 700px;
  margin: auto;
  display: flex;
`;

/**
 *  Mars Component
 */
export type MarsProps = {};

export type MarsState = {
  direction: string;
  position: number;
  grid: boolean[];
  logBook: number[];
};

export class Mars extends React.Component<MarsProps, MarsState> {
  state: MarsState = {
    direction: 'E',
    position: 30,
    grid: Array(100).fill(false),
    logBook: [],
  };

  handlerMove = (forward: boolean): void => {
    const { direction, position } = this.state;
    const [row, col] = String(position)
      .split('')
      .map((str) => Number(str));

    switch (direction) {
      case 'S':
        if (forward) {
          this.setState({ position: Number(`${row < 9 ? row + 1 : 9}${col}`) });
        } else {
          this.setState({ position: Number(`${row > 0 ? row - 1 : 0}${col}`) });
        }
        break;
      case 'N':
        if (forward) {
          this.setState({ position: Number(`${row > 0 ? row - 1 : 0}${col}`) });
        } else {
          this.setState({ position: Number(`${row < 9 ? row + 1 : 9}${col}`) });
        }
        break;
      case 'E':
        if (forward) {
          this.setState({ position: Number(`${row}${col < 9 ? col + 1 : 9}`) });
        } else {
          this.setState({ position: Number(`${row}${col > 0 ? col - 1 : 0}`) });
        }
        break;
      case 'W':
        if (forward) {
          this.setState({ position: Number(`${row}${col < 9 ? col - 1 : 9}`) });
        } else {
          this.setState({ position: Number(`${row}${col > 0 ? col + 1 : 0}`) });
        }
        break;
    }

    this.logger(position);
  };

  handlerTurn = (left: boolean): void => {
    const { direction } = this.state;
    const currentIndex = directions.indexOf(direction);
    if (left) {
      const newIndex = (currentIndex + 1) % 4;
      const newDir = directions[newIndex];
      this.setState({ direction: newDir });
    } else {
      /** if right */
      const newIndex = (currentIndex - 1) % 4 === -1 ? 3 : (currentIndex - 1) % 4;
      const newDir = directions[newIndex];
      this.setState({ direction: newDir });
    }
  };

  handleInstructions = (): void => {};

  logger = (position: number): void => {
    const logBook = [...this.state.logBook];
    console.log(`positioni is in logBook: ${position in logBook}`);
    if (position in logBook) {
      console.log('it is already in logbook');
    } else {
      logBook.push(position);
    }
    console.log(position, logBook, this);
    this.setState({ logBook: logBook });
  };

  render() {
    const { grid, position, direction, logBook } = this.state;

    return (
      <MarsStyle>
        <Instructions onClick={this.handleInstructions}></Instructions>
        <Controls
          handlers={{
            handlerMove: this.handlerMove,
            handlerTurn: this.handlerTurn,
          }}
        ></Controls>
        <Grid grid={grid} position={position} direction={direction} logBook={logBook}></Grid>
      </MarsStyle>
    );
  }
}
