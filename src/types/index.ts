export type Theme = 'light' | 'dark';

export type Module = 'sourcing-app' | 'as-management' | 'admin-planning' | 'smart-buy';

export type TabId = 'orders' | 'parameters' | 'projection' | 'registration' | 'approvals';

export interface Product {
  id: string;
  programOPAG: string;
  program: string;
  opag: string;
  existsProjection: boolean;
  appCadastro: string;
  projectionSIA: string;
}

export interface Order {
  timestamp: string;
  vendorName: string;
  userIdPlanning: string;
  similarGroupName: string;
  optionId: string;
  operation: string;
  weekIdOriginal: string;
  week: string;
  quantityRec: number;
  quantityFinal: number;
  initialPrice: number;
  finalPrice: number;
}

export interface Parameter {
  id: string;
  title: string;
  program: string;
  similarGroupName: string;
  idealSalesProjection: string;
  flexBuyWeeks: string;
  displayLayer: string;
}

export interface FlexBuyStrategy {
  title: string;
  program: string;
  similarGroupName: string;
  idealSalesProjection: number;
  flexBuyWeeks: number;
  displayLayer: string;
}

export interface AutomaticApproval {
  groupName: string;
  purchaseWeek: string;
  operation: string;
  strategy: string;
  untilWeek: string;
}

export interface Store {
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