import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <SidebarTrigger className="mr-4" />
        
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">DD</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            DevDeck
          </h1>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}