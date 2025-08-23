import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <div className="flex min-h-svh flex-col items-center justify-center">
        <p>home works</p>
        <Button onClick={() => setCount((count) => count + 1)}>
          Click me: {count}
        </Button>
      </div>
    </>
  );
}
