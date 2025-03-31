import type { Options } from 'highcharts';

export const getPyramid3DOptions = (): Options => ({
  chart: {
    type: 'pyramid3d',
    height: '400px',
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 0,
      depth: 50,
      viewDistance: 50,
    },
  },
  title: {
    text: '3D Pyramid Chart',
  },
  plotOptions: {
    pyramid3d: {
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y}',
      },
    },
  },
  series: [
    {
      type: 'pyramid3d',
      name: 'Values',
      data: [
        ['A', 100],
        ['B', 80],
        ['C', 60],
        ['D', 40],
        ['E', 20],
      ],
    },
  ],
});
