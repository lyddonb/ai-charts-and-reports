import type { Options } from 'highcharts';

export const getPolygonOptions = (): Options => ({
  chart: {
    type: 'polygon',
    height: '400px',
  },
  title: {
    text: 'Polygon Chart',
  },
  xAxis: {
    categories: ['A', 'B', 'C', 'D', 'E'],
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
    polygon: {
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
      type: 'polygon',
      name: 'Values',
      data: [5, 3, 4, 7, 2],
    },
  ],
});
