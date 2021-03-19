import * as React from 'react';
import styled from 'styled-components';
import marsPic from '../images/mars2.jpg';
import { Grid } from './Grid';
import { Controls } from './Controls';
import { Instructions } from './Instructions';

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
  directions: string[];
  position: number[];
  grid: boolean[];
  logBook: number[][];
  instructions: string[];
};

export class Mars extends React.Component<{}, MarsState> {
  state: MarsState = {
    directions: ['N', 'E', 'S', 'W'],
    position: [3, 0],
    grid: Array(100).fill(false),
    logBook: [],
    instructions: [],
  };

  handleForward = (): void => {
    const { directions, position } = this.state;

    const dir = directions[0];
    this.logger(position);

    const [row, col] = position;
    switch (dir) {
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

  handleBack = (): void => {
    const { directions, position } = this.state;

    const dir = directions[0];
    this.logger(position);

    const [row, col] = position;

    switch (dir) {
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

  handleRight = (): void => {
    const directions = [...this.state.directions];
    directions.push(directions.shift()!);
    this.setState({ directions: directions });
  };

  handleLeft = (): void => {
    const directions = [...this.state.directions];
    directions.unshift(directions.pop()!);
    this.setState({ directions: directions });
  };

  handleInstructions = (instructions: string): void => {
    alert('The instructions: "' + instructions + '" are beeing sent to the rover!');
    const cleanInstructions = instructions.replace(' ', '').split('');

    this.setState({ instructions: cleanInstructions });
  };

  executeInstruction = (instruction: string) => {
    switch (instruction) {
      case 'l':
        this.handleLeft();
        break;
      case 'r':
        this.handleRight();
        break;
      case 'f':
        this.handleForward();
        break;
      case 'b':
        this.handleBack();
        break;
    }
  };

  componentDidUpdate() {
    const instructions = [...this.state.instructions];

    if (instructions.length > 0) {
      const nextInstruction: string = instructions.shift()!;
      this.executeInstruction(nextInstruction);
      this.setState({ instructions: instructions });
    }
  }

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
    const { grid, position, directions: direction, logBook } = this.state;

    return (
      <MarsStyle>
        <Instructions handleInstructions={this.handleInstructions}></Instructions>
        <Controls
          handlers={{
            handleForward: this.handleForward,
            handleBack: this.handleBack,
            handleLeft: this.handleLeft,
            handleRight: this.handleRight,
          }}
        ></Controls>
        <Grid grid={grid} position={position} direction={direction[0]} logBook={logBook}></Grid>
      </MarsStyle>
    );
  }
}
