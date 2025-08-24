import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Home } from "./components/home";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex h-screen">          
          <AppSidebar />
          
          <div className="flex flex-1 flex-col min-w-0">
            <header className="flex items-center justify-between p-5 flex-shrink-0">
              <SidebarTrigger />
            </header>
            <main className="flex-1 p-4 min-w-0 min-h-0 w-[85vw]">
              <Home />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
