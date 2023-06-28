import './MobileNavBar.css'
import HomeIcon from '../img/homeicon';
import SearchIcon from '../img/searchicon';
import CollectionIcon from '../img/collectionicon';
import NotificationIcon from '../img/notificationicon';
import { useNavigate } from 'react-router-dom';

function MobileNavBar({ activeTab }) {

    const LightColor = '#FFFFFF'
    const navigate = useNavigate();

    return ( 
        <div className="MobileNavBar">
            <div className='MNavContainer'>
                <div className='MNavTab'>
                    <div className='MNavTabIcon' onClick={() => navigate('/')}>
                        <HomeIcon height='100%' width='auto' stroke={LightColor} fill={activeTab === 'Home' ? LightColor : ''} margin='auto'/>
                    </div>
                </div>
                <div className='MNavTab'>
                    <div className='MNavTabIcon' onClick={() => navigate('/tab/search/mobile')}>
                        <SearchIcon height='100%' width='auto' stroke={LightColor} fill={activeTab === 'SearchMobile' ? LightColor : ''} margin='auto'/>
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