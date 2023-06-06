import './BooksList.css'

function BooksList({book}) {
    console.log('Ini data cover : ', book.coverimg)
    
    const cellStyle = {
        backgroundImage: `url(${book.coverimg})`
    };

    return ( 
        <div className="BookListContent">
            <div className='BookListBackground' style={cellStyle}></div>
            <div className='BookListBackgroundShade'></div>
            <div className='BookListItemsContainer'>
                <div className='BLITitle'>
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