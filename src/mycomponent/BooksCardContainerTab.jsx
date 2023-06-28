import React from "react";
import './BooksCardContainerTab.css'
import BooksCard from "./BooksCard";

function BooksCardContainerTab({data}) {

    let display = [];

    for (let i = 0; i < data.length; i++) {
        display.push(<BooksCard title={data[i].title} description={data[i].description} cover={data[i].coverimg} key={data[i].id}/>)
    }

    return ( 
        <div className="BooksCardContainerTab">
            <div className="BCCBox">
                {display}
            </div>
        </div>
    );
}

export default BooksCardContainerTab;