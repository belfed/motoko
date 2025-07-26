import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import ThemeToggle from "./theme/theme-toggle";

const user = {
  avatar: "https://github.com/belfed.png",
  name: "belfed",
  email: "belfed@belfed.dev",
};

export default async function UserItem() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{user.name}</span>
            <span className="truncate text-xs">{user.email}</span>
          </div>
          <ThemeToggle />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
