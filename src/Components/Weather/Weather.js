import React from "react";
import { DayWeather } from "../../api/Weather";
import WeatherPresenter from "./WeatherPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
    name: null,
  };

  async componentDidMount() {
    let result = null;
    try {
      ({ data: result } = await DayWeather.SeoulWeather());
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
