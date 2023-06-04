import './Mainframe.css'
import Home from './tabs/home/home';
import BooksTab from './tabs/bookstab/bookstab';
import React from 'react';

function Mainframe({ activeTab }) {


    //Fetch Data For Tabs
    let HeroTabsDatabase = [
        {type: 'AllBooks', heroTitle : 'Semua Koleksi Repositori', imgurl : '', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        {type: 'CollegeBooks', heroTitle : 'Semua Koleksi Repositori', imgurl : '', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        {type: 'SelfImprovements', heroTitle : 'Semua Koleksi Repositori', imgurl : '', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        {type: 'Novel', heroTitle : 'Semua Koleksi Repositori', imgurl : '', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        {type: 'TulisanNala', heroTitle : 'Semua Koleksi Repositori', imgurl : '', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ];
    
    console.log('Menampilkan data untuk all books : ')

    let HeroTabsData;
    let TabToShow;

    for (let i = 0; i < HeroTabsDatabase.length; i++) {
        if (HeroTabsDatabase[i].type === activeTab) {
          HeroTabsData = HeroTabsDatabase[i];
          break;
        }
    }

    switch (activeTab) {
        case 'Home':
            TabToShow = <Home/>
            break;
        
        case 'AllBooks':
            TabToShow = <BooksTab hero = {HeroTabsData}/>
            break;
    
        default:
            break;
    }

    

    return ( 
        <div className={`Mainframe ${TabToShow ? 'fade-in' : 'fade-out'}`}>
            {TabToShow}
        </div>
     );
}

export default Mainframe;