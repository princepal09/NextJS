import React from "react";

export default function ChartLayout({
  children,
  lineChart,
  barChart,
  heatMap,
}: Readonly<{
  children: React.ReactNode;
  lineChart: React.ReactNode;
  barChart: React.ReactNode;
  heatMap: React.ReactNode;
}>): React.ReactElement {
  return (  
    <div>
      {children}

      <div>
        <div>{lineChart}</div>

        <div>{barChart}</div>

        <div>{heatMap}</div>
      </div>
    </div>
  );
}
