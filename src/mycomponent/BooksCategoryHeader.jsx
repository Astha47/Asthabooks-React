import React from "react";

function BooksCategoryHeader({ CategoryName, Jumlah }) {

    const BCHStyle ={
        width : '100%',
        height : '60px',
        backgroundColor : 'black',
        borderRadius : '10px',
    };

    return ( 
        <div className="BooksCategoryHeader" style={BCHStyle}></div>
    );
}

export default BooksCategoryHeader;