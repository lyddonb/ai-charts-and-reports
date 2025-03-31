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

const pieColors = [colors[2], colors[0], colors[3], colors[1], colors[4]];

const accessiblePieOptions: Options = {
  chart: {
    type: 'pie',
  },

  title: {
    text: 'Primary desktop/laptop screen readers',
  },

  subtitle: {
    text: 'Source: WebAIM. Click on point to visit official website',
  },

  colors: pieColors,

  tooltip: {
    valueSuffix: '%',
    borderColor: '#8ae',
    shape: 'rect',
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    followPointer: false,
    stickOnContact: true,
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
      point: {
        events: {
          click: function () {
            // @ts-ignore - website property is added to point data but not in type definition
            window.location.href = this.website;
          },
        },
      },
      cursor: 'pointer',
      borderWidth: 3,
    },
  },

  series: [
    {
      type: 'pie',
      name: 'Screen reader usage',
      data: [
        {
          name: 'NVDA',
          y: 40.6,
          website: 'https://www.nvaccess.org',
          accessibility: {
            description: 'This is the most used desktop screen reader',
          },
        },
        {
          name: 'JAWS',
          y: 40.1,
          website: 'https://www.freedomscientific.com/Products/Blindness/JAWS',
        },
        {
          name: 'VoiceOver',
          y: 12.9,
          website: 'http://www.apple.com/accessibility/osx/voiceover',
        },
        {
          name: 'ZoomText',
          y: 2,
          website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader',
        },
        {
          name: 'Other',
          y: 4.4,
          website:
            'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php',
        },
      ] as any[],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          plotOptions: {
            series: {
              dataLabels: {
                format: '<b>{point.name}</b>',
              },
            },
          },
        },
      },
    ],
  },
};

const AccessiblePieExample: Example = {
  options: accessiblePieOptions,
  name: 'Accessible Pie',
  chartType: 'pie',
  slug: 'accessible-pie',
};

export default AccessiblePieExample;
