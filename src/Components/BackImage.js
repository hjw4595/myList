import React from 'react';
import styled from "styled-components";

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const BackImage = props => {
    return (
        <Image {...props}/>
    )
}
export default BackImage;