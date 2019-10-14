import React from 'react'
import '../style/hero.css';
import { skillLabels, statLabels } from '../data/Labels'
import baseStats from '../data/StatsData'

import HeroMainInfoBlock from "./HeroMainInfoBlock";

function Hero (props) {
    console.log("props: " + props.data.stats);
    function removeSkill(element, idx) {
        if (props.currentId+1 === props.data.id && idx > 1)
            props.removeSkill(element);
    }

    function increaseStat(element) {
        if (props.currentId+1 === props.data.id)
            props.increaseStat(element);
    }

    function decreaseStat(element) {
        console.log("hero dec");
        if (props.currentId+1 === props.data.id)
            props.decreaseStat(element);
    }


    let arrStats = Object.entries(props.data.stats);
    console.log("arrStats: " + arrStats[0]);
    let arrSkills = props.data.skills;
    let heroStats = arrStats.map(element => {
        let baseStatBalue = baseStats[props.data.class][element[0]];
        return <div className={"stat-block"} key={element[0]}>
            <img className="btn-img stat-img" src={require(`../images/StatArrowLeft.png`)} alt="previous" width="50%" onClick={() => decreaseStat(element)}/>
            <div className={baseStatBalue > element[1] ? ' decreased-stat' : '' + baseStatBalue < element[1] ? ' increased-stat' : ''}>
                <span>{statLabels[element[0]]}:</span> <span>{element[1]}</span>
            </div>
            <img className="btn-img stat-img" src={require(`../images/StatArrowRight.png`)} alt="previous" width="50%" onClick={() => increaseStat(element)}/>
        </div>
    });

    let heroSkills = arrSkills.map((element, idx) => {
        return <div className={"skill-block" + (idx > 1 ? ' extra-skill' : '')} key={idx}><span onClick={() => removeSkill(element, idx)}>{ skillLabels[element] }</span></div>
    });
    let emptySkills = [];
    for (let i = 0; i < 4 - arrSkills.length; i++) {
        emptySkills.push(<div className="skill-block extra-skill" key={i}>Нет</div> )
    }

    return (
        <div className={"hero-block" + (props.currentId+1 === props.data.id ? ' current-hero-block' : '')}>
            <HeroMainInfoBlock
                data={props.data}
                changeData={props.changeData}
                currentPortrait={props.data.portrait}
                chooseHero={props.chooseHero}
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