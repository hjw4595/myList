import React from "react";
import Loading from "../Loading";
import styled from "styled-components";
import BackImage from "../BackImage";

const WeatherText = styled.span`
`;
const WeatherPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loading />
  ) : (
      <>
        <BackImage currentWeather={result.weather[0].id} /> 
        <WeatherText>
          {result.weather[0].main}
          {result.weather[0].description}
        </WeatherText>
      </>
    );


export default WeatherPresenter;