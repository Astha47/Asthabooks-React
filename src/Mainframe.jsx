import './Mainframe.css'
import Home from './tabs/home/home';
import BooksTab from './tabs/bookstab/bookstab';
import SearchMobile from './tabs/searchmobile/searchMobile';
import OverviewBody from './tabs/OverviewBody/OverviewBody';
import Footer from './mycomponent/Footer'

import HeroTabsDatabase from './data/HeroTabsDatabase.json'
//import BooksData from './data/BooksData.json'

//AXIOS
//import axios from 'axios';

function Mainframe({ activeTab, BooksData, Book}) {
      
    

    let HeroTabsData;
    let TabToShow;

    for (let i = 0; i < HeroTabsDatabase.HeroTabsDatabase.length; i++) {
        if (HeroTabsDatabase.HeroTabsDatabase[i].type === activeTab) {
          HeroTabsData = HeroTabsDatabase.HeroTabsDatabase[i];
          break;
        }
    }


    if (activeTab === 'Home') {
        TabToShow = <Home/>
    } else if (activeTab === 'SearchMobile'){
        TabToShow = <SearchMobile hero={HeroTabsDatabase.HeroTabsDatabase} books={BooksData}/>
    } else if (activeTab === 'Overview') {
        TabToShow = <OverviewBody Book={Book}/>
    } else {
        TabToShow = <BooksTab hero={HeroTabsData} books={BooksData}/>
    }
    

    return ( 
        <div className={`Mainframe ${TabToShow ? 'fade-in' : 'fade-out'}`}>
            {TabToShow}
            <Footer/>
        </div>
     );
}

export default Mainframe;