import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import EmptyState from './components/EmptyState';

function App() {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const renderContent = () => {
    if (currentSection === 'dashboard') {
      return <Dashboard />;
    }
    return <EmptyState section={currentSection} />;
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar onNavigate={setCurrentSection} currentSection={currentSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentSection={currentSection} />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
