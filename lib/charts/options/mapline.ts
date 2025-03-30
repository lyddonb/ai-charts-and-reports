import type { Options } from 'highcharts';

export const getMapLineOptions = (): Options => ({
  chart: {
    type: 'mapline',
    height: '400px',
  },
  title: {
    text: 'Map Line Chart',
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom',
      align: 'right',
    },
  },
  plotOptions: {
    mapline: {
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
      type: 'mapline',
      name: 'Lines',
      data: [
        { name: 'A', value: 1 },
        { name: 'B', value: 2 },
        { name: 'C', value: 0 },
      ],
    },
  ],
});
