import type { Options } from 'highcharts';

export const getParetoOptions = (): Options => ({
  chart: {
    type: 'column',
    height: '400px',
  },
  title: {
    text: 'Pareto Chart',
  },
  xAxis: {
    categories: ['A', 'B', 'C', 'D', 'E'],
    title: {
      text: 'Categories',
    },
  },
  yAxis: [
    {
      title: {
        text: 'Frequency',
      },
    },
    {
      title: {
        text: 'Cumulative Percentage',
      },
      min: 0,
      max: 100,
      labels: {
        format: '{value}%',
      },
      opposite: true,
    },
  ],
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      type: 'column',
      name: 'Frequency',
      data: [5, 10, 15, 20, 25],
    },
    {
      type: 'line',
      name: 'Cumulative',
      yAxis: 1,
      data: [5, 15, 30, 50, 75],
      marker: {
        enabled: true,
      },
    },
  ],
});
