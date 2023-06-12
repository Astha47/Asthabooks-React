import './MobileNavBar.css'
import HomeIcon from '../img/homeicon';

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
                <div className='MNavTab'></div>
                <div className='MNavTab'></div>
                <div className='MNavTab'></div>
            </div>
        </div>
     );
}

export default MobileNavBar;