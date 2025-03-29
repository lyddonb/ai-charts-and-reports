'use client';

import { useState } from 'react';
// import dynamic from 'next/dynamic';
import type { Options } from 'highcharts';
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
import Chart from './chart';

// dynamically import highcharts with ssr disabled
// const highchartsreact = dynamic(() => import('highcharts-react-official'), {
//   ssr: false,
// });

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

const Configure = () => {
  const [chartOptions, setChartOptions] = useState<Options>(defaultOptions);

  const handleTitleChange = (value: string) => {
    setChartOptions((prev: Options) => ({
      ...prev,
      title: { text: value },
    }));
  };

  const handleChartTypeChange = (value: ChartType) => {
    // Use specific options based on chart type
    const chartOptions = (() => {
      switch (value) {
        case 'gauge':
          return getGaugeOptions();
        case 'cylinder': {
          return {
            chart: {
              type: value,
              height: '400px',
            },
            title: {
              text: 'Cylinder Chart',
            },
            xAxis: {
              categories: ['A', 'B', 'C'],
            },
            yAxis: {
              title: {
                text: 'Values',
              },
            },
            plotOptions: {
              cylinder: {
                dataLabels: {
                  enabled: true,
                  format: '{point.y}',
                },
              },
            },
            series: [
              {
                type: value,
                name: 'Cylinder',
                data: [5, 10, 95],
              } as Highcharts.SeriesCylinderOptions,
            ],
          };
        }
        case 'pareto': {
          return {
            chart: {
              type: 'column',
              height: '400px',
            },
            title: {
              text: 'Pareto Chart',
            },
            xAxis: {
              categories: ['A', 'B', 'C', 'D', 'E'],
              title: {
                text: 'Categories',
              },
            },
            yAxis: [
              {
                title: {
                  text: 'Frequency',
                },
              },
              {
                title: {
                  text: 'Cumulative Percentage',
                },
                min: 0,
                max: 100,
                labels: {
                  format: '{value}%',
                },
                opposite: true,
              },
            ],
            plotOptions: {
              column: {
                dataLabels: {
                  enabled: true,
                },
              },
            },
            series: [
              {
                type: 'column',
                name: 'Frequency',
                data: [5, 10, 15, 20, 25],
              },
              {
                type: 'line',
                name: 'Cumulative',
                yAxis: 1,
                data: [5, 15, 30, 50, 75],
                marker: {
                  enabled: true,
                },
              },
            ],
          };
        }
        case 'pyramid3d': {
          return {
            chart: {
              type: 'pyramid3d',
              height: '400px',
              options3d: {
                enabled: true,
                alpha: 10,
                beta: 0,
                depth: 50,
                viewDistance: 50,
              },
            },
            title: {
              text: '3D Pyramid Chart',
            },
            plotOptions: {
              pyramid3d: {
                dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.y}',
                },
              },
            },
            series: [
              {
                type: 'pyramid3d',
                name: 'Values',
                data: [
                  ['A', 100],
                  ['B', 80],
                  ['C', 60],
                  ['D', 40],
                  ['E', 20],
                ],
              },
            ],
          };
        }
        case 'scatter3d': {
          return {
            chart: {
              type: 'scatter3d',
              options3d: {
                enabled: true,
                alpha: 20,
                beta: 30,
                depth: 200,
                viewDistance: 10,
                frame: {
                  bottom: {
                    size: 1,
                    color: 'rgba(0,0,0,0.05)',
                  },
                },
              },
            },
            title: {
              text: 'a 3D Scatter Chart',
            },
            subtitle: {
              text: 'using x y z coordinates',
            },
            plotOptions: {
              scatter3d: {
                width: 10,
                height: 10,
                depth: 10,
              },
            },
            xAxis: {
              min: 0,
              max: 10,
              gridLineWidth: 1,
              title: {
                text: 'X Axis',
              },
              startOnTick: true,
              showLastLabel: true,
              crosshair: {
                enabled: true,
              },
              labels: {
                format: '{value}',
              },
            },
            yAxis: {
              min: 0,
              max: 10,
              title: {
                text: 'Y Axis',
              },
              startOnTick: true,
              showLastLabel: true,
              crosshair: {
                enabled: true,
              },
              labels: {
                format: '{value}',
              },
            },
            zAxis: {
              min: 0,
              max: 10,
              showFirstLabel: false,
              title: {
                text: 'Z Axis',
              },
              labels: {
                format: '{value}',
              },
              startOnTick: true,
              showLastLabel: true,
              crosshair: {
                enabled: true,
              },
            },
            tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormat: 'X: {point.x}<br>Y: {point.y}<br>Z: {point.z}',
            },
            series: [
              {
                type: 'scatter3d',
                name: 'Values',
                data: [
                  // [X, Y, Z]
                  [1, 1, 1],
                  [1, 1, 2],
                  [1, 1, 5],
                  [2, 3, 2],
                  [2, 6, 4],
                  [4, 5, 7],
                  [4, 2, 8],
                  [7, 1, 3],
                  [7, 1, 5],
                  [8, 1, 5],
                ],
                marker: {
                  radius: 5,
                },
                tooltip: {
                  pointFormat: 'X: {point.x}<br>Y: {point.y}<br>Z: {point.z}',
                },
              },
            ],
          };
        }
        default: {
          // Create a completely clean configuration
          return {
            chart: {
              type: value,
              resetZoomButton: {
                theme: {
                  display: 'none',
                },
              },
            },
            title: {
              text: 'Sample Chart',
            },
            xAxis: {
              categories: ['0', '1', '2'],
              gridLineWidth: 0,
              minorGridLineWidth: 0,
            },
            yAxis: {
              title: {
                text: 'Values',
              },
              min: null,
              max: null,
              gridLineWidth: 0,
              minorGridLineWidth: 0,
              plotBands: undefined,
              plotLines: undefined,
              minorTickLength: 0,
              tickLength: 0,
            },
            plotOptions: {
              series: {
                color: '#7cb5ec',
                animation: true,
              },
            },
            pane: undefined,
            series: [
              {
                type: value,
                name: 'Sample Chart',
                data: [5, 10, 95],
              },
            ],
            tooltip: {
              enabled: true,
              shared: true,
            },
            legend: {
              enabled: true,
            },
            credits: {
              enabled: false,
            },
          };
        }
      }
    })();

    setChartOptions(chartOptions as Options);
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
