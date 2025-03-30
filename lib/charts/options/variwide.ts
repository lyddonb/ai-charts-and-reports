import type { Options } from 'highcharts';

export const getVariwideOptions = (): Options => ({
  chart: {
    type: 'variwide',
    height: '400px',
  },
  title: {
    text: 'Variwide Chart',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month',
    },
    gridLineWidth: 0,
    minorGridLineWidth: 0,
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
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    min: null,
    max: null,
    plotBands: [],
    plotLines: [],
  },
  tooltip: {
    shared: true,
    valueSuffix: ' units',
  },
  plotOptions: {
    variwide: {
      borderWidth: 0,
      colorByPoint: true,
    },
  },
  series: [
    {
      type: 'variwide',
      name: 'Series 1',
      data: [
        [0, 5, 10],
        [1, 4, 8],
        [2, 6, 12],
        [3, 3, 6],
        [4, 7, 14],
        [5, 5, 10],
        [6, 8, 16],
      ],
    },
  ],
});
