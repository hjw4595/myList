import React from "react";
import Loading from "../Loading";
import styled from "styled-components";
import Clock from "../Clock";
const WeatherText = styled.span`
`;
const WeatherPresenter = ({ result, loading, error }) =>
  loading ? (
      <Loading />
  ) : (
      <>
      <Clock />
      <WeatherText>
          {result.weather[0].main}
          {result.weather[0].description}
      </WeatherText>
      </>
  );

export default WeatherPresenter;