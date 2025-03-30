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
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f}%',
      },
      showInLegend: true,
    },
  },
  series: [
    {
      type: 'pie',
      name: 'Values',
      data: [
        ['Firefox', 45.0],
        ['Chrome', 26.8],
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7],
      ],
    },
  ],
});
