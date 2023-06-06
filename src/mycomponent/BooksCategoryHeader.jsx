import React from "react";
import './BooksCategoryHeader.css'

function BooksCategoryHeader({ CategoryName, Jumlah }) {

    return ( 
        <div className="BooksCategoryHeader" >
            <div className="BCHNumberContainer">
                <div className="BCHNumber">{Jumlah}</div>
            </div>
            <div className="BCHTitleContainer">
                <div className="BCHTitle">{CategoryName}</div>
            </div>
        </div>
    );
}

export default BooksCategoryHeader;