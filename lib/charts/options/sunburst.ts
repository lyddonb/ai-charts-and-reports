import type { Options } from 'highcharts';

export const getSunburstOptions = (): Options => ({
  chart: {
    type: 'sunburst',
    height: '400px',
  },
  title: {
    text: 'Sunburst Chart',
  },
  plotOptions: {
    sunburst: {
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
      type: 'sunburst',
      name: 'Values',
      data: [
        {
          id: 'A',
          name: 'A',
          value: 1,
          parent: '',
        },
        {
          id: 'A1',
          name: 'A1',
          value: 0.5,
          parent: 'A',
        },
        {
          id: 'A2',
          name: 'A2',
          value: 0.5,
          parent: 'A',
        },
        {
          id: 'B',
          name: 'B',
          value: 1,
          parent: '',
        },
        {
          id: 'B1',
          name: 'B1',
          value: 0.5,
          parent: 'B',
        },
        {
          id: 'B2',
          name: 'B2',
          value: 0.5,
          parent: 'B',
        },
      ],
    },
  ],
});
