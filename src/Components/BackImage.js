import React from 'react';
import styled from "styled-components";

const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 95%;
  height: 100%;
  background-image:url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  // filter: blur(3px);
  opacity: 0.3;
  z-index: 0;
`;

const BackImage = props => {
  return (
    <>
      {props.currentWeather && (
        <Image
          bgImage={require(`../assets/${props.currentWeather}.jpg`)}
        />)}
    </>
  )
}
export default BackImage;