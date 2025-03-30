import type { Options } from 'highcharts';

export const getBubbleOptions = (): Options => ({
  chart: {
    type: 'bubble',
    height: '400px',
  },
  title: {
    text: 'Bubble Chart',
  },
  xAxis: {
    title: {
      text: 'X Values',
    },
  },
  yAxis: {
    title: {
      text: 'Y Values',
    },
  },
  plotOptions: {
    bubble: {
      minSize: 3,
      maxSize: 50,
      zMin: 0,
      zMax: 100,
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      tooltip: {
        pointFormat: '({point.x}, {point.y}), Size: {point.z}',
      },
    },
  },
  series: [
    {
      type: 'bubble',
      name: 'Bubble Series',
      data: [
        [95, 95, 13.8, 'BE'],
        [86.5, 102.9, 14.7, 'DE'],
        [80.8, 91.5, 15.8, 'FI'],
        [80.4, 102.5, 12, 'NL'],
        [80.3, 86.1, 11.8, 'SE'],
        [78.4, 70.1, 16.6, 'ES'],
        [74.2, 68.5, 14.5, 'FR'],
        [73.5, 83.1, 10, 'NO'],
        [71, 93.2, 24.7, 'UK'],
        [69.2, 57.6, 10.4, 'IT'],
        [68.6, 20, 16, 'RU'],
        [65.5, 126.4, 35.3, 'US'],
        [65.4, 50.8, 28.5, 'HU'],
        [63.4, 51.8, 15.4, 'PT'],
        [64, 82.9, 31.3, 'NZ'],
      ],
    },
  ],
});
