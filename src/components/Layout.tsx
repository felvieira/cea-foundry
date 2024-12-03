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
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#1a1f2b] text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Main Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full z-30 transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        } ${theme === 'dark' ? 'bg-[#0f1319]' : 'bg-white'} border-r border-gray-800`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <Menu className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
            {isSidebarOpen && <span className="text-sm font-medium">Menu</span>}
          </div>
        </div>
        
        <div className="flex flex-col py-4">
          {modules.map(({ id, label, icon: Icon }) => (
            <div
              key={id}
              onClick={() => setCurrentModule(id)}
              className={`flex items-center px-4 py-2 cursor-pointer ${
                currentModule === id 
                  ? 'bg-blue-600/20 text-blue-400' 
                  : 'hover:bg-gray-800'
              }`}
            >
              <Icon className="w-6 h-6" />
              {isSidebarOpen && <span className="ml-3 text-sm">{label}</span>}
            </div>
          ))}
          
          <div className="flex-grow" />
          
          <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 flex items-center">
            <Settings className="w-6 h-6" />
            {isSidebarOpen && <span className="ml-3 text-sm">Settings</span>}
          </div>
          <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 flex items-center">
            <HelpCircle className="w-6 h-6" />
            {isSidebarOpen && <span className="ml-3 text-sm">Help</span>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {children}
      </div>
    </div>
  );
};