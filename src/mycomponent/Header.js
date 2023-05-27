import './Header.css'
import React from 'react';
import AsthabooksLogoW from '../img/AsthabooksLogoW.png'
import SearchIcon from '../img/searchicon'
import HomeIcon from '../img/homeicon';
import NotificationIcon from '../img/notificationicon';
import AboutIcon from '../img/abouticon';
import CollectionIcon from '../img/collectionicon';

function Header() {
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
                            <div className='navbutton'>
                            <HomeIcon height='100%' width='auto' stroke={LightColor} margin='auto'/>
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
                    <div className='mbtab'>
                        <p>All Books</p>    
                    </div>
                    <div className='mbtab'>
                        <p>College Books</p>
                    </div>
                    <div className='mbtab'>
                        <p>Self Improvement</p>
                    </div>
                    <div className='mbtab'>
                        <p>Novel</p>
                    </div>
                    <div className='mbtab'>
                        <p>Tulisan Nala</p>
                    </div>
                    <div className='mbtab'>
                        <p>Asthaproject</p>
                    </div>
                </div>
            </div>
        </div> 
        
     );
}

export default Header;
