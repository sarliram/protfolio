import { create } from "zustand";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  render?: React.ReactNode;
};

interface BreadcrumbState {
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
  clearBreadcrumbs: () => void;
}

const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
  breadcrumbs: [],

  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => set({ breadcrumbs }),

  clearBreadcrumbs: () => set({ breadcrumbs: [] }),
}));

export default useBreadcrumbStore;
