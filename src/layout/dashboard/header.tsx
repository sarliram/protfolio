import React from "react";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  const { pathname } = useLocation();
  const { isMobile } = useSidebar();
  const paths = pathname.split("/").slice(1);
  if (pathname === "/chat") return null;
  return (
    <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className={`-ml-1 ${!isMobile ? "hidden" : ""}`} />
        <Separator
          orientation="vertical"
          className={`mr-2 data-[orientation=vertical]:h-4 ${!isMobile ? "hidden" : ""}`}
        />
        <Breadcrumb>
          <BreadcrumbList>
            {paths.map((path, index) => {
              const hasNextPath = paths[index + 1] !== undefined;
              return (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {hasNextPath ? (
                        <BreadcrumbLink href={`/${paths[index]}`}>
                          {path.charAt(0).toUpperCase() + path.slice(1)}
                        </BreadcrumbLink>
                      ) : (
                        path.charAt(0).toUpperCase() + path.slice(1)
                      )}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  {hasNextPath && (
                    <BreadcrumbSeparator className="hidden md:block" />
                  )}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-4">
        <ModeToggle />
      </div>
    </header>
  );
};
