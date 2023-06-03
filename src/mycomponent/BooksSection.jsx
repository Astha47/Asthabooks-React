import React from "react";
import './BooksSection.css';


const BooksSection = ({ title, description, bgtitle, colorscheme, type, booksarray }) => {

    let book1 = './img/' + booksarray[0][1];
    let book2 = './img/' + booksarray[1][1];
    let book3 = './img/' + booksarray[2][1];
    let book4 = './img/' + booksarray[3][1];

    let LeftHeroStyle = {
        backgroundImage: `url(${bgtitle})`,

        
    };

    let RightHeroStyle = {
        backgroundImage: `url(${bgtitle})`,
    };

    if (type === 'left') {
        RightHeroStyle.display = 'none';
    } else {
        LeftHeroStyle.display = 'none';
    }

    return (
        <div className="BooksSection">
        <div className="HeroBookL" style={LeftHeroStyle}>
            <div className="HeroBookContainer">
                <div className="ListTitle">{title}</div>
                <div className="ListDescription">{description}</div>
            </div>
        </div>
        <div className="BookListSection">
            <div className="BooklistContainer">
                <div className="BooksCardContainer">
                    <div className="CardCell">
                        <div className="CardBookCover" style={{ backgroundImage: `url(${book1})` }}>
                            <img src={book1} alt="book1" />
                        </div>
                        <div className="CardTitleContainer">
                            <div className="CardTitle">{booksarray[0][0]}</div>
                        </div>
                    </div>

                    <div className="CardCell">
                        <div className="CardBookCover" style={{ backgroundImage: `url(${book2})` }}>
                        <img src={book2} alt="book2" />
                        </div>
                        <div className="CardTitleContainer">
                            <div className="CardTitle">{booksarray[1][0]}</div>
                        </div>
                    </div>

                    <div className="CardCell">
                        <div className="CardBookCover" style={{ backgroundImage: `url(${book3})` }}>
                        <img src={book3} alt="book3" />
                        </div>
                        <div className="CardTitleContainer">
                            <div className="CardTitle">{booksarray[2][0]}</div>
                        </div>
                    </div>
                    <div className="CardCell">
                        <div className="CardBookCover" style={{ backgroundImage: `url(${book4})` }}>
                        <img src={book4} alt="book4" />
                        </div>
                        <div className="CardTitleContainer">
                            <div className="CardTitle">{booksarray[3][0]}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MoreBookButtonContainer">
                <div className="BookButton">More</div>
            </div>
        </div>
        <div className="HeroBookL" style={RightHeroStyle}>
            <div className="HeroBookContainer">
                <div className="ListTitle">{title}</div>
                <div className="ListDescription">{description}</div>
            </div>
        </div>
        </div>
    );
};

export default BooksSection;
