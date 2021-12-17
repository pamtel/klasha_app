import React from "react"
import { Chart } from "react-charts";
import useDemoConfig from "./useDemoConfig";


const Charts = () => {
  const { data, randomizeData } = useDemoConfig({
    series: 3,
  });

  const series = React.useMemo(
    () => ({
      showPoints: false,
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "time",
        position: "bottom",
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <>
      <div style={{ height: '230px', width: '100%' }}>
        <Chart data={data} series={series} axes={axes} tooltip />
      </div>
    </>
  );
}

export default Charts
