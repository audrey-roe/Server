import React from 'react';
import './App.css';
import './Header.css';
import './RHSide.css';
import './MainContent.css';

// Import your components
import Header from './components/Header';
import LHSidebar from './components/LHSidebar';
import RHSidebar from './components/RHSidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <LHSidebar />
        <MainContent />
        <RHSidebar />
      </div>
    </div>
  );
}

export default App;
