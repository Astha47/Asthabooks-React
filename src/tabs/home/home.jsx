import './home.css'
import BarierBlock from '../../mycomponent/BarierBlock';
import HeroSection from '../../mycomponent/HeroSection';
import BooksSectionL from '../../mycomponent/BooksSectionL';
import BooksSectionR from '../../mycomponent/BooksSectionR';
import React from 'react';

function Home({onTabChange}) {

    let sections = [['Seri Non-Fiksi dan Edukasi','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],['Seri Buku Fiksi','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],['Seri Buku Bacaan dan Self Improvement','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']];
    let bukusains = [['300 Creative Physics','300Creative.jpg'],['Kalkulus edisi 2', 'Calculus2.png'],['Kalkulus edisi 3','Calculus3.png'],['Halliday Resnick', 'Halliday.png']]

    let query1 = 'College Books'
    let query2 = 'Novel'

    return ( 
        <div className='Home'>
            <BarierBlock/>
            <HeroSection/>
            <BarierBlock/>
            <BooksSectionL title={sections[0][0]} description={sections[0][1]} bgtitle='./img/sectionbg/science.jpg' booksarray={bukusains} onTabChange={onTabChange} query={query1}/>
            <BarierBlock/>
            <BooksSectionR title={sections[1][0]} description={sections[1][1]} bgtitle='./img/sectionbg/fiction.jpg' booksarray={bukusains} onTabChange={onTabChange} query={query2}/>
            <BarierBlock/>
        </div>
     );
}

export default Home;

/*<BooksSection title={sections[1][0]} description={sections[1][1]} bgtitle='./img/sectionbg/fiction.jpg' type='right' booksarray={bukusains}/> 
import BooksSectionR from './BooksSectionR';
*/