import type { Options } from 'highcharts';
import type { Example } from './example';

const barStackedChartOptions: Options = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Ferry passengers by vehicle type 2024',
    align: 'left',
  },
  xAxis: {
    categories: ['January', 'February', 'March', 'April', 'May'],
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
  },
  legend: {
    reversed: true,
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      type: 'bar',
      name: 'Motorcycles',
      data: [74, 27, 52, 93, 1272],
    },
    {
      type: 'bar',
      name: 'Null-emission vehicles',
      data: [2106, 2398, 3046, 3195, 4916],
    },
    {
      type: 'bar',
      name: 'Conventional vehicles',
      data: [12213, 12721, 15242, 16518, 25037],
    },
  ],
};

const BarStackedExample: Example = {
  options: barStackedChartOptions,
  name: 'Bar Stacked',
  chartType: 'bar',
  slug: 'bar-stacked',
};

export default BarStackedExample;
