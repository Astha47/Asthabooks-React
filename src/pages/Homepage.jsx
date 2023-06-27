

import Header from "../mycomponent/Header";
import Mainframe from "../Mainframe";
import MobileNavBar from "../mycomponent/MobileNavBar";


function Homepage({BooksData}) {
    const activeTab = 'Home'
    return (
        <div className="Homepage">
            <Header activeTab={activeTab}/>
            <Mainframe activeTab={activeTab} BooksData={BooksData}/>
            <MobileNavBar activeTab={activeTab}/>
        </div>
    );
}

export default Homepage;