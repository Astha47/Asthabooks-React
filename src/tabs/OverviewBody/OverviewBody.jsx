import './OverviewBody.css'

function OverviewBody({Book}) {
    console.log('Ini data book :', Book)
    return (
        <div className="OverviewBody">
            <div className="OHeader">
                <div className="OFlyingCardCont">
                    <div className="OFlyingCard" style={{backgroundImage: `url(${Book.coverimg})`}}></div>
                </div>
                <div className="OHDesc"></div>
            </div>
            <div className="OBody"></div>
        </div>
    );
}

export default OverviewBody;