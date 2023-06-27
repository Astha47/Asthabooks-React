import './NoData.css'
import NoDataSVG from '../img/no-data';

function NoData() {
    return ( 
        <div className="NoData">
            <div className="NDContainer">
                <div className="NDImage">
                    <NoDataSVG height='100%' width='auto' fill='#FFFFFF' margin='auto'/>
                </div>
                <p>Data 404 :(</p>
            </div>
        </div>
     );
}

export default NoData;