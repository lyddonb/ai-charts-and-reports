import type { Options } from 'highcharts';

export const getScatterOptions = (): Options => ({
  chart: {
    type: 'scatter',
    height: '400px',
  },
  title: {
    text: 'Scatter Chart',
  },
  xAxis: {
    title: {
      text: 'X Values',
    },
  },
  yAxis: {
    title: {
      text: 'Y Values',
    },
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 5,
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      tooltip: {
        pointFormat: '({point.x}, {point.y})',
      },
    },
  },
  series: [
    {
      type: 'scatter',
      name: 'Values',
      data: [
        [1, 1, 'A'],
        [2, 2, 'B'],
        [3, 3, 'C'],
        [4, 4, 'D'],
        [5, 5, 'E'],
      ],
    },
  ],
});
