import type { Options } from 'highcharts';
import type { ChartType } from '../series';

export const getDefaultOptions = (value: ChartType): Options => ({
  chart: {
    type: value,
    resetZoomButton: {
      theme: {
        display: 'none',
      },
    },
  },
  title: {
    text: 'Sample Chart',
  },
  xAxis: {
    categories: ['0', '1', '2'],
    gridLineWidth: 0,
    minorGridLineWidth: 0,
  },
  yAxis: {
    title: {
      text: 'Values',
    },
    min: null,
    max: null,
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    plotBands: undefined,
    plotLines: undefined,
    minorTickLength: 0,
    tickLength: 0,
  },
  plotOptions: {
    series: {
      color: '#7cb5ec',
      animation: true,
    },
  },
  pane: undefined,
  series: [
    {
      type: value as any,
      name: 'Sample Chart',
      data: [5, 10, 95],
    },
  ],
  tooltip: {
    enabled: true,
    shared: true,
  },
  legend: {
    enabled: true,
  },
  credits: {
    enabled: false,
  },
});
