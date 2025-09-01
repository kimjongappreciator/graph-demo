import { compile } from "mathjs";
import type { CoordsType } from "@/types/coordinates";

export function getResults(input: string) {
  const coords: CoordsType = { x: [], y: [] };
  try {
    const expr = compile(input);
    const start = -50;
    const end = 50;
    const step = 0.01;
    const numPoints = Math.floor((end - start) / step) + 1;
    coords.x = new Array(numPoints);
    coords.y = new Array(numPoints);

    let prevY: number | null = null;
    const jumpThreshold = 100;
    let index = 0;

    for (let i = start; i <= end; i += step) {
      const xVal = i;
      coords.x[index] = xVal;

      try {
        const result = expr.evaluate({ x: i });
        if (typeof result === "number" && isFinite(result)) {
          if (prevY !== null && Math.abs(result - prevY) > jumpThreshold) {
            coords.y[index] = null;
          } else {
            coords.y[index] = result;
          }
          prevY = result;
        } else {
          coords.y[index] = null;
          prevY = null;
        }
      } catch (error) {        
        coords.y[index] = null;
        prevY = null;
      }
      index++;
    }

    return coords;
  } catch (error) {
    console.error("Error compiling expression:", error);
    return { x: [], y: [] } as CoordsType;
  }
}
