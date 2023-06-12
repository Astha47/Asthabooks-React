import React from "react";
import './HeroSection.css';
import BackgroundImage from '../img/LastestUpdateBG/Leandika.jpg';
import TopBG from '../img/LastestUpdateBG/TopBG.jpg';
import Cover from '../img/cover/Oscillation.jpg';
import RankList from "./RankList";

const TierList = [
    ['Oscillation - Leandika', 'Oscillation.jpg'],
    ['Fundamentals of Physics', 'Halliday.png'],
    ['Rich Dad Poor Dad', 'RichDad.jpg'],['The 48 Laws of Power', 'Power.jpg'],
    ['Synthetic Memories', 'SyntheticMemories.jpg'],
    ['Synthetic Memories', 'SyntheticMemories.jpg']
];



function HeroSection(TierLists) {

    const VarStyle = {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    const TopStyle = {
        backgroundImage: `url(${TopBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    var TierRender = [];
    for (let index = 0; index < TierList.length; index++) {
        var Rank = index + 1;
        TierRender.push(<RankList rank={Rank} judul={TierList[index][0]} bg={TierList[index][1]} />);
    }

    return (
        <div className="HeroSection">
            <div className="LastestUpdate" style={VarStyle}>
                <div className="LUDesc">
                    <div className="LUHeader">New Update!</div>
                    <div className="LUTitle">Oscillation Chapter V</div>
                    <div className="LUTextContainer">
                        <div className="LUText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="LUButtonContainer">
                        <div className="LUButton">Read Now!</div>
                    </div>
                </div>
                <div className="LUImg">
                    <div className="LUCard">
                        <div className="LUImgContainer">
                            <img src={Cover} alt="Cover" />
                        </div>
                        <div className="LUNewLabel">New Update!</div>
                    </div>
                </div>
            </div>
            <div className="Recommendation" style={TopStyle}>
                <div className="RecHeader">Top Archive</div>
                <div className="RecommendationList">
                    {TierRender}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
