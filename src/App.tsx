import React from 'react';
import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';
import { Filters } from './components/Filters';
import { AsFilters } from './components/AsFilters';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { ApprovalsView } from './views/ApprovalsView';
import { ParametersView } from './views/ParametersView';
import { ProductRegistrationView } from './views/ProductRegistrationView';
import { OrdersView } from './views/OrdersView';
import { ProjectionChangeView } from './views/ProjectionChangeView';
import { AutomaticApprovalView } from './views/AutomaticApprovalView';
import { SourcingAppView } from './views/SourcingAppView';
import { AsManagementView } from './views/AsManagementView';
import { useStore } from './store/useStore';

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
            return <ProductRegistrationView />;
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
          <Filters />
        )}
        <div 
          className={`flex-1 transition-all duration-300 p-6`}
          style={{
            marginLeft: `${isFiltersOpen ? (isSidebarOpen ? '32rem' : '20rem') : (isSidebarOpen ? '16rem' : '4rem')}`
          }}
        >
          {currentModule === 'admin-planning' && <Navigation />}
          {renderView()}
        </div>
      </div>
    </Layout>
  );
}

export default App;