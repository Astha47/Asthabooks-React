import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './mycomponent/Header'
import './App.css';

import { useState } from 'react';
import { useEffect } from 'react';


//import LoadingApp from './tabs/loading/loadingApp';
//import LoginPage from './tabs/login/loginPage';
import Homepage from './pages/Homepage';
import Tabs from './pages/Tabs';
import SearchMobile from './pages/SearchMobile';
import Page404 from './pages/404';

function App() {

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
        <Route path='/' element={<Homepage BooksData={BooksData}/>} />
        <Route path='/tab/:category' element={<Tabs BooksData={BooksData}/>}/>
        <Route path='/tab/search/mobile' element={<SearchMobile BooksData={BooksData}/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </Router>
  );
}

export default App;