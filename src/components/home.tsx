import Plot from "react-plotly.js";

export function Home() {
  
  return (
    <>
      <div className="flex flex-1 w-full h-full">
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{
            autosize: true,            
            margin: { l: 40, r: 40, t: 40, b: 40 },
          }}
          style={{ width: "100%", height: "100%" }}
          useResizeHandler={true}
          config={{ responsive: true }}
        />
      </div>
    </>
  );
}
