import React from 'react';
import { render } from '@testing-library/react';
import WeatherPresenter from "./WeatherPresenter";
import fetchMock from "fetch-mock";

const temps =
  {
    temp : 10,
    max: 20,
    min: 0
  }

describe('<Weather />', () => {
  fetchMock.mock('http://example.com', 200);
  it("weather api", async () => {
    const weather = await fetch('http://example.com');
    const { getByText } = render(<WeatherPresenter temp={temps} />)
  
    let weatherTemp = await findByRole('list')
    expect(weatherTemp.children.length).toEqual(temps.length)
  });
});