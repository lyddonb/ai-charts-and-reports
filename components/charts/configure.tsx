'use client';

import { useState, useEffect } from 'react';
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
import seriesTypes from '../../lib/charts/series';
import Chart from './chart';
import {
  getGaugeOptions,
  getCylinderOptions,
  getParetoOptions,
  getPyramid3DOptions,
  getScatter3DOptions,
  getDefaultOptions,
  getPieOptions,
  getAreaOptions,
  getBarOptions,
  getLineOptions,
  getArcDiagramOptions,
  getBellCurveOptions,
  getBubbleOptions,
  getBulletOptions,
  getColumnPyramidOptions,
  getColumnRangeOptions,
  getDependencyWheelOptions,
  getDumbbellOptions,
  getFunnel3DOptions,
  getHeatmapOptions,
  getHistogramOptions,
  getLollipopOptions,
  getMapOptions,
  getMapBubbleOptions,
  getMapLineOptions,
  getMapPointOptions,
  getNetworkGraphOptions,
  getOrganizationOptions,
  getPackedBubbleOptions,
  getParallelCoordinatesOptions,
  getPolygonOptions,
  getPyramidOptions,
  getSankeyOptions,
  getScatterOptions,
  getSolidGaugeOptions,
  getSplineOptions,
  getStreamGraphOptions,
  getSunburstOptions,
  getTimelineOptions,
  getTreemapOptions,
  getVariablePieOptions,
  getVennOptions,
  getWordCloudOptions,
  getAreaRangeOptions,
  getAreaSplineOptions,
  getVariwideOptions,
  getVectorOptions,
  getWindbarbOptions,
  getXRangeOptions,
} from '../../lib/charts/options';

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

const chartOptionsMap: Record<ChartType, () => Options> = {
  gauge: getGaugeOptions,
  cylinder: getCylinderOptions,
  pareto: getParetoOptions,
  pyramid3d: getPyramid3DOptions,
  scatter3d: getScatter3DOptions,
  pie: getPieOptions,
  area: getAreaOptions,
  arearange: getAreaRangeOptions,
  areaspline: getAreaSplineOptions,
  areasplinerange: () => getDefaultOptions('areasplinerange'),
  bar: getBarOptions,
  line: getLineOptions,
  arcdiagram: getArcDiagramOptions,
  bellcurve: getBellCurveOptions,
  boxplot: () => getDefaultOptions('boxplot'),
  bubble: getBubbleOptions,
  bullet: getBulletOptions,
  column: () => getDefaultOptions('column'),
  columnpyramid: getColumnPyramidOptions,
  columnrange: getColumnRangeOptions,
  dependencywheel: getDependencyWheelOptions,
  dumbbell: getDumbbellOptions,
  errorbar: () => getDefaultOptions('errorbar'),
  funnel: () => getDefaultOptions('funnel'),
  funnel3d: getFunnel3DOptions,
  heatmap: getHeatmapOptions,
  histogram: getHistogramOptions,
  lollipop: getLollipopOptions,
  map: getMapOptions,
  mapbubble: getMapBubbleOptions,
  mapline: getMapLineOptions,
  mappoint: getMapPointOptions,
  networkgraph: getNetworkGraphOptions,
  organization: getOrganizationOptions,
  packedbubble: getPackedBubbleOptions,
  parallelcoordinates: getParallelCoordinatesOptions,
  polygon: getPolygonOptions,
  pyramid: getPyramidOptions,
  sankey: getSankeyOptions,
  scatter: getScatterOptions,
  solidgauge: getSolidGaugeOptions,
  spline: getSplineOptions,
  streamgraph: getStreamGraphOptions,
  sunburst: getSunburstOptions,
  timeline: getTimelineOptions,
  treegraph: () => getDefaultOptions('treegraph'),
  treemap: getTreemapOptions,
  variablepie: getVariablePieOptions,
  variwide: getVariwideOptions,
  vector: getVectorOptions,
  venn: getVennOptions,
  windbarb: getWindbarbOptions,
  wordcloud: getWordCloudOptions,
  xrange: getXRangeOptions,
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
    const baseOptions: Options = {
      chart: undefined,
      title: undefined,
      subtitle: undefined,
      series: undefined,
      tooltip: {
        enabled: false,
      },
      plotOptions: undefined,
      credits: undefined,
      yAxis: {
        visible: false,
        crosshair: false,
        labels: { enabled: false },
        title: { text: '' },
        lineWidth: 0,
        tickWidth: 0,
      },
      xAxis: {
        visible: false,
        crosshair: false,
        labels: { enabled: false },
        title: { text: '' },
        lineWidth: 0,
        tickWidth: 0,
      },
    };
    // Get the new options
    const newOptions = chartOptionsMap[value]();

    // Create a clean options object with only the necessary properties
    const cleanOptions: Options = {
      ...baseOptions,
      ...newOptions,
      chart: {
        type: value,
        height: '400px',
        backgroundColor: 'white',
      },
    };

    setChartOptions(cleanOptions);
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
