import type { Options } from 'highcharts';

export const getTimelineOptions = (): Options => ({
  chart: {
    type: 'timeline',
    height: '400px',
  },
  title: {
    text: 'Timeline Chart',
  },
  xAxis: {
    type: 'datetime',
    title: {
      text: null,
    },
  },
  yAxis: {
    title: {
      text: null,
    },
  },
  plotOptions: {
    timeline: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      tooltip: {
        pointFormat: '{point.name}',
      },
    },
  },
  series: [
    {
      type: 'timeline',
      name: 'Timeline',
      data: [
        {
          name: 'Event 1',
          x: Date.UTC(2023, 0, 1),
        },
        {
          name: 'Event 2',
          x: Date.UTC(2023, 1, 1),
        },
        {
          name: 'Event 3',
          x: Date.UTC(2023, 2, 1),
        },
        {
          name: 'Event 4',
          x: Date.UTC(2023, 3, 1),
        },
        {
          name: 'Event 5',
          x: Date.UTC(2023, 4, 1),
        },
      ],
    },
  ],
});
