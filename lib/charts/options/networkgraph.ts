import type { Options } from 'highcharts';

export const getNetworkGraphOptions = (): Options => ({
  chart: {
    type: 'networkgraph',
    height: '400px',
  },
  title: {
    text: 'Network Graph Chart',
  },
  plotOptions: {
    networkgraph: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      layoutAlgorithm: {
        enableSimulation: true,
        friction: -0.981,
        integration: 'verlet',
        linkLength: 30,
        maxSpeed: 10,
      },
      tooltip: {
        pointFormat: '{point.name}',
      },
    },
  },
  series: [
    {
      type: 'networkgraph',
      name: 'Network',
      data: [
        ['A', 'B'],
        ['B', 'C'],
        ['C', 'D'],
        ['D', 'A'],
      ],
      nodes: [
        { id: 'A', name: 'Node A' },
        { id: 'B', name: 'Node B' },
        { id: 'C', name: 'Node C' },
        { id: 'D', name: 'Node D' },
      ],
    },
  ],
});
