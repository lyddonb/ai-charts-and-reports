'use client';

import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
import type { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import seriesTypes from './series';

// dynamically import highcharts with ssr disabled
// const highchartsreact = dynamic(() => import('highcharts-react-official'), {
//   ssr: false,
// });

const loadHighchartsModules = async () => {
  try {
    // First load the core Highcharts
    const Highcharts = await import(
      'highcharts/es-modules/masters/highcharts.src.js'
    );

    // Then load highcharts-more
    await import('highcharts/es-modules/masters/highcharts-more.src.js');

    // Load 3D module before any 3D-dependent modules
    await import('highcharts/es-modules/masters/highcharts-3d.src.js');

    // Then load other modules
    await import(
      'highcharts/es-modules/masters/modules/draggable-points.src.js'
    );
    await import(
      'highcharts/es-modules/masters/modules/histogram-bellcurve.src.js'
    );
    await import('highcharts/es-modules/masters/modules/sankey.src.js');
    await import('highcharts/es-modules/masters/modules/exporting.src.js');
    await import('highcharts/es-modules/masters/modules/heatmap.src.js');
    await import('highcharts/es-modules/masters/modules/accessibility.src.js');
    await import('highcharts/es-modules/masters/modules/bullet.src.js');
    await import('highcharts/es-modules/masters/modules/arc-diagram.src.js');
    await import(
      'highcharts/es-modules/masters/modules/dependency-wheel.src.js'
    );
    await import('highcharts/es-modules/masters/modules/dumbbell.src.js');
    await import('highcharts/es-modules/masters/modules/funnel3d.src.js');
    await import('highcharts/es-modules/masters/modules/funnel.src.js');
    await import('highcharts/es-modules/masters/modules/lollipop.src.js');
    await import('highcharts/es-modules/masters/modules/networkgraph.src.js');
    await import('highcharts/es-modules/masters/modules/organization.src.js');
    await import(
      'highcharts/es-modules/masters/modules/parallel-coordinates.src.js'
    );
    await import('highcharts/es-modules/masters/modules/cylinder.src.js');

    return Highcharts.default;
  } catch (error) {
    console.error('Error loading Highcharts modules:', error);
    throw error;
  }
};

type ChartType = (typeof seriesTypes)[number];

const defaultOptions: Options = {
  title: {
    text: 'Import some data to start!',
  },
  subtitle: {
    text: '',
  },
  series: [
    {
      type: 'bar',
      name: 'Sample Chart',
      data: [5, 10, 95],
    },
  ],
  xAxis: {
    categories: ['0', '1', '2'],
  },
  yAxis: {
    title: {
      text: 'Values',
    },
  },
};

const getGaugeOptions = (): Options => ({
  chart: {
    type: 'gauge',
  },
  title: {
    text: 'Gauge Chart',
  },
  pane: {
    startAngle: -150,
    endAngle: 150,
  },
  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 2,
    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',
    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 0,
    },
    plotBands: [
      {
        from: 0,
        to: 60,
        color: '#DF5353',
      },
      {
        from: 60,
        to: 80,
        color: '#DDDF0D',
      },
      {
        from: 80,
        to: 100,
        color: '#55BF3B',
      },
    ],
  },
  series: [
    {
      type: 'gauge',
      name: 'Speed',
      data: [80],
      tooltip: {
        valueSuffix: ' km/h',
      },
      dataLabels: {
        format: '{y} km/h',
        borderWidth: 0,
        color: '#333',
        style: {
          textOutline: 'none',
        },
        y: 26,
        align: 'center',
        verticalAlign: 'middle',
      },
    },
  ],
});

const Chart = ({ options }: { options: Options }) => {
  const [mounted, setMounted] = useState(false);
  const [highchartsInstance, setHighchartsInstance] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const init = async () => {
      try {
        const Highcharts = await loadHighchartsModules();
        setHighchartsInstance(Highcharts);
        setMounted(true);
      } catch (error) {
        console.error('Error initializing Highcharts:', error);
      }
    };

    init();
  }, []);

  if (!mounted || !highchartsInstance) {
    return <div>Loading chart...</div>;
  }

  return <HighchartsReact highcharts={highchartsInstance} options={options} />;
};

const Configure = () => {
  const [chartOptions, setChartOptions] = useState<Options>(defaultOptions);

  const handleTitleChange = (value: string) => {
    setChartOptions((prev: Options) => ({
      ...prev,
      title: { text: value },
    }));
  };

  const handleChartTypeChange = (value: ChartType) => {
    // Use gauge options if the chart type is gauge
    const chartOptions = value === 'gauge' ? getGaugeOptions() : defaultOptions;

    setChartOptions((prev: Options) => ({
      ...chartOptions,
      series: [
        {
          ...(chartOptions.series?.[0] as Highcharts.SeriesOptionsType),
          type: value,
        },
      ] as Highcharts.SeriesOptionsType[],
    }));
  };

  const handleSampleData = () => {
    setChartOptions((prev: Options) => ({
      ...prev,
      series: [
        {
          ...(prev.series?.[0] as Highcharts.SeriesOptionsType),
          data: [5, 10, 95],
        },
      ] as Highcharts.SeriesOptionsType[],
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const csvData = e.target?.result as string;
        // Here you would parse the CSV data and update the chart
        // For now, we'll just show a message
        alert('CSV file loaded! (Parsing to be implemented)');
      } catch (error) {
        console.error('Error reading file:', error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex-1 h-full">
      <div className="flex h-full gap-4 overflow-hidden">
        <Card className="p-4 w-[300px] shrink-0">
          <h2 className="text-xl font-bold mb-4">Properties</h2>

          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title Text</Label>
              <Input
                id="title"
                value={chartOptions.title?.text ?? ''}
                onChange={(e) => handleTitleChange(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="chartType">Series Type</Label>
              <Select onValueChange={handleChartTypeChange} defaultValue="bar">
                <SelectTrigger>
                  <SelectValue placeholder="Select chart type" />
                </SelectTrigger>
                <SelectContent>
                  {seriesTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Data Import</Label>
              <div className="space-y-2">
                <Button
                  onClick={() => document.getElementById('csvFile')?.click()}
                  className="w-full"
                >
                  Upload CSV file
                </Button>
                <input
                  id="csvFile"
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <Button
                  onClick={handleSampleData}
                  variant="outline"
                  className="w-full"
                >
                  Load sample data
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4 flex-1 min-w-0">
          <div className="w-full h-full">
            <Chart options={chartOptions} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Configure;
