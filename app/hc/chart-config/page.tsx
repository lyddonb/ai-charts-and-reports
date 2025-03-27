'use client';

import { useState } from 'react';
import Highcharts from 'highcharts';
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

const ChartConfig = () => {
  const [chartOptions, setChartOptions] = useState({
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
  });

  const handleTitleChange = (value: string) => {
    setChartOptions((prev) => ({
      ...prev,
      title: { ...prev.title, text: value },
    }));
  };

  const handleChartTypeChange = (value: string) => {
    setChartOptions((prev) => ({
      ...prev,
      series: [{ ...prev.series[0], type: value }],
    }));
  };

  const handleSampleData = () => {
    setChartOptions((prev) => ({
      ...prev,
      series: [
        {
          ...prev.series[0],
          data: [5, 10, 95],
        },
      ],
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
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
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-1 p-4">
          <h2 className="text-xl font-bold mb-4">Properties</h2>

          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title Text</Label>
              <Input
                id="title"
                value={chartOptions.title.text}
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

        <Card className="md:col-span-2 p-4">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </Card>
      </div>
    </div>
  );
};

export default ChartConfig;
