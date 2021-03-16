import * as React from "react";
import styled from "styled-components";
import marsPic from "../images/mars2.jpg";
import { Grid } from "./Grid";
import { Controls } from "./Controls";
import { Instructions } from "./Instructions";

/**
 *  Possible Directions
 */
const directions = "NESW";

/**
 *  Starting Array
 */
const gridArray: boolean[] = [];
for (let i = 0; i < 100; i++) {
  gridArray.push(false);
}
const startDir = "E";
const startPos = "30";
gridArray[Number(startPos)] = true;

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
export interface MarsProps {}

export interface MarsState {
  direction: string;
  position: string;
  grid: boolean[];
}

export class Mars extends React.Component<MarsProps, MarsState> {
  constructor(props: MarsProps) {
    super(props);
    this.state = {
      direction: startDir,
      position: startPos,
      grid: gridArray,
    };
  }

  handleClickFwd() {
    const { position, direction, grid } = this.state;
    const [row, col] = position.split("").map((str) => Number(str));

    switch (direction) {
      case "E":
        this.setState({ position: `${row < 9 ? row + 1 : row}${col}` });
        break;
      case "W":
        this.setState({ position: `${row > 0 ? row - 1 : row}${col}` });
        break;
      case "S":
        this.setState({ position: `${row}${col < 9 ? col + 1 : col}` });
        break;
      case "N":
        this.setState({ position: `${row}${col > 0 ? col + 1 : col}` });
        break;
    }

    this.setState({
      grid: grid.map((v, i) =>
        String(i) === this.state.position ? true : false
      ),
    });
  }

  handleClickBack() {
    const { position, direction, grid } = this.state;
    const [row, col] = position.split("").map((str) => Number(str));
    switch (direction) {
      case "W":
        this.setState({ position: `${row < 9 ? row + 1 : row}${col}` });
        break;
      case "E":
        this.setState({ position: `${row > 0 ? row - 1 : row}${col}` });
        break;
      case "N":
        this.setState({ position: `${row}${col < 9 ? col + 1 : col}` });
        break;
      case "S":
        this.setState({ position: `${row}${col > 0 ? col + 1 : col}` });
        break;
    }

    this.setState({
      grid: grid.map((v, i) =>
        String(i) === this.state.position ? true : false
      ),
    });
  }

  handleClickRight() {
    const { direction } = this.state;
    const currentIndex = directions.indexOf(direction);
    const newIndex = (currentIndex + 1) % 4;
    const newDir = directions[newIndex];
    this.setState({ direction: newDir });
  }

  handleClickLeft() {
    const { direction } = this.state;
    const currentIndex = directions.indexOf(direction);
    const newIndex = (currentIndex - 1) % 4 === -1 ? 3 : (currentIndex - 1) % 4;
    const newDir = directions[newIndex];
    this.setState({ direction: newDir });
  }

  handleInstructions() {}

  render() {
    return (
      <MarsStyle>
        <Instructions onClick={this.handleInstructions}></Instructions>
        <Controls
          handlers={{
            handlerBack: this.handleClickBack,
            handlerLeft: this.handleClickLeft,
            handlerRight: this.handleClickRight,
            handlerFwd: this.handleClickFwd,
          }}
        ></Controls>
        <Grid grid={this.state.grid}></Grid>
      </MarsStyle>
    );
  }
}

export default Mars;
