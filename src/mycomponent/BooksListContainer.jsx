import BooksList from "./BooksList";
import './BooksListContainer.css'

function BooksListContainer({booksdata, amount}) {
    let componentToShow = [];

    for (let i = 0; i < amount; i++ ) {
        componentToShow.push(<BooksList book={booksdata[i]} key={booksdata[i].id}/>)
    }


    return (
        <div className="BooksListContainer">
            {componentToShow}
        </div>
    );
}

export default BooksListContainer;