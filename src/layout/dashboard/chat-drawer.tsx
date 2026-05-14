import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { MessageCircle } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { MainComponent } from "~/feature/chat/component";

export function ChatDrawer() {
  const { isMobile } = useSidebar();
  return (
    <Drawer direction={isMobile ? "bottom" : "right"}>
      {/* <DrawerTrigger asChild>
        <Button size={"icon-lg"} variant={"outline"} className="rounded-full">
          <MessageCircle />
        </Button>
      </DrawerTrigger>
      <MainComponent /> */}
    </Drawer>
  );
}
