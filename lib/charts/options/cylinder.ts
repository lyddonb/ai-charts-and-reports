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
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    title: {
      text: null,
    },
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
      tooltip: {
        pointFormat: '{point.y}',
      },
    },
  },
  series: [
    {
      type: 'cylinder',
      name: 'Values',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0],
    },
  ],
});
