'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
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

// Dynamically import Highcharts with SSR disabled
const HighchartsReact = dynamic(() => import('highcharts-react-official'), {
  ssr: false,
});

let HighchartsInstance: any;

if (typeof window !== 'undefined') {
  HighchartsInstance = require('highcharts');
}

type ChartType = 'bar' | 'line' | 'column' | 'pie';

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
  ] as Highcharts.SeriesOptionsType[],
  xAxis: {
    categories: ['0', '1', '2'],
  },
  yAxis: {
    title: {
      text: 'Values',
    },
  },
};

const Configure = () => {
  const [mounted, setMounted] = useState(false);
  const [chartOptions, setChartOptions] = useState<Options>(defaultOptions);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTitleChange = (value: string) => {
    setChartOptions((prev) => ({
      ...prev,
      title: { text: value },
    }));
  };

  const handleChartTypeChange = (value: ChartType) => {
    setChartOptions((prev) => ({
      ...prev,
      series: [
        {
          ...(prev.series?.[0] as Highcharts.SeriesOptionsType),
          type: value,
        },
      ] as Highcharts.SeriesOptionsType[],
    }));
  };

  const handleSampleData = () => {
    setChartOptions((prev) => ({
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
                  <SelectItem value="bar">Bar</SelectItem>
                  <SelectItem value="line">Line</SelectItem>
                  <SelectItem value="column">Column</SelectItem>
                  <SelectItem value="pie">Pie</SelectItem>
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
          {mounted && (
            <div className="w-full h-full">
              <HighchartsReact
                highcharts={HighchartsInstance}
                options={chartOptions}
              />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Configure;
