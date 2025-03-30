import type { Options } from 'highcharts';

export const getWindbarbOptions = (): Options => ({
  chart: {
    type: 'windbarb',
    height: '400px',
  },
  title: {
    text: 'Windbarb Chart',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month',
    },
    gridLineWidth: 0,
    minorGridLineWidth: 0,
  },
  yAxis: {
    title: {
      text: 'Wind Speed (m/s)',
    },
    labels: {
      formatter: function () {
        return this.value.toString();
      },
    },
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    min: null,
    max: null,
    plotBands: [],
    plotLines: [],
  },
  tooltip: {
    valueSuffix: ' m/s',
  },
  plotOptions: {
    windbarb: {
      lineWidth: 2,
    },
  },
  series: [
    {
      type: 'windbarb',
      name: 'Wind Speed',
      data: [
        [0, 5, 90],
        [1, 8, 45],
        [2, 12, 180],
        [3, 15, 270],
        [4, 10, 135],
        [5, 7, 225],
        [6, 9, 315],
      ],
    },
  ],
});
