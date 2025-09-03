import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Home } from "./components/home";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <SidebarInset>
        <div className="flex h-screen">
          <AppSidebar />
          <div className="flex flex-1 flex-col">            
            <header className="flex items-center justify-between p-5 flex-shrink-0">
              <SidebarTrigger />
            </header>

            {/* Asegúrate de que este div también use flex y flex-1 */}
            <main className="flex flex-1 p-4 w-[full] ">              
              <Home />
            </main>
          </div>
        </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
