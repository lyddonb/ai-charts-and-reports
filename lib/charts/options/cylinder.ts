import type { Options } from 'highcharts';

export const getCylinderOptions = (): Options => ({
  chart: {
    type: 'cylinder',
    height: '400px',
  },
  title: {
    text: 'Cylinder Chart',
  },
  xAxis: {
    categories: ['A', 'B', 'C'],
  },
  yAxis: {
    title: {
      text: 'Values',
    },
  },
  plotOptions: {
    cylinder: {
      dataLabels: {
        enabled: true,
        format: '{point.y}',
      },
    },
  },
  series: [
    {
      type: 'cylinder',
      name: 'Cylinder',
      data: [5, 10, 95],
    } as Highcharts.SeriesCylinderOptions,
  ],
});
