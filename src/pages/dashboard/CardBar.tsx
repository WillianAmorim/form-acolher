"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import Card from "./Card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartData {
  name: string;
  value: number;
}

interface CardProps {
  title?: string;
  subtitle?: string;
  data?: ChartData[];
  config?: ChartConfig;
  universe: number;
}

const chartData = [
  { name: "Autismo", value: 130 },
  { name: "Epilepsia", value: 34 },
  { name: "Alergia", value: 43 },
  { name: "Deficência Intelectual", value: 12 },
  { name: "Sem Comorbidade", value: 89 },
];

const chartConfig = {
  value: {
    label: "Alunos",
    color: "#57a3fa",
  },
} satisfies ChartConfig;

function toPercentual(value: number) {
  return Math.round(value * 100);
}

export default function CardBar({ title, subtitle, data = chartData, config = chartConfig, universe }: CardProps) {

  return (
    <Card
      title={title}
      subtitle={subtitle}
      width={440}
    >
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={data}
          layout="vertical"
          margin={{
            left: 40,
          }}
        >
          <XAxis type="number" dataKey="value" hide />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="value" fill="var(--color-value)" radius={5} />
        </BarChart>
      </ChartContainer>
      <hr className="my-4" />
      <ul>
        {data.map((item) => {
          return (
            <li 
              key={item.name}
              className="flex items-center gap-2 mt-1 ml-4"
            >
              <div
                className="w-2 h-2"
                style={{ backgroundColor: config.value.color }}
              ></div>
              <p className="text-sm">{item.name}: {`${toPercentual(item.value/universe)}%`}</p>
            </li>
          )
        })}
      </ul>
    </Card>
  );
}
