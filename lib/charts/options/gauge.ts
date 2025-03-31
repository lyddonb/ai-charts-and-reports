import type { Options } from 'highcharts';

export const getGaugeOptions = (): Options => ({
  chart: {
    type: 'gauge',
    height: '400px',
  },
  title: {
    text: 'Gauge Chart',
  },
  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [
      {
        backgroundColor: '#EEE',
        borderWidth: 0,
        outerRadius: '109%',
      },
      {
        backgroundColor: '#FFF',
        borderWidth: 1,
        outerRadius: '107%',
      },
      {},
    ],
  },
  yAxis: {
    min: 0,
    max: 200,
    lineColor: '#339',
    tickColor: '#339',
    minorTickColor: '#339',
    offset: -25,
    lineWidth: 2,
    labels: {
      distance: 20,
      style: {
        fontSize: '14px',
      },
    },
    plotBands: [
      {
        from: 0,
        to: 120,
        color: '#55BF3B',
      },
      {
        from: 120,
        to: 160,
        color: '#DDDF0D',
      },
      {
        from: 160,
        to: 200,
        color: '#DF5353',
      },
    ],
  },
  series: [
    {
      type: 'gauge',
      name: 'Speed',
      data: [80],
      dataLabels: {
        format: '{y} km/h',
        borderWidth: 0,
        color: '#333',
        style: {
          fontSize: '14px',
          textOutline: 'none',
        },
        y: 26,
      },
      tooltip: {
        valueSuffix: ' km/h',
      },
    },
  ],
});
