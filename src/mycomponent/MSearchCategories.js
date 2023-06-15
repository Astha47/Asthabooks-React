import './MSearchCategories.css'

function MSearchCategories({hero}) {

    let CategoriesToShow = []

    for(let i = 0; i < hero.length; i++){
        let cardStyle = {
            backgroundImage: `url(${hero[i].imgurl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
        let item = (<div className='MSCCard'>
            <div className='MSCInnerCard' style={cardStyle}>{hero[i].type}</div>
        </div>)
        CategoriesToShow.push(item)
    }


    return (
        <div className="MSearchCategories">
            <div className='MSCContainer'>
                {CategoriesToShow}
            </div>
        </div>
    );
}

export default MSearchCategories;