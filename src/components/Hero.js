import React from 'react'
import '../style/hero.css';
import { skillLabels, statLabels } from '../data/Labels'

import HeroMainInfoBlock from "./HeroMainInfoBlock";

function Hero (props) {
    console.log("props: " + props.data.stats);
    function removeSkill(event, element, idx) {
        event.stopPropagation();
        if (idx > 1)
            props.removeSkill(element);
    }

    function increaseStat(event, element) {
        event.stopPropagation();
        props.increaseStat(element);
    }


    let arrStats = Object.entries(props.data.stats);
    let arrSkills = props.data.skills;
    let heroStats = arrStats.map(element => {
        return <div className="stat-block" key={element[0]}>
            <img className="btn-img stat-img" src={require(`../images/StatArrowLeft.png`)} alt="previous" width="50%" onClick={props.decreaseStat(element)}/>
            <span>{statLabels[element[0]]}:</span> <span>{element[1]}</span>
            <img className="btn-img stat-img" src={require(`../images/StatArrowRight.png`)} alt="previous" width="50%" onClick={(e) => increaseStat(e, element)}/>
        </div>
    });

    let heroSkills = arrSkills.map((element, idx) => {
        return <div className={"skill-block" + (idx > 1 ? ' extra-skill' : '')} key={idx}><span onClick={(e) => removeSkill(e, element, idx)}>{ skillLabels[element] }</span></div>
    });
    let emptySkills = [];
    for (let i = 0; i < 4 - arrSkills.length; i++) {
        emptySkills.push(<div className="skill-block extra-skill" key={i}>Нет</div> )
    }

    return (
        <div className="hero-block" onClick={props.onClick}>
            <HeroMainInfoBlock
                data={props.data}
                changeData={props.changeData}
                currentPortrait={props.data.portrait}
            />
            <div className="hero-chars">
                <div className="hero-stats">
                    {heroStats}
                </div>
                <div className="hero-skills">
                    <div className="block-header">Навыки</div>
                    {heroSkills}
                    {emptySkills}
                </div>
            </div>
        </div>
    )
}

export default Hero