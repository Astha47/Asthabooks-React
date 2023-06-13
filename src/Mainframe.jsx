import './Mainframe.css'
import Home from './tabs/home/home';
import BooksTab from './tabs/bookstab/bookstab';
import SearchMobile from './tabs/searchmobile/searchMobile';
import Footer from './mycomponent/Footer'
import React from 'react';

function Mainframe({ activeTab }) {


    //Fetch Data For Tabs
    let HeroTabsDatabase = [
        {type: 'All Books', heroTitle : 'Semua Koleksi Repositori', imgurl : './img/tabshero/AllBooks.jpg', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        {type: 'College Books', heroTitle : 'Buku Tunjangan Belajarmu', imgurl : './img/tabshero/CollegeBooks.jpg', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        {type: 'Self Improvement', heroTitle : 'Semua Koleksi Repositori', imgurl : './img/tabshero/SelfImprovement.jpg', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        {type: 'Novel', heroTitle : 'Semua Koleksi Repositori', imgurl : './img/tabshero/Novel.jpg', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        {type: 'Tulisan Nala', heroTitle : 'Semua Koleksi Repositori', imgurl : './img/tabshero/TulisanNala.jpg', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ];
    let BooksData = [
        {id : 1, type : 'College Books', title : 'Fundamental of Physics by Halliday & Resnic', coverimg : './img/Halliday.png', description : ''},
        {id : 11, type : 'College Books', title : 'Fundamental of Physics by Halliday & Resnic [SOLUTION]', coverimg : './img/HallidaySolution.png', description : ''},
        {id : 2, type : 'Novel', title : 'Negeri Lima Menara', coverimg : '', description : ''},
        {id : 3, type : 'College Books', title : 'Calculus 9th Edition', coverimg : './img/Kalkulus.jpg', description : ''},
        {id : 4, type : 'Novel', title : 'A+', coverimg : '', description : ''},
        {id : 5, type : 'Tulisan Nala', title : 'Oscillation - Leandika', coverimg : './img/Oscillation.jpg', description : ''},
        {id : 6, type : 'Tulisan Nala', title : 'Synthetic Memories', coverimg : './img/SyntheticMemories.jpg', description : ''},
        {id : 7, type : 'College Books', title : '200 Puzzling Physics Problems', coverimg : './img/Puzzling.jpg', description : ''},
        {id : 8, type : 'College Books', title : 'Calculus 2 by OpenStax', coverimg : './img/Calculus2.png', description : ''},
        {id : 9, type : 'College Books', title : 'Calculus 3 by OpenStax', coverimg : './img/Calculus3.png', description : ''},
        {id : 10, type : 'College Books', title : 'Fundamental of Electric Circuit', coverimg : './img/FundamentalofElectricCircuit.png', description : ''},
        {id : 14, type : 'College Books', title : 'Fundamental of Electric Circuit [Solution]', coverimg : './img/SolutionFundamentalofElectricCircuit.png', description : ''},
        {id : 12, type : 'College Books', title : 'Introduction to Electrodynamics', coverimg : './img/IntroElectrodynamics.jpg', description : ''},
        {id : 13, type : 'College Books', title : 'Problems in General Physics', coverimg : './img/Irodov.png', description : ''},
        {id : 14, type : 'Self Improvement', title : '48 Rules of Power', coverimg : './img/Power.jpg', description : ''},
        {id : 15, type : 'Self Improvement', title : 'Rich Dad Poor Dad', coverimg : './img/RichDad.jpg', description : ''},


        
    ];
    

    let HeroTabsData;
    let TabToShow;

    for (let i = 0; i < HeroTabsDatabase.length; i++) {
        if (HeroTabsDatabase[i].type === activeTab) {
          HeroTabsData = HeroTabsDatabase[i];
          break;
        }
    }

    if (activeTab === 'Home') {
        TabToShow = <Home/>
    } else if (activeTab === 'SearchMobile'){
        TabToShow = <SearchMobile books={BooksData}/>

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