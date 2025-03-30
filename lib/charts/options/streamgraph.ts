import type { Options } from 'highcharts';

export const getStreamGraphOptions = (): Options => ({
  chart: {
    type: 'streamgraph',
    height: '400px',
  },
  title: {
    text: 'Stream Graph Chart',
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
  },
  plotOptions: {
    streamgraph: {
      fillOpacity: 0.5,
      marker: {
        enabled: true,
      },
    },
  },
  series: [
    {
      type: 'streamgraph',
      name: 'Series 1',
      data: [0, 2, 5, 3, 5, 4, 9],
    },
    {
      type: 'streamgraph',
      name: 'Series 2',
      data: [1, 4, 3, 3, 3, 5, 2],
    },
  ],
});
