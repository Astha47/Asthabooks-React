import './searchMobile.css'
import MSearchResult from '../../mycomponent/MSearchResult';
import { useState } from 'react';


function SearchMobile({hero, books}) {

    const [filteredData, setFilteredData]  = useState([]);
    const [keyword, setKeyword] = useState('');

    const handleSearch = (event) => {
        const newKeyword = event.target.value.toLowerCase();
        const newSearchData = books.filter((value) => {
            return value.title.toLowerCase().includes(newKeyword);
        })
        setFilteredData(newSearchData);
        setKeyword(event.target.value);
    }


    console.log(filteredData)
    return (
        <div className="SearchMobile" color='white'>
            <div className="MSearchBar">
                <div className="MSBContainer">
                    <div className="MSBInput">
                        <input type="text" placeholder='Search Anything!' onChange={handleSearch}/>
                    </div>
                    <div className="MSBButton">

                    </div>
                </div>
            </div>
            <MSearchResult hero={hero} searchresult={filteredData} keyword={keyword}/>
        </div>
    );
}

export default SearchMobile;