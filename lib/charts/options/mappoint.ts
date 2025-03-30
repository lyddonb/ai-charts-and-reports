import type { Options } from 'highcharts';

export const getMapPointOptions = (): Options => ({
  chart: {
    type: 'mappoint',
    height: '400px',
  },
  title: {
    text: 'Map Point Chart',
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom',
      align: 'right',
    },
  },
  plotOptions: {
    mappoint: {
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
      type: 'mappoint',
      name: 'Points',
      data: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
    },
  ],
});
