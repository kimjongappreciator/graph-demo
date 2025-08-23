import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { ThemeToggle } from "./components/ui/theme-toggle";
import { Home } from "./components/home";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex h-screen">
          {/* Sidebar fijo/colapsable */}
          <AppSidebar />

          {/* Contenido principal */}
          <div className="flex flex-1 flex-col">
            <header className="flex items-center justify-between p-4 border-b">
              <SidebarTrigger /> {/* botón para abrir/cerrar */}
              <ThemeToggle /> {/* botón de tema */}
            </header>
            <main className="flex-1 p-4">
              <Home />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
