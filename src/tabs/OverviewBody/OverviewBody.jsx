import './OverviewBody.css'

function OverviewBody({Book}) {
    console.log('Ini data book :', Book)
    return (
        <div className="OverviewBody">
            <div className="OHeader" style={{backgroundImage: `url(${Book.coverimg})`}}>
                <div className="OHeaderContainer">
                    <div className="OFlyingCardCont">
                        <div className="OFlyingCard" style={{backgroundImage: `url(${Book.coverimg})`}}></div>
                    </div>
                    <div className="OHDesc">
                        <div className="OHTitle">{Book.title}</div>
                    </div>
                </div>
            </div>
            <div className="OBody">
                <div className="OBSideDesc">

                </div>
                <div className="OBMainDesc">
                    
                </div>
            </div>
        </div>
    );
}

export default OverviewBody;