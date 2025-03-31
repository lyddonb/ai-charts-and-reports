import type { Options } from 'highcharts';

export const getMapBubbleOptions = (): Options => ({
  chart: {
    type: 'mapbubble',
    height: '400px',
  },
  title: {
    text: 'Map Bubble Chart',
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom',
      align: 'right',
    },
  },
  plotOptions: {
    mapbubble: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      tooltip: {
        pointFormat: '{point.name}: {point.z}',
      },
    },
  },
  series: [
    {
      type: 'mapbubble',
      name: 'Population',
      data: [
        { name: 'us-ny', z: 19.5 },
        { name: 'us-nj', z: 8.9 },
        { name: 'us-pa', z: 12.8 },
        { name: 'us-ct', z: 3.6 },
        { name: 'us-ma', z: 6.9 },
        { name: 'us-me', z: 1.3 },
        { name: 'us-nh', z: 1.4 },
        { name: 'us-vt', z: 0.6 },
        { name: 'us-ri', z: 1.1 },
      ],
    },
  ],
});
