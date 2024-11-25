"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "./Card";
import { useState } from "react";

const chartData = [
  { date: "2024-04-01", matriculas: 222, rematriculas: 222 },
  { date: "2024-04-02", matriculas: 97, rematriculas: 97 },
  { date: "2024-04-03", matriculas: 167, rematriculas: 167 },
  { date: "2024-04-04", matriculas: 242, rematriculas: 242 },
  { date: "2024-04-05", matriculas: 373, rematriculas: 373 },
  { date: "2024-04-06", matriculas: 301, rematriculas: 301 },
  { date: "2024-04-07", matriculas: 245, rematriculas: 245 },
  { date: "2024-04-08", matriculas: 409, rematriculas: 409 },
  { date: "2024-04-09", matriculas: 59, rematriculas: 59 },
  { date: "2024-04-10", matriculas: 261, rematriculas: 261 },
  { date: "2024-04-11", matriculas: 327, rematriculas: 327 },
  { date: "2024-04-12", matriculas: 292, rematriculas: 292 },
  { date: "2024-04-13", matriculas: 342, rematriculas: 342 },
  { date: "2024-04-14", matriculas: 137, rematriculas: 137 },
  { date: "2024-04-15", matriculas: 120, rematriculas: 120 },
  { date: "2024-04-16", matriculas: 138, rematriculas: 138 },
  { date: "2024-04-17", matriculas: 446, rematriculas: 446 },
  { date: "2024-04-18", matriculas: 364, rematriculas: 364 },
  { date: "2024-04-19", matriculas: 243, rematriculas: 243 },
  { date: "2024-04-20", matriculas: 89, rematriculas: 89 },
  { date: "2024-04-21", matriculas: 137, rematriculas: 137 },
  { date: "2024-04-22", matriculas: 224, rematriculas: 224 },
  { date: "2024-04-23", matriculas: 138, rematriculas: 138 },
  { date: "2024-04-24", matriculas: 387, rematriculas: 387 },
  { date: "2024-04-25", matriculas: 215, rematriculas: 215 },
  { date: "2024-04-26", matriculas: 75, rematriculas: 75 },
  { date: "2024-04-27", matriculas: 383, rematriculas: 383 },
  { date: "2024-04-28", matriculas: 122, rematriculas: 122 },
  { date: "2024-04-29", matriculas: 315, rematriculas: 315 },
  { date: "2024-04-30", matriculas: 454, rematriculas: 454 },
  { date: "2024-05-01", matriculas: 165, rematriculas: 165 },
];

const chartConfig = {
  matriculas: {
    label: "Matrículas",
    color: "#2563eb",
  },
  rematriculas: {
    label: "Rematrículas",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

interface CardProps {
  title?: string;
  subtitle?: string;
  config?: ChartConfig;
  data?: Object[];
}

export default function CardStackedBar({
  config = chartConfig,
  data = chartData,
  title,
  subtitle,
}: CardProps) {

  const [timeRange, setTimeRange] = useState("30d");

  const filteredData = data.filter((item) => {
    const date = new Date(item.date);

    const lastDate = new Date(data[data.length - 1].date);
    const referenceDate = new Date(lastDate);
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </div>
        <Select
          value={timeRange}
          onValueChange={setTimeRange}
        >
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="30d" className="rounded-lg">
              Últimos 30 dias
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Últimos 7 dias
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={config}
          className="aspect-auto h-[250px] w-[100%]"
        >
          <BarChart
            accessibilityLayer
            data={filteredData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              minTickGap={24}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-br", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="date"
                  labelFormatter={(value) => {
                    const date = new Date(value);
                    date.setDate(date.getDate() + 1);
                    return date.toLocaleDateString("pt-br", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar
              dataKey="matriculas"
              stackId="a"
              fill={`var(--color-matriculas)`}
              radius={4}
            />
            <Bar
              dataKey="rematriculas"
              stackId="a"
              fill={`var(--color-rematriculas)`}
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
