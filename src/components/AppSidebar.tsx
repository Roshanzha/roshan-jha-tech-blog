
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Home, FileText, User, PenLine } from 'lucide-react';

// Blog topics/categories - you can expand this list
const blogTopics = [
  { title: "JavaScript", count: 5 },
  { title: "React", count: 8 },
  { title: "TypeScript", count: 3 },
  { title: "Node.js", count: 4 },
  { title: "Web Development", count: 12 },
  { title: "CSS", count: 6 },
  { title: "Performance", count: 3 },
  { title: "Best Practices", count: 7 },
];

const navigationItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "All Posts",
    url: "/",
    icon: FileText,
  },
  {
    title: "About",
    url: "/about",
    icon: User,
  },
  {
    title: "New Post",
    url: "/new-post",
    icon: PenLine,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg">Roshan Jha Blog</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Topics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {blogTopics.map((topic) => (
                <SidebarMenuItem key={topic.title}>
                  <SidebarMenuButton asChild>
                    <Link to={`/?topic=${topic.title.toLowerCase()}`}>
                      <span className="flex-1">{topic.title}</span>
                      <span className="text-xs bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded">
                        {topic.count}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">
          © 2024 Roshan Jha Blog
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
