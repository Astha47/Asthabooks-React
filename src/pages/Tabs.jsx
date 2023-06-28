import Header from "../mycomponent/Header";
import Mainframe from "../Mainframe";
import MobileNavBar from "../mycomponent/MobileNavBar";
import { useParams } from 'react-router-dom';



function Tabs({BooksData}) {
    const { category } = useParams();

    let activeTab = '';

    for (let i = 0; i < category.length; i++){
        if (category[i] !== '-'){
            activeTab += category[i];
        } else {
            activeTab += ' '
        }
    }
    console.log(activeTab)

    return (
        <div className="Tabs">
            <Header activeTab={activeTab}/>
            <Mainframe activeTab={activeTab} BooksData={BooksData}/>
            <MobileNavBar activeTab={activeTab}/>
        </div>
    );
}

export default Tabs;