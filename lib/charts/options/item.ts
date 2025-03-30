import type { Options } from 'highcharts';

export const getItemOptions = (): Options => ({
  chart: {
    type: 'item',
    height: '400px',
  },
  title: {
    text: 'Item Chart',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
    },
  },
  yAxis: {
    title: {
      text: 'Values',
    },
  },
  plotOptions: {
    item: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      tooltip: {
        pointFormat: '{point.y}',
      },
    },
  },
  series: [
    {
      type: 'item',
      name: 'Items',
      data: [
        ['Item 1', 29.9],
        ['Item 2', 71.5],
        ['Item 3', 106.4],
        ['Item 4', 129.2],
        ['Item 5', 144.0],
        ['Item 6', 176.0],
      ],
    },
  ],
});
