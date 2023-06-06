import './Header.css'
import React from 'react';
import AsthabooksLogoW from '../img/AsthabooksLogoW.png'
import SearchIcon from '../img/searchicon'
import HomeIcon from '../img/homeicon';
import NotificationIcon from '../img/notificationicon';
import AboutIcon from '../img/abouticon';
import CollectionIcon from '../img/collectionicon';

function Header({ activeTab, onTabChange }) {
    const LightColor = '#FFFFFF'
    return (
        <div className='MainHeader'>
            <div className="Header">
                <div className="LogoContainer">
                    <img src={AsthabooksLogoW} alt="" />
                </div>

                <div className="searchboxsection">
                    <div className="searchcontainer">
                        <div className='searchbox'>
                            <input type="text" />
                        </div>
                        <div className='searchlogo'>
                            <div className='searchlogocontainer'>
                                <SearchIcon height='100%' stroke={LightColor} margin='auto'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="NavigationBar">
                    <div className='NavContainer'>
                        <div className='Tab'>
                            <div className='navbutton' onClick={() => onTabChange('Home')}>
                            <HomeIcon height='100%' width='auto' stroke={LightColor} fill={activeTab === 'Home' ? LightColor : ''} margin='auto'/>
                            </div>
                        </div>
                        <div className='Tab'>
                            <div className='navbutton'>
                            <CollectionIcon height='100%' width='auto' fill={LightColor} margin='auto'/>
                            </div>
                        </div>
                        <div className='Tab'>
                            <div className='navbutton'>
                            <NotificationIcon height='100%' width='auto' fill={LightColor} margin='auto'/>
                            </div>
                        </div>
                        <div className='Tab'>
                            <div className='navbutton'>
                            <AboutIcon height='100%' width='auto' fill={LightColor} margin='auto'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='useraccount'>
                    <div className='accountcontainer'>
                        
                    </div>
                </div>

            </div>
            <div className='menubar'>
                <div className='mbcategory'>
                    <div className={activeTab === 'AllBooks' ? 'mbtabActive' : 'mbtab'} onClick={() => onTabChange('All Books')}>
                        <p>All Books</p>    
                    </div>
                    <div className={activeTab === 'CollegeBooks' ? 'mbtabActive' : 'mbtab'} onClick={() => onTabChange('College Books')}>
                        <p>College Books</p>
                    </div>
                    <div className={activeTab === 'SelfImprovement' ? 'mbtabActive' : 'mbtab'} onClick={() => onTabChange('Self Improvement')}>
                        <p>Self Improvement</p>
                    </div>
                    <div className={activeTab === 'Novel' ? 'mbtabActive' : 'mbtab'} onClick={() => onTabChange('Novel')}>
                        <p>Novel</p>
                    </div>
                    <div className={activeTab === 'TulisanNala' ? 'mbtabActive' : 'mbtab'} onClick={() => onTabChange('Tulisan Nala')}>
                        <p>Tulisan Nala</p>
                    </div>
                </div>
            </div>
        </div> 
        
     );
}

export default Header;
