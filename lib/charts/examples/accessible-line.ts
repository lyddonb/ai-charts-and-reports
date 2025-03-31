import type { Options } from 'highcharts';
import type { Example } from './example';

// Define colors array
const colors = [
  '#7cb5ec',
  '#434348',
  '#90ed7d',
  '#f7a35c',
  '#8085e9',
  '#f15c80',
  '#e4d354',
  '#2b908f',
  '#f45b5b',
  '#91e8e1',
];

const accessibleLineOptions: Options = {
  chart: {
    type: 'spline',
  },

  legend: {
    symbolWidth: 40,
  },

  title: {
    text: 'Most common desktop screen readers',
  },

  subtitle: {
    text:
      'Source: WebAIM. Click on points to visit official screen ' +
      'reader website',
  },

  yAxis: {
    title: {
      text: 'Percentage usage',
    },
    accessibility: {
      description: 'Percentage usage',
    },
  },

  xAxis: {
    title: {
      text: 'Time',
    },
    accessibility: {
      description: 'Time from December 2010 to September 2019',
    },
    categories: [
      'December 2010',
      'May 2012',
      'January 2014',
      'July 2015',
      'October 2017',
      'September 2019',
    ],
  },

  tooltip: {
    valueSuffix: '%',
    stickOnContact: true,
  },

  plotOptions: {
    series: {
      point: {
        events: {
          click: function () {
            // @ts-ignore - website property is added to series options but not in type definition
            window.location.href = this.series.options.website;
          },
        },
      },
      cursor: 'pointer',
      lineWidth: 2,
    },
  },

  series: [
    {
      name: 'NVDA',
      data: [34.8, 43.0, 51.2, 41.4, 64.9, 72.4],
      website: 'https://www.nvaccess.org',
      color: '#7cb5ec',
      accessibility: {
        description: 'This is the most used screen reader in 2019.',
      },
    },
    {
      name: 'JAWS',
      data: [69.6, 63.7, 63.9, 43.7, 66.0, 61.7],
      website: 'https://www.freedomscientific.com/Products/Blindness/JAWS',
      dashStyle: 'ShortDashDot',
      color: colors[0],
    },
    {
      name: 'VoiceOver',
      data: [20.2, 30.7, 36.8, 30.9, 39.6, 47.1],
      website: 'http://www.apple.com/accessibility/osx/voiceover',
      dashStyle: 'ShortDot',
      color: colors[1],
    },
    {
      name: 'Narrator',
      data: [null, null, null, null, 21.4, 30.3],
      website:
        'https://support.microsoft.com/en-us/help/22798/windows-10-complete-guide-to-narrator',
      dashStyle: 'Dash',
      color: colors[9],
    },
    {
      name: 'ZoomText/Fusion',
      data: [6.1, 6.8, 5.3, 27.5, 6.0, 5.5],
      website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader',
      dashStyle: 'ShortDot',
      color: colors[5],
    },
    {
      name: 'Other',
      data: [42.6, 51.5, 54.2, 45.8, 20.2, 15.4],
      website:
        'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php',
      dashStyle: 'ShortDash',
      color: colors[3],
    },
  ] as any[],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 550,
        },
        chartOptions: {
          chart: {
            spacingLeft: 3,
            spacingRight: 3,
          },
          legend: {
            itemWidth: 150,
          },
          xAxis: {
            categories: [
              'Dec. 2010',
              'May 2012',
              'Jan. 2014',
              'July 2015',
              'Oct. 2017',
              'Sep. 2019',
            ],
            title: {
              text: '',
            },
          },
          yAxis: {
            visible: false,
          },
        },
      },
    ],
  },
};

const AccessibleLineExample: Example = {
  options: accessibleLineOptions,
  name: 'Accessible Line',
  chartType: 'line',
  slug: 'accessible-line',
};

export default AccessibleLineExample;
