import React from "react";
import './BooksCard.css'
import { useNavigate } from "react-router-dom";

function BooksCard({title, description, cover}) {

    const navigate = useNavigate();

    const url = '/overview/' + (title.replace(/ /g, '-'))

    const coverStyle = {
        backgroundImage : `url(${cover})`
    }
    return (  
        <div className="BooksCardOuterBox" onClick={() => navigate(url)}>
            <div className="BooksCardInnerBox">
                <div className="BCCover" style={coverStyle}></div>
                <div className="BCTitleContainer">
                    <div className="BCTitleBox">
                        <div className="BCTitle">{title}</div>
                        <div className="BCDescription">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooksCard;
