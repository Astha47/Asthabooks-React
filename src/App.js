import './mycomponent/Header'
import Mainframe from './Mainframe';
import './App.css';
import Header from './mycomponent/Header';
import Footer from './mycomponent/Footer';
import { useState } from 'react';

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
      <Footer/>
    </div>
  );
}

export default App;
