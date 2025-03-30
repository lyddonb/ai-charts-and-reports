import type { Options } from 'highcharts';

export const getPyramidOptions = (): Options => ({
  chart: {
    type: 'pyramid',
    height: '400px',
  },
  title: {
    text: 'Pyramid Chart',
  },
  plotOptions: {
    pyramid: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      tooltip: {
        pointFormat: '{point.name}: {point.y}',
      },
    },
  },
  series: [
    {
      type: 'pyramid',
      name: 'Values',
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
