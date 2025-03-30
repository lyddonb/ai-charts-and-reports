import type { Options } from 'highcharts';

export const getGaugeOptions = (): Options => ({
  chart: {
    type: 'gauge',
  },
  title: {
    text: 'Gauge Chart',
  },
  pane: {
    startAngle: -150,
    endAngle: 150,
  },
  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 2,
    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',
    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 0,
    },
    plotBands: [
      {
        from: 0,
        to: 60,
        color: '#DF5353',
      },
      {
        from: 60,
        to: 80,
        color: '#DDDF0D',
      },
      {
        from: 80,
        to: 100,
        color: '#55BF3B',
      },
    ],
  },
  series: [
    {
      type: 'gauge',
      name: 'Speed',
      data: [80],
      tooltip: {
        valueSuffix: ' km/h',
      },
      dataLabels: {
        format: '{y} km/h',
        borderWidth: 0,
        color: '#333',
        style: {
          textOutline: 'none',
        },
        y: 26,
        align: 'center',
        verticalAlign: 'middle',
      },
    },
  ],
});
