import * as React from 'react';
import styled from 'styled-components';
import marsPic from '../images/mars2.jpg';
import { Grid } from './Grid';
import { Controls } from './Controls';
import { Instructions } from './Instructions';

const directions = 'NESW';

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

export type MarsState = {
  direction: string;
  position: number[];
  grid: boolean[];
  logBook: number[][];
};

export class Mars extends React.Component<{}, MarsState> {
  state: MarsState = {
    direction: 'E',
    position: [3, 0],
    grid: Array(100).fill(false),
    logBook: [],
  };

  handlerFwd = (): void => {
    const { direction, position } = this.state;

    this.logger(position);

    const [row, col] = position;
    switch (direction) {
      case 'S':
        this.setState({
          position: [row < 9 ? row + 1 : 9, col],
        });
        break;
      case 'N':
        this.setState({
          position: [0 < row ? row - 1 : 0, col],
        });
        break;
      case 'E':
        this.setState({
          position: [row, col < 9 ? col + 1 : 9],
        });
        break;
      case 'W':
        this.setState({
          position: [row, 0 < col ? col - 1 : 0],
        });
        break;
    }
  };

  handlerBck = (): void => {
    const { direction, position } = this.state;

    this.logger(position);

    const [row, col] = position;

    switch (direction) {
      case 'S':
        this.setState({
          position: [0 < row ? row - 1 : 0, col],
        });
        break;
      case 'N':
        this.setState({
          position: [row < 9 ? row + 1 : 9, col],
        });
        break;
      case 'E':
        this.setState({
          position: [row, 0 < col ? col - 1 : 0],
        });
        break;
      case 'W':
        this.setState({
          position: [row, col < 9 ? col + 1 : 9],
        });
        break;
    }
  };

  handlerLeft = (): void => {
    const { direction } = this.state;
    const currentIndex = directions.indexOf(direction);
    const newIndex = (currentIndex + 1) % 4;
    const newDir = directions[newIndex];
    this.setState({ direction: newDir });
  };

  handlerRight = (): void => {
    const { direction } = this.state;
    const currentIndex = directions.indexOf(direction);
    const newIndex = (currentIndex - 1) % 4 === -1 ? 3 : (currentIndex - 1) % 4;
    const newDir = directions[newIndex];
    this.setState({ direction: newDir });
  };

  handleInstructions = (instructions: string): void => {
    alert('The instructions: "' + instructions + '" are beeing sent to the rover!');
  };

  logger = (position: number[]): void => {
    const logBook = [...this.state.logBook];
    const arrayAlreadyInLog = this.arrayAlreadyInLogBook(position, logBook);
    if (arrayAlreadyInLog) {
      console.log(`${position} is already in ${JSON.stringify(logBook)}`);
    } else {
      logBook.push(position);
      console.log(`Pushed ${position} into ${JSON.stringify(logBook)}`);
      this.setState({ logBook: logBook });
    }
  };

  arrayAlreadyInLogBook = (arr: number[], arrOfArrays: number[][]): boolean => {
    const arrString = JSON.stringify(arr);
    const arrOfArraysString = JSON.stringify(arrOfArrays);
    return `${arrOfArraysString}`.indexOf(`${arrString}`) > -1;
  };

  render() {
    const { grid, position, direction, logBook } = this.state;

    return (
      <MarsStyle>
        <Instructions handleInstructions={this.handleInstructions}></Instructions>
        <Controls
          handlers={{
            handlerFwd: this.handlerFwd,
            handlerBck: this.handlerBck,
            handlerLeft: this.handlerLeft,
            handlerRight: this.handlerRight,
          }}
        ></Controls>
        <Grid grid={grid} position={position} direction={direction} logBook={logBook}></Grid>
      </MarsStyle>
    );
  }
}
