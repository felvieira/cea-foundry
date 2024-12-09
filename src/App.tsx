import React from 'react';
import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';
import { AdminFilters } from '@/components/filters/AdminFilters';
import { ThemeSwitcher } from './components/ThemeSwitcher';

// Features imports
import { OrdersView } from '@/pages/admin-planning/features/orders/views/OrdersView';
import { ParametersView } from '@/pages/admin-planning/features/parameters/views/ParametersView';
import { ProjectionChangeView } from '@/pages/admin-planning/features/projection/views/ProjectionChangeView';
import { ProductRegistrationView } from '@/pages/admin-planning/features/registration/views/ProductRegistrationView';
import { AutomaticApprovalView } from '@/pages/admin-planning/features/approvals/views/AutomaticApprovalView';
import { SourcingAppView } from '@/pages/sourcing/features/app/SourcingAppView';
import { AppCadastroView } from '@/pages/as-management/features/app-cadastro/views/AppCadastroView';

import { useStore } from '@/hooks/useStore';
import { cn } from '@/lib/utils';




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
        return <AppCadastroView />;
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
        return <AppCadastroView />;
    }
  };

  return (
    <Layout>
      <ThemeSwitcher />
      <div className="flex h-full">
        <AdminFilters />
        <div className={cn(
          "flex-1 transition-all duration-300",
          isFiltersOpen ? "ml-80" : "ml-0"
        )}>
          {currentModule === 'admin-planning' && (
            <div className="border-b border-[var(--border)] mb-6">
              <Navigation />
            </div>
          )}
          <div className="p-6">
            {renderView()}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;