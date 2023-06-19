import './mycomponent/Header'
import Mainframe from './Mainframe';
import './App.css';
import Header from './mycomponent/Header';
import { useState } from 'react';
import MobileNavBar from './mycomponent/MobileNavBar';



function App() {

  const [activeTab, setActiveTab] = useState('Home'); // Menyimpan tab aktif saat ini

  // Fungsi untuk mengubah tab aktif
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Header activeTab={activeTab} onTabChange={handleTabChange}/>
      <Mainframe activeTab={activeTab}/>
      <MobileNavBar activeTab={activeTab} onTabChange={handleTabChange}/>
    </div>
  );
}

export default App;
