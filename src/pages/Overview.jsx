import Header from "../mycomponent/Header";
import MobileNavBar from "../mycomponent/MobileNavBar";
import { useParams } from 'react-router-dom';
import Page404 from "./404";
import Mainframe from "../Mainframe";
import './Overview.css'


function Overview({BooksData}) {

    const { name } = useParams();

    const target = name.replace(/-/g, ' ');

    const Book = BooksData.find(function(book) {
        return book.title === target;
      });

    const activeTab = 'Overview';

    let contentToShow;
    if (Book) {
        contentToShow = [<Header activeTab={activeTab}/>, <Mainframe activeTab={activeTab} BooksData={BooksData} Book={Book}/>, <MobileNavBar activeTab={activeTab}/>]
    } else {
        contentToShow = <Page404/>
    }


    return (
        <div className="Overview">
            {contentToShow}
        </div>
    );
}

export default Overview;