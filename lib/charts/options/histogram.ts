import type { Options, SeriesHistogramOptions } from 'highcharts';

export const getHistogramOptions = (): Options => ({
  chart: {
    type: 'histogram',
    height: '400px',
  },
  title: {
    text: 'Histogram Chart',
  },
  xAxis: {
    title: {
      text: 'Value',
    },
    alignTicks: false,
  },
  yAxis: {
    title: {
      text: 'Frequency',
    },
    min: 0,
  },
  plotOptions: {
    histogram: {
      binWidth: 1,
      pointPadding: 0,
      groupPadding: 0,
      pointPlacement: 'between',
    },
  },
  series: [
    {
      type: 'histogram',
      name: 'Frequency',
      data: [3, 4, 3, 5, 4, 10, 12, 4, 4, 3, 3, 5, 5, 9, 11, 4, 3, 7, 3, 4],
    } as unknown as SeriesHistogramOptions,
  ],
});
