import './mycomponent/Header'
import Mainframe from './Mainframe';
import './App.css';
import Header from './mycomponent/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import MobileNavBar from './mycomponent/MobileNavBar';

import LoadingApp from './tabs/loading/loadingApp';
import LoginPage from './tabs/login/loginPage';

function App() {

  // Condition Handler

  const [MainAppLoad , setMainAppLoad] = useState(false);
  const [AccountStatus, setAccountStatus] = useState(false);

  

  //Fetch Data For Books

  const [BooksData, setBooksData] = useState([])
  
  useEffect(() => {
      fetch('https://cute-ruby-chipmunk-fez.cyclic.app/repositories')
        .then(response => response.json())
        .then(result => {
          setBooksData(result);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }, []);

  
  console.log('ini adalah data lokal ', BooksData )

  // Tab Handler

  const [activeTab, setActiveTab] = useState('Home'); // Menyimpan tab aktif saat ini

  // Fungsi untuk mengubah tab aktif
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };



  // Content Handler

  let MainAppContent;

  if (AccountStatus) {
    if (MainAppLoad) {
      MainAppContent = [<Header activeTab={activeTab} onTabChange={handleTabChange}/>,
                        <Mainframe activeTab={activeTab}/>,
                        <MobileNavBar activeTab={activeTab} onTabChange={handleTabChange}/>]
    } else {
      MainAppContent = <LoadingApp/>;
    }
  } else {
    MainAppContent = <LoginPage/>;
  }

/*
  if (MainAppLoad === false) {
    MainAppContent = <LoadingApp/>;
  } else if (MainAppLoad === true && AccountStatus === false) {
    MainAppContent = <LoginPage/>;
  } else if (MainAppLoad === true && AccountStatus === true){
    MainAppContent = [<Header activeTab={activeTab} onTabChange={handleTabChange}/>,
    <Mainframe activeTab={activeTab}/>,
    <MobileNavBar activeTab={activeTab} onTabChange={handleTabChange}/>]
  }*/


  return (
    <div className="App">
      {MainAppContent}
    </div>
  );
}

export default App;
