import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './mycomponent/Header'
import Mainframe from './Mainframe';
import './App.css';
import Header from './mycomponent/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import MobileNavBar from './mycomponent/MobileNavBar';

import LoadingApp from './tabs/loading/loadingApp';
import LoginPage from './tabs/login/loginPage';
import Page404 from './pages/404';

function App() {

  // Condition Handler

  const [MainAppLoad , setMainAppLoad] = useState(true);
  const [AccountStatus, setAccountStatus] = useState(true);

  

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

  
  //console.log('ini adalah data lokal ', BooksData )

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
                        <Mainframe activeTab={activeTab} BooksData={BooksData} onTabChange={handleTabChange}/>,
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
    <Router>
      <Routes>
        <Route path='/' element={MainAppContent} />
        <Route path='/tab/:category' element={[<Header activeTab={activeTab} onTabChange={handleTabChange}/>,
                        <Mainframe activeTab={activeTab} BooksData={BooksData} onTabChange={handleTabChange}/>,
                        <MobileNavBar activeTab={activeTab} onTabChange={handleTabChange}/>]}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </Router>
  );
}

export default App;

/*

<div className="App">
      {MainAppContent}
    </div>
    */