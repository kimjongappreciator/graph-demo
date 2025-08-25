import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "./ui/theme-toggle";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { usePLotStore } from "@/store/plot-store";
import { useState } from "react";

export function AppSidebar() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const store = usePLotStore();
  return (
    <Sidebar>
      <SidebarHeader />
      <div className="flex justify-center">
        <ThemeToggle />
      </div>
      <SidebarContent className="mt-[35vh]">
        <SidebarGroup>
          <Input
            placeholder="x^2"
            type="text"
            id="inputValue"
            value={inputValue}
            onChange={handleChange}
          ></Input>
          <Button
            className="mt-[10px]"
            onClick={() => store.setEquation(inputValue)}
          >
            Graph
          </Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
