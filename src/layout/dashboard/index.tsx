import { AppSidebar } from "./app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "./header";
import { ChatDrawer } from "./chat-drawer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset className="break-all">
        <Header />
        <div className="flex flex-1 flex-col gap-4 min-w-0 px-4">
          {children}
        </div>
        <div className="absolute bottom-8 right-8">
          <ChatDrawer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
