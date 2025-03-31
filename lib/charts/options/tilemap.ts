import type { Options } from 'highcharts';

export const getTilemapOptions = (): Options => ({
  chart: {
    type: 'tilemap',
    height: '400px',
  },
  title: {
    text: 'Tilemap Chart',
  },
  xAxis: {
    title: {
      text: null,
    },
  },
  yAxis: {
    title: {
      text: null,
    },
  },
  colorAxis: {
    min: 0,
    stops: [
      [0, '#3061cf'],
      [0.5, '#fffbbc'],
      [0.9, '#c4463a'],
      [1, '#c4463a'],
    ],
  },
  plotOptions: {
    tilemap: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      tooltip: {
        pointFormat: '{point.name}: {point.value}',
      },
    },
  },
  series: [
    {
      type: 'tilemap',
      name: 'Values',
      data: [
        [0, 0, 10],
        [0, 1, 19],
        [0, 2, 8],
        [1, 0, 92],
        [1, 1, 58],
        [1, 2, 78],
        [2, 0, 35],
        [2, 1, 15],
        [2, 2, 123],
      ],
    },
  ],
});
