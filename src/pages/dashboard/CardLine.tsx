"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
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

const chartData = [
  { date: "2024-07-01", com_comorbidade: 245, sem_comorbidade: 138 },
  { date: "2024-07-02", com_comorbidade: 193, sem_comorbidade: 87 },
  { date: "2024-07-03", com_comorbidade: 289, sem_comorbidade: 151 },
  { date: "2024-07-04", com_comorbidade: 165, sem_comorbidade: 114 },
  { date: "2024-07-05", com_comorbidade: 218, sem_comorbidade: 92 },
  { date: "2024-07-06", com_comorbidade: 170, sem_comorbidade: 101 },
  { date: "2024-07-07", com_comorbidade: 200, sem_comorbidade: 137 },
  { date: "2024-07-08", com_comorbidade: 257, sem_comorbidade: 96 },
  { date: "2024-07-09", com_comorbidade: 186, sem_comorbidade: 125 },
  { date: "2024-07-10", com_comorbidade: 143, sem_comorbidade: 178 },
  { date: "2024-07-11", com_comorbidade: 191, sem_comorbidade: 119 },
  { date: "2024-07-12", com_comorbidade: 278, sem_comorbidade: 97 },
  { date: "2024-07-13", com_comorbidade: 249, sem_comorbidade: 103 },
  { date: "2024-07-14", com_comorbidade: 152, sem_comorbidade: 165 },
  { date: "2024-07-15", com_comorbidade: 275, sem_comorbidade: 85 },
  { date: "2024-07-16", com_comorbidade: 219, sem_comorbidade: 98 },
  { date: "2024-07-17", com_comorbidade: 162, sem_comorbidade: 136 },
  { date: "2024-07-18", com_comorbidade: 174, sem_comorbidade: 120 },
  { date: "2024-07-19", com_comorbidade: 204, sem_comorbidade: 99 },
  { date: "2024-07-20", com_comorbidade: 187, sem_comorbidade: 145 },
  { date: "2024-07-21", com_comorbidade: 158, sem_comorbidade: 177 },
  { date: "2024-07-22", com_comorbidade: 165, sem_comorbidade: 150 },
  { date: "2024-07-23", com_comorbidade: 180, sem_comorbidade: 139 },
  { date: "2024-07-24", com_comorbidade: 230, sem_comorbidade: 108 },
  { date: "2024-07-25", com_comorbidade: 195, sem_comorbidade: 122 },
  { date: "2024-07-26", com_comorbidade: 144, sem_comorbidade: 113 },
  { date: "2024-07-27", com_comorbidade: 190, sem_comorbidade: 97 },
  { date: "2024-07-28", com_comorbidade: 225, sem_comorbidade: 105 },
  { date: "2024-07-29", com_comorbidade: 241, sem_comorbidade: 132 },
  { date: "2024-07-30", com_comorbidade: 175, sem_comorbidade: 110 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  com_comorbidade: {
    label: "Com comorbidade",
    color: "#0552aa",
  },
  sem_comorbidade: {
    label: "Sem comorbidade",
    color: "#d81ab8",
  },
} satisfies ChartConfig;

export default function CardLine({ title, subtitle, data=chartData }) {
  const [timeRange, setTimeRange] = React.useState("30d");

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
        <Select value={timeRange} onValueChange={setTimeRange}>
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
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient
                id="fillComComorbidade"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-com_comorbidade)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-com_comorbidade)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="fillSemComorbidade"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-sem_comorbidade)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sem_comorbidade)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                date.setDate(date.getDate() + 1);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    const date = new Date(value);
                    date.setDate(date.getDate() + 1);
                    return date.toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="com_comorbidade"
              type="natural"
              fill="url(#fillComComorbidade)"
              stroke="var(--color-com_comorbidade)"
              stackId="a"
            />
            <Area
              dataKey="sem_comorbidade"
              type="natural"
              fill="url(#fillSemComorbidade)"
              stroke="var(--color-sem_comorbidade)"
              stackId="b"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
