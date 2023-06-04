import React from 'react';
import './bookstab.css';
import BooksCategoryHeader from '../../mycomponent/BooksCategoryHeader';

function BooksTab({ hero, books }) {

    const HeroStyle = {
        backgroundImage: `url(${hero.imgurl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    const TabContentStyle = {
        display: 'flex',
    }


    return (
        <div className="BooksTab">
            <div className="BooksTabHero" style={HeroStyle}>
                <div className='TabHeroContainer'>
                    <div className='THTitle'>{hero.heroTitle}</div>
                    <div className='THDecription'>{hero.description}</div>
                </div>
            </div>
            <div className="BooksTabContent" style={TabContentStyle}>
                <div className='BTCContainer'>
                    <BooksCategoryHeader/>
                </div>
            </div>
        </div>
    );
}

export default BooksTab;
