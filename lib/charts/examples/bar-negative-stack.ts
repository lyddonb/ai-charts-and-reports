import type { Options } from 'highcharts';
import type { Example } from './example';

// Age categories
const categories = [
  '0-4',
  '5-9',
  '10-14',
  '15-19',
  '20-24',
  '25-29',
  '30-34',
  '35-40',
  '40-45',
  '45-49',
  '50-54',
  '55-59',
  '60-64',
  '65-69',
  '70-74',
  '75-79',
  '80-84',
  '80+',
];

const barNegativeStackChartOptions: Options = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Population pyramid for Andorra, 2023',
  },
  subtitle: {
    text:
      'Source: <a ' +
      'href="https://countryeconomy.com/demography/population-structure/andorra"' +
      'target="_blank">countryeconomy.com</a>',
  },
  accessibility: {
    point: {
      valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.',
    },
  },
  xAxis: [
    {
      categories: categories,
      reversed: false,
      labels: {
        step: 1,
      },
      accessibility: {
        description: 'Age (male)',
      },
    },
    {
      // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
      linkedTo: 0,
      labels: {
        step: 1,
      },
      accessibility: {
        description: 'Age (female)',
      },
    },
  ],
  yAxis: {
    title: {
      text: null,
    },
    labels: {
      formatter: function () {
        return `${Math.abs(Number(this.value))}%`;
      },
    },
    min: -6,
    max: 6,
    tickInterval: 1,
    accessibility: {
      description: 'Percentage population',
      rangeDescription: 'Range: 0 to 5%',
    },
  },

  plotOptions: {
    series: {
      stacking: 'normal',
    },
  },

  tooltip: {
    format:
      '<b>{series.name}, age {point.category}</b><br/>' +
      'Population: {(abs point.y):.2f}%',
  },

  series: [
    {
      name: 'Male',
      type: 'bar',
      data: [
        -1.38, -2.09, -2.45, -2.71, -2.97, -3.69, -4.04, -3.81, -4.19, -4.61,
        -4.56, -4.21, -3.53, -2.55, -1.82, -1.46, -0.78, -0.71,
      ],
    },
    {
      name: 'Female',
      type: 'bar',
      data: [
        1.35, 1.98, 2.43, 2.39, 2.71, 3.02, 3.5, 3.52, 4.03, 4.4, 4.17, 3.88,
        3.29, 2.42, 1.8, 1.39, 0.99, 1.15,
      ],
    },
  ],
};

const BarNegativeStackExample: Example = {
  options: barNegativeStackChartOptions,
  name: 'Bar Negative Stack',
  chartType: 'bar',
  slug: 'bar-negative-stack',
};

export default BarNegativeStackExample;
