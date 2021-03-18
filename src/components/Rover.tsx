import * as React from 'react';
import styled from 'styled-components';
import RoverImage from '../images/rover.png';

const RoverStyle = styled.img`
  width: 100%;
  background-color: #f4e61354;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgb(45, 245, 4);
`;

export type RoverProps = {
  direction: string;
};

export class Rover extends React.Component<RoverProps> {
  render() {
    return (
      <div className={this.props.direction}>
        <RoverStyle src={RoverImage} alt="<oO>" />;
      </div>
    );
  }
}
