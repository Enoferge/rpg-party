import React from 'react'
import '../style/hero.css';
import {classLabels, skillLabels, statLabels} from '../data/Labels'
import icon from '../images/ArcherMM6_icon.png';

function Hero (props) {
    console.log("props: " + props.data.stats);
    let arrStats = Object.entries(props.data.stats);
    let arrSkills = props.data.skills;
    let heroStats = arrStats.map(element => {
        return <div className="stat-block" key={element[0]}>{statLabels[element[0]]}: {element[1]}</div>
    });

    let heroSkills = arrSkills.map(element => {
        return <div className="skill-block" key={element}>{ skillLabels[element] }</div>
    });

    let heroIcon = '';

    return (
        <div className="hero-block" onClick={props.onClick}>
            <div className="hero-main-info">
                <div className="hero-portrait">portrait</div>
                <div className="portrait-controls">
                    <div className="portrait-control-prev">prev</div>
                    <div className="portrait-control-next">next</div>
                </div>
                <div className="hero-class-icon">
                    <img src={icon} alt={props.data.class}/>
                </div>
                <div className="hero-class">{ classLabels[props.data.class] }</div>
                <div className="hero-name">{ props.data.name }</div>
            </div>
            <div className="hero-chars">
                <div className="hero-stats">
                    {heroStats}
                </div>
                <div className="hero-skills">
                    <div className="block-header">Навыки</div>
                    {heroSkills}
                </div>
            </div>
        </div>
    )
}

export default Hero