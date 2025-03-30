import type { Options } from 'highcharts';

export const getBulletOptions = (): Options => ({
  chart: {
    type: 'bullet',
    height: '400px',
  },
  title: {
    text: 'Bullet Chart',
  },
  xAxis: {
    categories: ['Revenue', 'Profit', 'Market Share'],
    title: {
      text: null,
    },
  },
  yAxis: {
    title: {
      text: null,
    },
    plotBands: [
      {
        from: 0,
        to: 150,
        color: '#666',
      },
      {
        from: 150,
        to: 225,
        color: '#999',
      },
      {
        from: 225,
        to: 9e9,
        color: '#bbb',
      },
    ],
  },
  plotOptions: {
    bullet: {
      targetOptions: {
        width: '200%',
      },
    },
  },
  series: [
    {
      type: 'bullet',
      name: 'Revenue',
      data: [
        {
          y: 275,
          target: 250,
        },
      ],
    },
    {
      type: 'bullet',
      name: 'Profit',
      data: [
        {
          y: 22,
          target: 25,
        },
      ],
    },
    {
      type: 'bullet',
      name: 'Market Share',
      data: [
        {
          y: 85,
          target: 90,
        },
      ],
    },
  ],
});
