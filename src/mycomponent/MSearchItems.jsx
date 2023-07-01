import './MSearchItems.css'
import { useNavigate } from 'react-router-dom';

function MSearchItems({searchresult}) {

    const navigate = useNavigate();

    //console.log('ini search result : ',searchresult)

    let ItemsToShow = []

    for(let i = 0; i < searchresult.length; i++){

        const url = '/overview/' + (searchresult[i].title.replace(/ /g, '-'))

        let cardStyle = {
            backgroundImage: `url(${searchresult[i].coverimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
        let item = (<div className='MSICard' key={searchresult[i].id}>
            <div className='MSIInnerCard' style={cardStyle} onClick={() => navigate(url)}></div>
            <div className='MSITitle' onClick={() => navigate(url)}>{searchresult[i].title}</div>
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