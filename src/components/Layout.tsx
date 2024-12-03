import React from 'react';
import { Menu, LayoutGrid, ShoppingBag, Box, Settings, HelpCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Module } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useStore((state) => state.theme);
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const currentModule = useStore((state) => state.currentModule);
  const setCurrentModule = useStore((state) => state.setCurrentModule);

  const modules: { id: Module; label: string; icon: React.FC<any> }[] = [
    { id: 'admin-planning', label: 'Admin Planning', icon: LayoutGrid },
    { id: 'as-management', label: 'Gestão de AS', icon: ShoppingBag },
    { id: 'sourcing-app', label: 'Sourcing APP', icon: Box },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]" data-theme={theme}>
      {/* Top Navigation */}
      <div className="fixed top-0 right-0 left-0 h-14 bg-[var(--surface)] border-b border-[var(--border)] z-40 px-4">
        <div className="flex items-center h-full">
          <Menu 
            className="w-6 h-6 text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text)] transition-colors" 
            onClick={toggleSidebar}
          />
          <span className="ml-4 text-sm font-medium text-[var(--text)]">
            {modules.find(m => m.id === currentModule)?.label || 'Dashboard'}
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] z-30 transition-all duration-300 
                   ${isSidebarOpen ? 'w-64' : 'w-16'} bg-[var(--surface)] border-r border-[var(--border)]`}
      >
        <div className="flex flex-col p-3 space-y-1">
          {modules.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentModule(id)}
              className={`sidebar-item ${currentModule === id ? 'active' : ''}`}
            >
              <Icon className={`icon ${!isSidebarOpen ? 'mx-auto' : ''}`} />
              {isSidebarOpen && <span className="ml-3 text-sm">{label}</span>}
            </button>
          ))}
          
          <div className="flex-grow" />
          
          <button className="sidebar-item">
            <Settings className={`icon ${!isSidebarOpen ? 'mx-auto' : ''}`} />
            {isSidebarOpen && <span className="ml-3 text-sm">Settings</span>}
          </button>
          <button className="sidebar-item">
            <HelpCircle className={`icon ${!isSidebarOpen ? 'mx-auto' : ''}`} />
            {isSidebarOpen && <span className="ml-3 text-sm">Help</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`pt-14 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};