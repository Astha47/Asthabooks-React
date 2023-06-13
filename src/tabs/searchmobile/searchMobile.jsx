import './searchMobile.css'
import MSearchResult from '../../mycomponent/MSearchResult';

function SearchMobile() {

    let keyword = '';
    return (
        <div className="SearchMobile" color='white'>
            <div className="MSearchBar">
                <div className="MSBContainer">
                    <div className="MSBInput">

                    </div>
                    <div className="MSBButton">

                    </div>
                </div>
            </div>
            <MSearchResult keyword={keyword}/>
        </div>
    );
}

export default SearchMobile;