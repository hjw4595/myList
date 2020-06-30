import React from 'react';
import styled from "styled-components";

const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin-top : 50px;
  background-image:url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  opacity: 0.3;
  z-index: 0;
`;

const BackImage = props => {
  return (
    <>
      {props.currentWeather && (
        <Image
          bgImage={require(`../../assets/${props.currentWeather}.jpg`)}
        />)}
    </>
  )
}
export default BackImage;