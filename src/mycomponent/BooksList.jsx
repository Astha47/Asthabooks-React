import './BooksList.css'

function BooksList({book, number}) {
    return ( 
        <div className="BookListContent">
            <div className='BookListNumberSection'>
                <div className='BookListNumberContainer'>{number}</div>
            </div>
            <div className='BookListItemsSection'>
                <div className='BookListBackground'></div>
                <div className='BookListBackgroundShade'></div>
                <div className='BookListItemsContainer'>
                    <div className='BLITitle'></div>
                    <div className='BLIAction'>
                        <div className='BLIALike'></div>
                        <div className='BLIADownload'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooksList;