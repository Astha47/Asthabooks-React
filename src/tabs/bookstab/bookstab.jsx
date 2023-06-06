import React from 'react';
import './bookstab.css';
import CategoryContainer from '../../mycomponent/CategoryContainer';
import BooksCardContainerTab from '../../mycomponent/BooksCardContainerTab';
import NoData from '../../mycomponent/NoData';

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

    let componentToShow = [];
    
    if (hero.type === 'All Books') {

        //Mengumpulkan kategori
        let category = [];
        for (let i = 0; i < books.length; i++) {
            let found = false;
            for (let j = 0; j < category.length ;j++) {
                if (books[i].type === category[j]) {
                    found = true;
                }
            }
            if (found === false) {
                category.push(books[i].type)
            }
          }
        
        if (category.length === 0){
            componentToShow.push(<NoData/>)
        } else {
            //Menghitung jumlah per kategori
            let jumlah = [];
            for (let i = 0; i < category.length; i++) {
                let counter = 0;
                for (let j = 0; j < books.length; j++) {
                    if (books[j].type === category[i]) {
                        counter++;
                    }
                }
                jumlah.push(counter);
            }

            //Disini sudah ada variabel category, jumlah, dan books
            //Buat ID
            let categoryid = [];
            for (let i = 0; i < category.length; i++) {
                categoryid.push('category'+i)
            }


            //Lakukan loops untuk input data ke componentToShow
            for (let i = 0; i < category.length; i++) {
                let booksList = [];
                for (let j = 0; j < books.length; j++) {
                    if (books[j].type === category[i]) {
                        booksList.push(books[j])
                    }
                }

                //Mengisikan Komponen
                componentToShow.push(<CategoryContainer headertitle={category[i]} amount={jumlah[i]} booksdata={booksList} key={categoryid[i]}/>)
            }
        }
        

    } else {
        //Mencari Buku2 yang memiliki kategori yang sama
        let booksToShow = [];

        for (let i = 0; i < books.length; i++) {
            if (books[i].type === hero.type) {
                booksToShow.push(books[i])
            }
        }

        componentToShow.push(<BooksCardContainerTab data={booksToShow}/>)
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
                    {componentToShow}
                </div>
            </div>
        </div>
    );
}

export default BooksTab;
