import React from "react";
import './BooksSection.css';

const BooksSection = ({ title, description, bgtitle, colorscheme, type }) => {

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
                <div className="BookList"></div>
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
