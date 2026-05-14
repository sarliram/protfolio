import {
  LayoutDashboard,
  FileSpreadsheet,
  ClipboardPlus,
  Settings2,
} from "lucide-react";

export const useMenu = () => {
  return {
    data: {
      navMain: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Projects",
          url: "/dashboard/projects",
          icon: FileSpreadsheet,
        },
        {
          title: "Education",
          url: "/dashboard/education",
          icon: ClipboardPlus,
        },
        {
          title: "Experience",
          url: "/dashboard/experience",
          icon: ClipboardPlus,
        },
        {
          title: "Testimonials",
          url: "/dashboard/testimonials",
          icon: Settings2,
        },
      ],
    },
  };
};
