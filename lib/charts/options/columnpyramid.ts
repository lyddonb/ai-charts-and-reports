import type { Options } from 'highcharts';

export const getColumnPyramidOptions = (): Options => ({
  chart: {
    type: 'columnpyramid',
    height: '400px',
  },
  title: {
    text: 'Column Pyramid Chart',
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
    columnpyramid: {
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
      type: 'columnpyramid',
      name: 'Values',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0],
    },
  ],
});
