import type { Options } from 'highcharts';

export const getVectorOptions = (): Options => ({
  chart: {
    type: 'vector',
    height: '400px',
    backgroundColor: 'transparent',
  },
  title: {
    text: 'Vector Chart',
    align: 'center',
  },
  xAxis: {
    min: -10,
    max: 10,
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    lineWidth: 1,
    tickWidth: 1,
  },
  yAxis: {
    min: -10,
    max: 10,
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    lineWidth: 1,
    tickWidth: 1,
    plotBands: [],
    plotLines: [],
  },
  tooltip: {
    headerFormat: '',
    pointFormat: 'Length: {point.length:.2f}',
  },
  plotOptions: {
    vector: {
      rotationOrigin: 'center',
      vectorLength: 10,
      lineWidth: 2,
      marker: {
        enabled: true,
        radius: 3,
      },
    },
  },
  series: [
    {
      type: 'vector',
      name: 'Vectors',
      data: [
        { x: 0, y: 0, length: 5, direction: 45, color: '#7cb5ec' },
        { x: 0, y: 0, length: 5, direction: 225, color: '#434348' },
        { x: 0, y: 0, length: 5, direction: 135, color: '#90ed7d' },
        { x: 0, y: 0, length: 5, direction: 315, color: '#f7a35c' },
      ],
    },
  ],
  credits: {
    enabled: false,
  },
});
