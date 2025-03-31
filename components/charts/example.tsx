'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Chart from './chart';
import type { Example as ExampleType } from '@/lib/charts/examples/example';
import { examples, getExampleBySlug } from '@/lib/charts/examples';

const Example = () => {
  const [example, setExample] = useState<ExampleType>(examples[0]);

  const handleExampleChange = (value: string) => {
    const example = getExampleBySlug(value);
    if (example) {
      setExample(example);
    }
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden">
      <Card className="p-4shrink-0 p-4">
        <h2 className="text-xl font-bold mb-4">Examples</h2>

        <div className="space-y-4">
          <div>
            <Label htmlFor="chartType">Example</Label>
            <Select
              onValueChange={handleExampleChange}
              defaultValue={example.slug}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select example" />
              </SelectTrigger>
              <SelectContent>
                {examples.map((example) => (
                  <SelectItem key={example.slug} value={example.slug}>
                    {example.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <Card className="p-4 flex-1 min-w-0">
        <div className="w-full h-full">
          <Chart options={example.options} />
        </div>
      </Card>
    </div>
  );
};

export default Example;
