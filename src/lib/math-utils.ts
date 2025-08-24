import { compile } from "mathjs";
import type { CoordsType } from "@/types/coordinates";

export function getResults(input: string) {
  const coords: CoordsType = { x: [], y: [] };

  try {
    const expr = compile(input);
    
    for (let i = -10; i <= 10; i += 0.1) {
      coords.x.push(parseFloat(i.toFixed(1)));

      try {
        const result = expr.evaluate({ x: i });        
        coords.y.push(
          typeof result === "number" && isFinite(result) ? result : null
        );
      } catch (error) {
        console.log(error);        
        coords.y.push(null);
      }
    }

    console.log("X values:", coords.x.slice(0, 10)); // Solo mostrar primeros 10
    console.log("Y values:", coords.y.slice(0, 10));

    return coords;
  } catch (error) {
    console.error("Error compiling expression:", error);
    return { x: [], y: [] } as CoordsType;
  }
}
