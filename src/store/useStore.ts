import { create } from 'zustand';
import { Theme, TabId, Module } from '../types';

interface Store {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isFiltersOpen: boolean;
  toggleFilters: () => void;
  currentModule: Module;
  setCurrentModule: (module: Module) => void;
  currentTab: TabId;
  setCurrentTab: (tab: TabId) => void;
}

export const useStore = create<Store>((set) => ({
  theme: 'dark',
  setTheme: (theme) => {
    set({ theme });
    document.documentElement.setAttribute('data-theme', theme);
  },
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  isFiltersOpen: true,
  toggleFilters: () => set((state) => ({ isFiltersOpen: !state.isFiltersOpen })),
  currentModule: 'admin-planning',
  setCurrentModule: (module) => set({ currentModule: module }),
  currentTab: 'parameters',
  setCurrentTab: (tab) => set({ currentTab: tab }),
}));