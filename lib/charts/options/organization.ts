import type { Options } from 'highcharts';

export const getOrganizationOptions = (): Options => ({
  chart: {
    type: 'organization',
    height: '400px',
  },
  title: {
    text: 'Organization Chart',
  },
  plotOptions: {
    organization: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
      tooltip: {
        pointFormat: '{point.name}',
      },
    },
  },
  series: [
    {
      type: 'organization',
      name: 'Organization',
      data: [
        { from: 'CEO', to: 'CTO' },
        { from: 'CEO', to: 'CFO' },
        { from: 'CTO', to: 'Dev Lead' },
        { from: 'CTO', to: 'QA Lead' },
        { from: 'Dev Lead', to: 'Dev 1' },
        { from: 'Dev Lead', to: 'Dev 2' },
        { from: 'QA Lead', to: 'QA 1' },
        { from: 'QA Lead', to: 'QA 2' },
      ],
      nodes: [
        { id: 'CEO', name: 'CEO' },
        { id: 'CTO', name: 'CTO' },
        { id: 'CFO', name: 'CFO' },
        { id: 'Dev Lead', name: 'Dev Lead' },
        { id: 'QA Lead', name: 'QA Lead' },
        { id: 'Dev 1', name: 'Dev 1' },
        { id: 'Dev 2', name: 'Dev 2' },
        { id: 'QA 1', name: 'QA 1' },
        { id: 'QA 2', name: 'QA 2' },
      ],
    },
  ],
});
