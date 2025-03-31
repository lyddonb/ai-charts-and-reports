import type { Options } from 'highcharts';

export const getLollipopOptions = (): Options => ({
  chart: {
    type: 'lollipop',
    height: '400px',
  },
  title: {
    text: 'Lollipop Chart',
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
    lollipop: {
      dataLabels: {
        enabled: true,
        format: '{point.y}',
      },
      tooltip: {
        pointFormat: '{point.y}',
      },
    },
  },
  series: [
    {
      type: 'lollipop',
      name: 'Values',
      data: [5, 3, 4, 7, 2],
    },
  ],
});
