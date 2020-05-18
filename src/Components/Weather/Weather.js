import React from "react";
import { currentWeatherApi } from "./api";
import WeatherPresenter from "./WeatherPresenter";

export default class extends React.Component {
    state = {
        result: null,
        error:null,
        loading: true,
        weather: null
    };

async componentDidMount() {
    let result = null;
    try {
        ({data : result } = await currentWeatherApi.currentWeather());
      } catch {
        this.setState({ error: "Can't find anything." });
      } finally {
        this.setState({ loading: false, result });
      }
    }

render() {
    const { result, error, loading } = this.state;
    return <WeatherPresenter result={result} error={error} loading={loading} />
}
}
