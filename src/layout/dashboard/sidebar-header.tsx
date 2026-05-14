"use client";

import { useCallback } from "react";
import { GalleryVerticalEnd, X, PanelLeft } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export function Header() {
  const { isMobile, open, setOpen, setOpenMobile } = useSidebar();

  const handleToggleSidebar = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const handleCloseMobile = useCallback(() => {
    setOpenMobile(false);
  }, [setOpenMobile]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center justify-between">
          <Button
            onClick={handleToggleSidebar}
            className={!open ? "cursor-pointer" : undefined}
            aria-label="Open sidebar"
            size={"icon"}
            variant={"ghost"}
          >
            <GalleryVerticalEnd />
          </Button>

          {isMobile ? (
            <Button
              onClick={handleCloseMobile}
              aria-label="Close sidebar"
              size={"icon"}
              variant={"ghost"}
            >
              <X />
            </Button>
          ) : (
            open && (
              <Button
                size={"icon"}
                variant={"ghost"}
                onClick={handleToggleSidebar}
              >
                <PanelLeft />
              </Button>
            )
          )}
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
