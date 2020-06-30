import React from "react";
import Loading from "../Loading/Loading";
import styled from "styled-components";
import BackImage from "../BackImage/BackImage";
import weatherCases from "./WeatherCase";

const Container = styled.div`
  margin-left: 25%;
`;
const WeatherText = styled.a`
color : ${props => props.color.color};
`;

const WeatherTemp = styled.div`
  display : flex;
  flex-direction: column;
  align-items: flex-end;
`;
const MainTemp = styled.span`
  font-size : 25px;
`;
const MaxTemp = styled.a`
  color : red;
`;
const MinTemp = styled.a`
  color : blue;
`;
const DetailTemp = styled.div`
`;

const WeatherPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loading />
  ) : (
      <Container>
        <BackImage currentWeather={result.weather[0].main} /> 
        <WeatherTemp>
          <MainTemp>{result.main.temp}°C</MainTemp>

          <DetailTemp>
            <MaxTemp>{result.main.temp_max}°</MaxTemp>
            <MinTemp>{result.main.temp_min}°</MinTemp>
          </DetailTemp>

          <WeatherText color={weatherCases[result.weather[0].main]}>
          {weatherCases[result.weather[0].main].title} - {weatherCases[result.weather[0].main].subtitle}
        </WeatherText>
        </WeatherTemp>
      </Container>
    );


export default WeatherPresenter;