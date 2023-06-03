import './Mainframe.css'
import Home from './tabs/home/home';
import BooksTab from './tabs/bookstab/bookstab';
import React from 'react';

function Mainframe({ activeTab }) {

    let TabToShow;

    switch (activeTab) {
        case 'Home':
            TabToShow = <Home/>
            break;
        
        case 'AllBooks':
            TabToShow = <BooksTab type='AllBooks'/>
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