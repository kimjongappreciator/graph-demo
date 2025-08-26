import { getResults } from "@/lib/math-utils";
import { usePLotStore } from "@/store/plot-store";
import type { CoordsType } from "@/types/coordinates";
import { useMemo } from "react";
import Plot from "react-plotly.js";


function calcGrapgh(equation: string): CoordsType {
  const result = getResults(equation);
  return result;
}

export function Home() {

  const equation = usePLotStore((state) => state.equation);  

  const graphData = useMemo(() => {
    return calcGrapgh(equation);
  }, [equation]);

  const plotData = useMemo(
    () => [
      {
        x: graphData.x,
        y: graphData.y,
        type: "scatter" as const,
        mode: "lines+markers" as const,
        marker: { color: "green" },
        name: "equation",
        connectgaps: false
      },
    ],
    [graphData]
  );

  return (
    <>
      <div className="flex flex-1 w-full h-full">
        <Plot
          data={plotData}
          layout={{
            autosize: true,
            margin: { l: 40, r: 40, t: 40, b: 40 },
            xaxis: {
              zeroline: true,
              zerolinecolor: "black",
              zerolinewidth: 2,
              showgrid: true,
              gridcolor: "lightgray",
            },
            yaxis: {
              zeroline: true,
              zerolinecolor: "black",
              zerolinewidth: 2,
              showgrid: true,
              gridcolor: "lightgray",
            },
            plot_bgcolor: 'white',
            paper_bgcolor: 'white',
            showlegend: false
          }}
          style={{ width: "100%", height: "100%" }}
          useResizeHandler={true}
          config={{ responsive: true }}
        />
      </div>
    </>
  );
}
