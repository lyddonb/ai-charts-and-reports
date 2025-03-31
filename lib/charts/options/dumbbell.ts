import type { Options } from 'highcharts';

export const getDumbbellOptions = (): Options => ({
  chart: {
    type: 'dumbbell',
    height: '400px',
  },
  title: {
    text: 'Dumbbell Chart',
  },
  xAxis: {
    categories: ['A', 'B', 'C', 'D', 'E'],
    title: {
      text: null,
    },
  },
  yAxis: {
    title: {
      text: 'Values',
    },
  },
  plotOptions: {
    dumbbell: {
      dataLabels: {
        enabled: true,
        format: '{point.low} - {point.high}',
      },
      tooltip: {
        pointFormat: 'Low: {point.low}<br/>High: {point.high}',
      },
    },
  },
  series: [
    {
      type: 'dumbbell',
      name: 'Values',
      data: [
        [1, 5],
        [2, 8],
        [3, 4],
        [4, 9],
        [2, 7],
      ],
    },
  ],
});
