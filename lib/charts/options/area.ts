import type { Options } from 'highcharts';

export const getAreaOptions = (): Options => ({
  chart: {
    type: 'area',
    height: '400px',
  },
  title: {
    text: 'Area Chart',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    tickmarkPlacement: 'on',
    title: {
      text: null,
    },
  },
  yAxis: {
    title: {
      text: 'Values',
    },
    labels: {
      formatter: function () {
        return this.value.toString();
      },
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: ' units',
  },
  plotOptions: {
    area: {
      fillOpacity: 0.5,
      marker: {
        enabled: true,
      },
    },
  },
  series: [
    {
      type: 'area',
      name: 'Series 1',
      data: [0, 2, 5, 3, 5, 4, 9],
    },
    {
      type: 'area',
      name: 'Series 2',
      data: [1, 4, 3, 3, 3, 5, 2],
    },
  ],
});
