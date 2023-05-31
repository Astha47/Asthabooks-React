import './Mainframe.css'
import BarierBlock from './BarierBlock';
import HeroSection from './HeroSection';
import BooksSectionL from './BooksSectionL';
import React from 'react';

function Mainframe() {

    let sections = [['Seri Non-Fiksi dan Edukasi','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],['Seri Buku Fiksi','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],['Seri Buku Bacaan dan Self Improvement','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']];
    let bukusains = [['300 Creative Physics','300Creative.jpg'],['Kalkulus edisi 2', 'Calculus2.png'],['Kalkulus edisi 3','Calculus3.png'],['Halliday Resnick', 'Halliday.png']]

    return ( 
        <div className='Mainframe'>
            <BarierBlock/>
            <HeroSection/>
            <BarierBlock/>
            <BooksSectionL title={sections[0][0]} description={sections[0][1]} bgtitle='./img/sectionbg/science.jpg' booksarray={bukusains}/>
            <BarierBlock/>
        </div>
     );
}

export default Mainframe;

/*<BooksSection title={sections[1][0]} description={sections[1][1]} bgtitle='./img/sectionbg/fiction.jpg' type='right' booksarray={bukusains}/> */