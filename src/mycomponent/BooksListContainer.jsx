import BooksList from "./BooksList";

function BooksListContainer({booksdata, amount}) {
    let componentToShow = [];

    for (let i = 0; i < amount; i++ ) {
        let number = i + 1;
        componentToShow.push(<BooksList book={booksdata[i]} number={number} key={booksdata[i].id}/>)
    }


    return (
        <div className="BooksListContainer">
            {componentToShow}
        </div>
    );
}

export default BooksListContainer;