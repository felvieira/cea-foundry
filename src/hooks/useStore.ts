import { create } from 'zustand';
import type { Store, Theme, Module, TabId } from '@/types';

export const useStore = create<Store>((set) => {
  document.documentElement.setAttribute('data-theme', 'dark');
  
  return {
    theme: 'dark',
    setTheme: (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      set({ theme });
    },
    isSidebarOpen: true,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    isFiltersOpen: true,
    toggleFilters: () => set((state) => ({ isFiltersOpen: !state.isFiltersOpen })),
    currentModule: 'admin-planning',
    setCurrentModule: (module) => set({ currentModule: module }),
    currentTab: 'parameters',
    setCurrentTab: (tab) => set({ currentTab: tab }),
  };
});