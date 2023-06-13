import './MSearchResult.css'

function MSearchResult({keyword,books}) {
    keyword = 'sdfsd'

    let headerTitle = '';


    if (keyword === '') {
        headerTitle = 'Categories';
    } else {
        headerTitle = 'Search result for "'+keyword+'"'
    }

    return (
        <div className="MSearchResult">
            <div className="MSRHeader">
                <div className="MSRTitle">{headerTitle}</div>
            </div>
            <div className="MSRItems">

            </div>
        </div>
    );
}

export default MSearchResult;