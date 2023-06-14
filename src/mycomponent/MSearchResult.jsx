import './MSearchResult.css'
import MSearchCategories from './MSearchCategories';
import MSearchItems from './MSearchItems';
import NoData from './NoData';

function MSearchResult({hero, searchresult, keyword}) {

    let headerTitle = '';
    let DOMtoShow = [];

    

    if (keyword.length === 0) {
        headerTitle = 'Categories';
        DOMtoShow.push(<MSearchCategories hero={hero}/>)
    } else if (searchresult.length !== 0){
        headerTitle = 'Search result for "'+keyword+'"'
        DOMtoShow.push(<MSearchItems searchresult={searchresult}/>)
    } else {
        headerTitle = 'No result for "'+keyword+'"'
        DOMtoShow.push(<NoData/>)
    }

    return (
        <div className="MSearchResult">
            <div className="MSRHeader">
                <div className="MSRTitle">{headerTitle}</div>
            </div>
            <div className="MSRItems">
                {DOMtoShow}
            </div>
        </div>
    );
}

export default MSearchResult;