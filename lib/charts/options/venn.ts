import type { Options } from 'highcharts';

export const getVennOptions = (): Options => ({
  chart: {
    type: 'venn',
    height: '400px',
  },
  title: {
    text: 'Venn Chart',
  },
  plotOptions: {
    venn: {
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
      type: 'venn',
      name: 'Sets',
      data: [
        {
          name: 'A',
          value: 2,
          sets: ['A'],
        },
        {
          name: 'B',
          value: 2,
          sets: ['B'],
        },
        {
          name: 'A ∩ B',
          value: 1,
          sets: ['A', 'B'],
        },
      ],
    },
  ],
});
