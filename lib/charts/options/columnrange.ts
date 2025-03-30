import type { Options } from 'highcharts';

export const getColumnRangeOptions = (): Options => ({
  chart: {
    type: 'columnrange',
    height: '400px',
  },
  title: {
    text: 'Column Range Chart',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    title: {
      text: null,
    },
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)',
    },
  },
  plotOptions: {
    columnrange: {
      dataLabels: {
        enabled: true,
        format: '{point.low}°C - {point.high}°C',
      },
      tooltip: {
        valueSuffix: '°C',
      },
    },
  },
  series: [
    {
      type: 'columnrange',
      name: 'Temperature',
      data: [
        [-9.7, 9.4],
        [-8.7, 6.5],
        [-3.5, 9.4],
        [-1.4, 19.9],
        [0.0, 22.6],
        [5.1, 24.8],
      ],
    },
  ],
});
