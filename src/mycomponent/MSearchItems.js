import './MSearchItems.css'

function MSearchItems({searchresult}) {

    console.log('ini search result : ',searchresult)

    let ItemsToShow = []

    for(let i = 0; i < searchresult.length; i++){
        let cardStyle = {
            backgroundImage: `url(${searchresult[i].coverimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
        let item = (<div className='MSICard'>
            <div className='MSIInnerCard' style={cardStyle}></div>
            <div className='MSITitle'>{searchresult[i].title}</div>
        </div>)
        ItemsToShow.push(item)
    }

    return (
        <div className="MSearchItems">
            <div className="MSIContainer">
                {ItemsToShow}
            </div>
        </div>
    );
}

export default MSearchItems;