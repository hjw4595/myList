import React from "react";
import Loading from "../Loading";
const WeatherPresenter = ({ result, loading, error }) =>
  loading ? (
      <Loading />
  ) : (
      <div>
          {result.weather[0] && result.weather[0].main}
          {result.weather[0] && result.weather[0].description}
          {console.log(result)}
      </div>
  );

export default WeatherPresenter;