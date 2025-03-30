import type { Options } from 'highcharts';

export const getDependencyWheelOptions = (): Options => ({
  chart: {
    type: 'dependencywheel',
    height: '400px',
  },
  title: {
    text: 'Dependency Wheel Chart',
  },
  plotOptions: {
    dependencywheel: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      size: '95%',
      tooltip: {
        pointFormat:
          '{point.fromNode.name} → {point.toNode.name}: {point.weight}',
      },
    },
  },
  series: [
    {
      type: 'dependencywheel',
      name: 'Dependency Wheel',
      data: [
        ['A', 'B', 5],
        ['A', 'C', 3],
        ['A', 'D', 4],
        ['B', 'C', 4],
        ['B', 'D', 2],
        ['C', 'D', 5],
      ],
    },
  ],
});
