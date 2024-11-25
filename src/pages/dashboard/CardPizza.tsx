import React, { useEffect } from "react";
import { Label, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Card from "./Card";

const chartData = [
  {
    name: "Te Apoiar",
    value: 5,
    fill: "green"
  },
  {
    name: "Te Criticar",
    value: 95,
    fill: "red"
  }
];

interface ChartDataItem {
  name: string;
  value: number;
  fill: string;
}

interface CardPizzaProps {
  data?: ChartDataItem[];
  title?: string;
  subtitle?: string;
  item: string;
  universe: number;
  isLoaded: boolean; // Adicionamos a propriedade isLoaded
}

function toPercentual(value: number) {
  return Math.round(value * 100);
}

export default function CardPizza({ data = chartData, universe, title, subtitle, item, isLoaded }: CardPizzaProps) {

  return (
    <Card title={title} subtitle={subtitle} >
      <ResponsiveContainer className="min-h-44 w-full text-xs">
        {isLoaded ? (
          <PieChart>
            <Tooltip />
            <Pie 
              data={data} 
              nameKey="name" 
              dataKey="value" 
              cx="50%" 
              cy="50%" 
              outerRadius={72}
              innerRadius={44}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-[28px] font-bold"
                        >
                          {universe}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-muted-foreground"
                        >
                          {item}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        ) : (
          <div>Carregando gráfico...</div>
        )}
      </ResponsiveContainer>
      <hr/>
      <section>
        <ul className="mt-4">
          {data.map((item, index) => {
            return (
              <li key={index} className="flex gap-1 items-center text-sm sutitle">
                <div className="w-2 h-2" style={{ background: item.fill }}></div>
                <span>{item.name}: {`${toPercentual(item.value / universe)}%`}</span>
              </li>
            )
          })}
        </ul>
      </section>
    </Card>
  );
}
