import type { Options } from 'highcharts';

export const getPieOptions = (): Options => ({
  chart: {
    type: 'pie',
    height: '400px',
  },
  title: {
    text: 'Pie Chart',
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.percentage:.1f}%',
      },
      tooltip: {
        pointFormat: '{point.name}: {point.percentage:.1f}%',
      },
    },
  },
  series: [
    {
      type: 'pie',
      name: 'Values',
      data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        ['Chrome', 12.8],
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7],
      ],
    },
  ],
});
