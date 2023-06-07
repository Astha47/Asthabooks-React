import React from 'react';
import './RankList.css';

const RankList = ({ rank, judul, bg }) => {
  let TierContainerClass = '';
  let TitleContainerClass = '';
  let background = './img/' + bg;

  if (rank === 1) {
    TierContainerClass = 'RLTierContainer1';
    TitleContainerClass = 'RLTitleContainer1';
  } else if (rank === 2) {
    TierContainerClass = 'RLTierContainer2';
    TitleContainerClass = 'RLTitleContainer2';
  } else if (rank === 3) {
    TierContainerClass = 'RLTierContainer3';
    TitleContainerClass = 'RLTitleContainer3';
  } else {
    TierContainerClass = 'RLTierContainer';
    TitleContainerClass = 'RLTitleContainer';
  }

  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="RankItem">
      <div className={TierContainerClass}>
        <div className="RLTier">{rank}</div>
      </div>
      <div className={TitleContainerClass} style={divStyle}>
        <div className='RLTitleDark'>
          <div className="RLTitle">{judul}</div>
        </div>
      </div>
    </div>
  );
};

export default RankList;
