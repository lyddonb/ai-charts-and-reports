import type { Options } from 'highcharts';

export const getVariablePieOptions = (): Options => ({
  chart: {
    type: 'variablepie',
    height: '400px',
  },
  title: {
    text: 'Variable Pie Chart',
  },
  plotOptions: {
    variablepie: {
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y}',
      },
      tooltip: {
        pointFormat: '{point.name}: {point.y}',
      },
    },
  },
  series: [
    {
      type: 'variablepie',
      name: 'Values',
      data: [
        ['A', 1, 2],
        ['B', 2, 3],
        ['C', 3, 4],
        ['D', 4, 5],
        ['E', 5, 6],
      ],
    },
  ],
});
