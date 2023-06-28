import Header from "../mycomponent/Header";
import Mainframe from "../Mainframe";
import MobileNavBar from "../mycomponent/MobileNavBar";


function SearchMobile({BooksData}) {

    const activeTab = 'SearchMobile';

    return (
        <div>
            <Header activeTab={activeTab}/>
            <Mainframe activeTab={activeTab} BooksData={BooksData}/>
            <MobileNavBar activeTab={activeTab}/>
        </div>
    );
}

export default SearchMobile;