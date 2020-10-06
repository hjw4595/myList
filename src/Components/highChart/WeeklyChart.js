import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: ' Weekly achievement'
  },
  chart: {
    type: 'spline'
  },
  xAxis: {
    categories: ['일', '월', '화', '수', '목', '금', '토']
  },
  yAxis: {
    title: {
      text: 'todo amount'
    },
  },
  series: [{
    name: "total",
    data: [1, 2, 1, 4, 3, 6, 7]
  },
  {
    name: "checked",
    data: [1,1,1,1,1,1,1]
  }]
}

const WeeklyChart = () => <HighchartsReact
  highcharts={Highcharts}
  options={options}
/>

export default WeeklyChart