import type { Options } from 'highcharts';

export const getMapOptions = (): Options => ({
  chart: {
    type: 'map',
    height: '400px',
  },
  title: {
    text: 'Map Chart',
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom',
      align: 'right',
    },
  },
  colorAxis: {
    min: 0,
    stops: [
      [0, '#EFEFFF'],
      [0.67, '#4444FF'],
      [1, '#000044'],
    ],
  },
  plotOptions: {
    map: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      tooltip: {
        pointFormat: '{point.name}: {point.value}',
      },
    },
  },
  series: [
    {
      type: 'map',
      name: 'Map',
      data: [
        ['us-ny', 0],
        ['us-nj', 1],
        ['us-pa', 2],
        ['us-ct', 3],
        ['us-ma', 4],
        ['us-me', 5],
        ['us-nh', 6],
        ['us-vt', 7],
        ['us-ri', 8],
      ],
    },
  ],
});
