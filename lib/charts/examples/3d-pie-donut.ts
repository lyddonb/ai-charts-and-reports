import type { Options } from 'highcharts';
import type { Example } from './example';

const threeDPieDonutOptions: Options = {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
    },
  },
  title: {
    text: 'Beijing 2022 gold medals by country',
  },
  subtitle: {
    text: '3D donut in Highcharts',
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45,
    },
  },
  series: [
    {
      type: 'pie',
      name: 'Medals',
      data: [
        ['Norway', 16],
        ['Germany', 12],
        ['USA', 8],
        ['Sweden', 8],
        ['Netherlands', 8],
        ['ROC', 6],
        ['Austria', 7],
        ['Canada', 4],
        ['Japan', 3],
      ],
    },
  ],
};

const ThreeDPieDonutExample: Example = {
  options: threeDPieDonutOptions,
  name: '3D Pie Donut',
  chartType: 'column',
  slug: '3d-pie-donut',
};

export default ThreeDPieDonutExample;
