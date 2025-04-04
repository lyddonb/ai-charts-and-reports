import type { Options } from 'highcharts';
import type { Example } from './example';

const threeDColumnNullValuesOptions: Options = {
  chart: {
    type: 'column',
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 25,
      depth: 70,
    },
  },
  title: {
    text: 'External trade in goods by country, Norway 2023',
  },
  subtitle: {
    text:
      'Source: ' +
      '<a href="https://www.ssb.no/en/statbank/table/08804/"' +
      'target="_blank">SSB</a>',
  },
  plotOptions: {
    column: {
      depth: 25,
    },
  },
  xAxis: {
    type: 'category',
    labels: {
      skew3d: true,
      style: {
        fontSize: '16px',
      },
    },
  },
  yAxis: {
    title: {
      text: 'NOK (million)',
      margin: 20,
    },
  },
  tooltip: {
    valueSuffix: ' MNOK',
  },
  series: [
    {
      type: 'column',
      name: 'Total imports',
      data: [
        ['Belgium', 21956],
        ['China', 114358],
        ['Denmark', 47726],
        ['Falkland Islands', 0],
        ['Germany', 116128],
        ['Netherlands', 48957],
        ['Russia', 3046],
        ['Sweden', 110695],
        ['Turkey', 10399],
        ['United States', 76285],
        ['Unspecified', null],
        ['Vietnam', 10014],
      ],
    },
  ],
};

const ThreeDColumnNullValuesExample: Example = {
  options: threeDColumnNullValuesOptions,
  name: '3D Column Null Values',
  chartType: 'column',
  slug: '3d-column-null-values',
};

export default ThreeDColumnNullValuesExample;
