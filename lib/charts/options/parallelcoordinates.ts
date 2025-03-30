import type { Options } from 'highcharts';

export const getParallelCoordinatesOptions = (): Options => ({
  chart: {
    type: 'line',
    height: '400px',
    parallelCoordinates: true,
  },
  title: {
    text: 'Parallel Coordinates Chart',
  },
  xAxis: {
    categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    title: {
      text: null,
    },
  },
  yAxis: [
    {
      title: {
        text: 'Values 1',
      },
    },
    {
      title: {
        text: 'Values 2',
      },
    },
    {
      title: {
        text: 'Values 3',
      },
    },
    {
      title: {
        text: 'Values 4',
      },
    },
  ],
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
        format: '{point.value}',
      },
      tooltip: {
        pointFormat: '{point.value}',
      },
    },
  },
  series: [
    {
      type: 'line',
      name: 'Series 1',
      data: [
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [3, 4, 5, 6],
      ],
    },
  ],
});
