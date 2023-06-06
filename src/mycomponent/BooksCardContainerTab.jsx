import React from "react";
import './BooksCardContainerTab.css'
import BooksCard from "./BooksCard";

function BooksCardContainerTab({data}) {
    return ( 
        <div className="BooksCardContainerTab">
            <BooksCard/>
            <BooksCard/>
            <BooksCard/>
            <BooksCard/>
            <BooksCard/>
            <BooksCard/>
            <BooksCard/>
            <BooksCard/>
            <BooksCard/>
        </div>
    );
}

export default BooksCardContainerTab;