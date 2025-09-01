import { compile } from "mathjs";
import type { CoordsType } from "@/types/coordinates";

export function getResults(input: string) {
  const coords: CoordsType = { x: [], y: [] };

  try {
    const expr = compile(input);

    let prevY: number | null = null;
    const jumpThreshold = 100; 

    for (let i = -30; i <= 30; i += 0.01) {
      const xVal = parseFloat(i.toFixed(2));
      coords.x.push(xVal);

      try {
        const result = expr.evaluate({ x: i });

        if (typeof result === "number" && isFinite(result)) {          
          if (
            prevY !== null &&
            Math.abs(result - prevY) > jumpThreshold
          ) {
            coords.y.push(null); 
          } else {
            coords.y.push(result);
          }
          prevY = result;
        } else {
          coords.y.push(null);
          prevY = null;
        }
      } catch (error) {
        console.log(error);
        coords.y.push(null);
        prevY = null;
      }
    }

    return coords;
  } catch (error) {
    console.error("Error compiling expression:", error);
    return { x: [], y: [] } as CoordsType;
  }
}
