import './App.css';

import SideDrawer from './SideDrawer';
import MainContent from './MainContent';

function App() {
  // Track selected tab, default to 2 (resume)
  
  return (
    <div className="app-container">
      <SideDrawer />
      <MainContent />
    </div>
    
  );
}

export default App;
