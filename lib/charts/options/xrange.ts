import type { Options } from 'highcharts';

export const getXRangeOptions = (): Options => ({
  chart: {
    type: 'xrange',
    height: '400px',
  },
  title: {
    text: 'X-Range Chart',
  },
  xAxis: {
    type: 'datetime',
    title: {
      text: 'Date',
    },
    gridLineWidth: 0,
    minorGridLineWidth: 0,
  },
  yAxis: {
    title: {
      text: 'Tasks',
    },
    categories: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'],
    reversed: true,
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    plotBands: [],
    plotLines: [],
  },
  tooltip: {
    headerFormat: '<b>{point.x:%Y-%m-%d}</b><br/>',
    pointFormat: '{point.yCategory}: {point.x:%Y-%m-%d} - {point.x2:%Y-%m-%d}',
  },
  plotOptions: {
    xrange: {
      borderWidth: 0,
      colorByPoint: true,
    },
  },
  series: [
    {
      type: 'xrange',
      name: 'Project Timeline',
      pointWidth: 20,
      data: [
        {
          x: Date.UTC(2024, 0, 1),
          x2: Date.UTC(2024, 0, 15),
          y: 0,
          color: '#7cb5ec',
        },
        {
          x: Date.UTC(2024, 0, 10),
          x2: Date.UTC(2024, 0, 25),
          y: 1,
          color: '#434348',
        },
        {
          x: Date.UTC(2024, 0, 20),
          x2: Date.UTC(2024, 1, 5),
          y: 2,
          color: '#90ed7d',
        },
        {
          x: Date.UTC(2024, 0, 25),
          x2: Date.UTC(2024, 1, 15),
          y: 3,
          color: '#f7a35c',
        },
        {
          x: Date.UTC(2024, 1, 1),
          x2: Date.UTC(2024, 1, 20),
          y: 4,
          color: '#8085e9',
        },
      ],
    },
  ],
});
