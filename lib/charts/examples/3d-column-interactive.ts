import type { Options } from 'highcharts';
import type { Example } from './example';

const threeDColumnInteractiveOptions: Options = {
  chart: {
    type: 'column',
    options3d: {
      enabled: true,
      alpha: 15,
      beta: 15,
      depth: 50,
      viewDistance: 25,
    },
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    title: {
      text: 'Cars sold',
    },
  },
  tooltip: {
    headerFormat: '<b>{point.key}</b><br>',
    pointFormat: 'Cars sold: {point.y}',
  },
  title: {
    text: 'Sold passenger cars in Norway by brand, May 2024',
  },
  subtitle: {
    text:
      'Source: ' +
      '<a href="https://ofv.no/registreringsstatistikk"' +
      'target="_blank">OFV</a>',
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    column: {
      depth: 25,
    },
  },
  series: [
    {
      type: 'column',
      data: [
        ['Toyota', 1795],
        ['Volkswagen', 1242],
        ['Volvo', 1074],
        ['Tesla', 832],
        ['Hyundai', 593],
        ['MG', 509],
        ['Skoda', 471],
        ['BMW', 442],
        ['Ford', 385],
        ['Nissan', 371],
      ],
      colorByPoint: true,
    },
  ],
};

const ThreeDColumnInteractiveExample: Example = {
  options: threeDColumnInteractiveOptions,
  name: '3D Column Interactive',
  chartType: 'column',
  slug: '3d-column-interactive',
};

export default ThreeDColumnInteractiveExample;
