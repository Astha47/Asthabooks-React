import './MSearchCategories.css'
import {useNavigate } from 'react-router-dom'

function MSearchCategories({hero}) {

    const navigate = useNavigate();

    let CategoriesToShow = []

    for(let i = 0; i < hero.length; i++){
        let cardStyle = {
            backgroundImage: `url(${hero[i].imgurl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }


        let keyword = '/tab/'
        for (let j = 0; j < hero[i].type.length; j++){
            if (hero[i].type[j] === ' '){
                keyword += '-'
            } else {
                keyword += hero[i].type[j]
            }
        }


        let item = (<div className='MSCCard'>
            <div className='MSCInnerCard' style={cardStyle} onClick={() => navigate(keyword)} >{hero[i].type} </div>
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