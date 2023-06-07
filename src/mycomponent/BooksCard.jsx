import React from "react";
import './BooksCard.css'

function BooksCard({title, description, cover}) {

    const coverStyle = {
        backgroundImage : `url(${cover})`
    }
    return (  
        <div className="BooksCardOuterBox">
            <div className="BooksCardInnerBox">
                <div className="BCCover" style={coverStyle}></div>
                <div className="BCTitleContainer">
                    <div className="BCTitleBox"></div>
                </div>
            </div>
        </div>
    );
}

export default BooksCard;
