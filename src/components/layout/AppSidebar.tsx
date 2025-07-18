import { 
  LayoutDashboard, 
  PlusCircle, 
  BookOpen, 
  TrendingUp, 
  Settings,
  Code2
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "New Entry", url: "/new-entry", icon: PlusCircle },
  { title: "Journal", url: "/journal", icon: BookOpen },
  { title: "Progress", url: "/progress", icon: TrendingUp },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const getNavCls = (path: string) => 
    isActive(path) 
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant font-medium" 
      : "hover:bg-accent hover:text-accent-foreground transition-smooth";

  return (
    <Sidebar 
      className={isCollapsed ? "w-16" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="text-lg font-bold text-sidebar-foreground">DevDeck</h2>
                <p className="text-xs text-sidebar-foreground/60">Developer Journal</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink to={item.url} className={getNavCls(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}