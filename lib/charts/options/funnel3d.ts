import type { Options } from 'highcharts';

export const getFunnel3DOptions = (): Options => ({
  chart: {
    type: 'funnel3d',
    height: '400px',
  },
  title: {
    text: 'Funnel 3D Chart',
  },
  plotOptions: {
    funnel3d: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      neckWidth: '30%',
      neckHeight: '25%',
      width: '90%',
      height: '90%',
      tooltip: {
        pointFormat: '{point.name}: {point.y}',
      },
    },
  },
  series: [
    {
      type: 'funnel3d',
      name: 'Funnel 3D',
      data: [
        ['Website visits', 15654],
        ['Downloads', 4064],
        ['Requested price list', 1987],
        ['Invoice sent', 976],
        ['Finalized', 846],
      ],
    },
  ],
});
