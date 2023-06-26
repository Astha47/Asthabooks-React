import './searchMobile.css'
import MSearchResult from '../../mycomponent/MSearchResult';
import { useState } from 'react';
import { ReactComponent as XIcon } from '../../img/x-icon.svg'
import { ReactComponent as SearchIcon } from '../../img/searchicon.svg'


function SearchMobile({hero, books}) {

    const [filteredData, setFilteredData]  = useState();
    const [keyword, setKeyword] = useState('');

    // Mengatur logo search

    const [searchCondition, setSearchCondition] = useState(<SearchIcon className="searchIcon"/>)


    const handleSearch = (event) => {
        const newKeyword = event.target.value.toLowerCase();
        const newSearchData = books.filter((value) => {
            return value.title.toLowerCase().includes(newKeyword);
        })

        if (newKeyword){
            setSearchCondition(<XIcon className="xIcon" style={{ stroke: 'white' }}/>)
        } else {
            setSearchCondition(<SearchIcon className="searchIcon"/>)
        }


        setFilteredData(newSearchData);
        setKeyword(event.target.value);
    }

    const handleSearchButton = () => {
        if (keyword){
            setSearchCondition(<SearchIcon className="searchIcon"/>)
            setKeyword('')
        }
    }


    console.log(filteredData)
    return (
        <div className="SearchMobile" color='white'>
            <div className="MSearchBar">
                <div className="MSBContainer">
                    <div className="MSBInput">
                        <input type="text" placeholder='Search Anything!' onChange={handleSearch} value={keyword}/>
                    </div>
                    <div className="MSBButton" onClick={handleSearchButton}>
                        {searchCondition}
                    </div>
                </div>
            </div>
            <MSearchResult hero={hero} searchresult={filteredData} keyword={keyword}/>
        </div>
    );
}

export default SearchMobile;