import React, { useState } from 'react';
import { useStore } from './store/useStore';
import DashboardOverview from './components/DashboardOverview';
import Transactions from './components/Transactions';
import { LayoutDashboard, Receipt, ShieldCheck, Sun, Moon } from 'lucide-react';

function App() {
  const { role, setRole, theme, toggleTheme } = useStore();
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">Z</span>
          </div>
          <h1 className="text-xl font-bold dark:text-white tracking-tight">Zorvyn<span className="text-blue-600">Dash</span></h1>
        </div>
        
        <nav className="p-4 flex-1 space-y-2 flex flex-row md:flex-col overflow-x-auto md:overflow-visible">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'}`}
          >
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('transactions')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'transactions' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'}`}
          >
            <Receipt className="w-5 h-5" /> Transactions
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full">
        {/* Top Header */}
        <header className="h-16 px-8 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-xl font-semibold dark:text-white capitalize">{activeTab}</h2>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Role Simulator */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-900 p-1 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-gray-500 ml-2" />
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="bg-transparent border-none text-sm font-medium text-gray-700 dark:text-gray-300 focus:ring-0 cursor-pointer outline-none"
              >
                <option value="viewer">Viewer Role</option>
                <option value="admin">Admin Role</option>
              </select>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 overflow-y-auto h-[calc(100vh-4rem)]">
          {activeTab === 'dashboard' ? <DashboardOverview /> : <Transactions />}
        </div>
      </main>
    </div>
  );
}

export default App;