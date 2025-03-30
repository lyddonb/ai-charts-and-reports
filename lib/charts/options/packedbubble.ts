import type { Options } from 'highcharts';

export const getPackedBubbleOptions = (): Options => ({
  chart: {
    type: 'packedbubble',
    height: '400px',
  },
  title: {
    text: 'Packed Bubble Chart',
  },
  plotOptions: {
    packedbubble: {
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
      type: 'packedbubble',
      name: 'Bubbles',
      data: [
        { name: 'A', value: 1 },
        { name: 'B', value: 2 },
        { name: 'C', value: 3 },
        { name: 'D', value: 4 },
        { name: 'E', value: 5 },
      ],
    },
  ],
});
