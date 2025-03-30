import type { Options, SeriesBellcurveOptions } from 'highcharts';

export const getBellCurveOptions = (): Options => ({
  chart: {
    type: 'bellcurve',
    height: '400px',
  },
  title: {
    text: 'Bell Curve Chart',
  },
  xAxis: {
    title: {
      text: 'Value',
    },
    min: -4,
    max: 4,
    tickInterval: 1,
  },
  yAxis: {
    title: {
      text: 'Frequency',
    },
    min: 0,
    max: 0.5,
    tickInterval: 0.1,
  },
  plotOptions: {
    bellcurve: {
      marker: {
        enabled: true,
      },
      dataLabels: {
        enabled: true,
        format: '{point.y:.2f}',
      },
    },
  },
  series: [
    {
      type: 'bellcurve',
      name: 'Normal Distribution',
      pointsInInterval: 100,
      intervals: 1,
      data: [
        { x: -4, y: 0.0001 },
        { x: -3, y: 0.0044 },
        { x: -2, y: 0.0539 },
        { x: -1, y: 0.242 },
        { x: 0, y: 0.3989 },
        { x: 1, y: 0.242 },
        { x: 2, y: 0.0539 },
        { x: 3, y: 0.0044 },
        { x: 4, y: 0.0001 },
      ],
    } as unknown as SeriesBellcurveOptions,
  ],
});
