import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "./ui/theme-toggle"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <div className="flex justify-end">
      <ThemeToggle/>
      </div>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}