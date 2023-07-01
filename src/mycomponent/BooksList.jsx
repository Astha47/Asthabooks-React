import './BooksList.css'
import { useNavigate } from "react-router-dom";

function BooksList({book}) {

    const navigate = useNavigate();

    const url = '/overview/' + (book.title.replace(/ /g, '-'))
    
    const cellStyle = {
        backgroundImage: `url(${book.coverimg})`
    };

    return ( 
        <div className="BookListContent">
            <div className='BookListBackground' style={cellStyle}></div>
            <div className='BookListBackgroundShade'></div>
            <div className='BookListItemsContainer'>
                <div className='BLITitle' onClick={() => navigate(url)}>
                    <div className='BLITitleBox'>
                    {book.title}
                    </div>
                </div>
                <div className='BLIAction'>
                    <div className='BLIALike'></div>
                    <div className='BLIADownload'></div>
                </div>
            </div>
        </div>
    );
}

export default BooksList;