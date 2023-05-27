import './Mainframe.css'
import BarierBlock from './BarierBlock';
import HeroSection from './HeroSection';
import BooksSection from './BooksSection';
import React from 'react';

function Mainframe() {

    let sections = [['Seri Non-Fiksi dan Edukasi','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],['Seri Buku Fiksi','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],['Seri Buku Bacaan dan Self Improvement','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']];

    return ( 
        <div className='Mainframe'>
            <BarierBlock/>
            <HeroSection/>
            <BarierBlock/>
            <BooksSection title={sections[0][0]} description={sections[0][1]} bgtitle='./img/sectionbg/science.jpg' colorscheme='blue' type='left' />
            <BarierBlock/>
            <BooksSection title={sections[1][0]} description={sections[1][1]} bgtitle='./img/sectionbg/fiction.jpg' colorscheme='blue' type='right' />
        </div>
     );
}

export default Mainframe;