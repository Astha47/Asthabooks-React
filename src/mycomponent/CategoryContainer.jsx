import BooksCategoryHeader from "./BooksCategoryHeader";
import BooksListContainer from "./BooksListContainer";

function CategoryContainer({headertitle, amount, booksdata}){

    return(
        <div className="BooksListSection">
            <BooksCategoryHeader CategoryName={headertitle} Jumlah={amount}/>
            <BooksListContainer booksdata={booksdata} amount={amount}/>
        </div>
    );
}

export default CategoryContainer;