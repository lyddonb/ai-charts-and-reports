import type { Options } from 'highcharts';
import type { Example } from './example';

const threeDPieOptions: Options = {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  title: {
    text: 'Global smartphone shipments market share, Q1 2022',
  },
  subtitle: {
    text:
      'Source: ' +
      '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
      'target="_blank">Counterpoint Research</a>',
  },
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
    },
  },
  series: [
    {
      type: 'pie',
      name: 'Share',
      data: [
        ['Samsung', 23],
        ['Apple', 18],
        {
          name: 'Xiaomi',
          y: 12,
          sliced: true,
          selected: true,
        },
        ['Oppo*', 9],
        ['Vivo', 8],
        ['Others', 30],
      ],
    },
  ],
};

const ThreeDPieExample: Example = {
  options: threeDPieOptions,
  name: '3D Pie',
  chartType: 'pie',
  slug: '3d-pie',
};

export default ThreeDPieExample;
