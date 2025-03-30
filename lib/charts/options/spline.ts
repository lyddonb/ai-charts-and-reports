import type { Options } from 'highcharts';

export const getSplineOptions = (): Options => ({
  chart: {
    type: 'spline',
    height: '400px',
  },
  title: {
    text: 'Spline Chart',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month',
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
    spline: {
      marker: {
        enabled: true,
      },
    },
  },
  series: [
    {
      type: 'spline',
      name: 'Series 1',
      data: [0, 2, 5, 3, 5, 4, 9],
    },
    {
      type: 'spline',
      name: 'Series 2',
      data: [1, 4, 3, 3, 3, 5, 2],
    },
  ],
});
