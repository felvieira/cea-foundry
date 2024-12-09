import React from 'react';
import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';
import { AdminFilters } from '@/components/filters/AdminFilters';
import { AsFilters } from '@/components/filters/AsFilters';
import { ThemeSwitcher } from './components/ThemeSwitcher';

// Features imports
import { OrdersView } from '@/pages/admin-planning/features/orders/views/OrdersView';
import { ParametersView } from '@/pages/admin-planning/features/parameters/views/ParametersView';
import { ProjectionChangeView } from '@/pages/admin-planning/features/projection/views/ProjectionChangeView';
import { ProductRegistrationView } from '@/pages/admin-planning/features/registration/views/ProductRegistrationView';
import { AutomaticApprovalView } from '@/pages/admin-planning/features/approvals/views/AutomaticApprovalView';
import { AsManagementView } from '@/pages/as-management/features/management/views/AsManagementView';
import { SourcingAppView } from '@/pages/sourcing/features/app/SourcingAppView';

import { useStore } from '@/hooks/useStore';
import { cn } from '@/lib/utils';

const filterCategories = [
  {
    title: 'DEPARTMENTO',
    items: [
      { name: 'BELEZA', count: 494 },
      { name: 'CALCADOS ELA', count: 39 },
      { name: 'CALCADOS KIDS', count: 39 },
      { name: 'UNDERWEAR', count: 34 },
      { name: 'JEANS ELA', count: 32 }
    ]
  },
  {
    title: 'COMMODITY',
    items: [
      { name: 'MAKE E UNHAS', count: 207 },
      { name: 'FRAGRANCIAS PRES...', count: 154 },
      { name: 'TOP MALHA', count: 107 },
      { name: 'FRAGRANCIAS MASSIVO', count: 89 },
      { name: 'TENIS', count: 65 }
    ]
  },
  {
    title: 'PROGRAMA',
    items: [
      { name: 'AB - GOLDEN SECRET', count: 1 },
      { name: 'AB - HER GOLDEN SEC...', count: 1 },
      { name: 'AB - HER SECRET DESIRE', count: 1 },
      { name: 'AB - HER SECRET TEM...', count: 1 },
      { name: 'AB - KING OF SEDUCTI...', count: 1 }
    ]
  }
];

function App() {
  const currentModule = useStore((state) => state.currentModule);
  const currentTab = useStore((state) => state.currentTab);
  const isFiltersOpen = useStore((state) => state.isFiltersOpen);
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);

  const renderView = () => {
    switch (currentModule) {
      case 'sourcing-app':
        return <SourcingAppView />;
      case 'as-management':
        return <AsManagementView />;
      case 'admin-planning':
        switch (currentTab) {
          case 'orders':
            return <OrdersView />;
          case 'parameters':
            return <ParametersView />;
          case 'projection':
            return <ProjectionChangeView />;
          case 'registration':
            return <ProductRegistrationView />;
          case 'approvals':
            return <AutomaticApprovalView />;
          default:
            return <ParametersView />;
        }
      default:
        return <AsManagementView />;
    }
  };

  return (
    <Layout>
      <ThemeSwitcher />
      <div className="flex h-full">
        {currentModule === 'as-management' ? (
          <AsFilters categories={filterCategories} />
        ) : (
          <AdminFilters />
        )}
        <div className={cn(
          "flex-1 p-6 transition-all duration-300",
          isFiltersOpen ? "ml-64" : "ml-0"
        )}>
          {currentModule === 'admin-planning' && <Navigation />}
          {renderView()}
        </div>
      </div>
    </Layout>
  );
}

export default App;