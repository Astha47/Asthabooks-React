import './MobileNavBar.css'
import HomeIcon from '../img/homeicon';
import SearchIcon from '../img/searchicon';
import CollectionIcon from '../img/collectionicon';
import NotificationIcon from '../img/notificationicon';

function MobileNavBar({ activeTab, onTabChange }) {

    const LightColor = '#FFFFFF'

    return ( 
        <div className="MobileNavBar">
            <div className='MNavContainer'>
                <div className='MNavTab'>
                    <div className='MNavTabIcon'>
                        <HomeIcon height='100%' width='auto' stroke={LightColor} fill={activeTab === 'Home' ? LightColor : ''} margin='auto'/>
                    </div>
                </div>
                <div className='MNavTab'>
                    <div className='MNavTabIcon'>
                        <SearchIcon height='100%' width='auto' stroke={LightColor} fill={activeTab === 'Search' ? LightColor : ''} margin='auto'/>
                    </div>
                </div>
                <div className='MNavTab'>
                    <div className='MNavTabIcon'>
                        <NotificationIcon height='100%' width='auto' fill={LightColor} margin='auto'/>
                    </div>
                </div>
                <div className='MNavTab'>
                    <div className='MNavTabIcon'>
                        <CollectionIcon height='100%' width='auto' fill={LightColor}  margin='auto'/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MobileNavBar;