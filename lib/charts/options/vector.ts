import type { Options } from 'highcharts';

export const getVectorOptions = (): Options => ({
  chart: {
    type: 'vector',
    height: '400px',
  },
  title: {
    text: 'Vector Chart',
  },
  xAxis: {
    min: -10,
    max: 10,
    gridLineWidth: 0,
    minorGridLineWidth: 0,
  },
  yAxis: {
    min: -10,
    max: 10,
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    plotBands: [],
    plotLines: [],
  },
  tooltip: {
    pointFormat: 'Length: {point.length:.2f}',
  },
  plotOptions: {
    vector: {
      rotationOrigin: 'center',
      vectorLength: 10,
    },
  },
  series: [
    {
      type: 'vector',
      name: 'Vectors',
      data: [
        [0, 0, 5, 5],
        [0, 0, -5, -5],
        [0, 0, 5, -5],
        [0, 0, -5, 5],
      ],
    },
  ],
});
