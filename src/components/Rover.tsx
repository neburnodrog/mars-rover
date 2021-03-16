import * as React from 'react';
import styled from 'styled-components';
import roverPath from '../images/rover.png';

const RoverStyle = styled.img`
  width: 100%;
  background-color: sandybrown;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgb(245, 4, 4);
`;

export type RoverProps = {
  direction: string;
};

export class Rover extends React.Component<RoverProps> {
  render() {
    return (
      <div className={this.props.direction}>
        <RoverStyle src={roverPath} alt="<oO>" />;
      </div>
    );
  }
}
