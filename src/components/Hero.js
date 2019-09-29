import React from 'react'
import '../style/hero.css';
import {classLabels, skillLabels, statLabels} from '../data/Labels'

function Hero (props) {
    console.log("props: " + props.data.stats);
    function removeSkill(event, element, idx) {
        event.stopPropagation();
        if (idx > 1)
            props.removeSkill(element);
    }

    let arrStats = Object.entries(props.data.stats);
    let arrSkills = props.data.skills;
    let heroStats = arrStats.map(element => {
        return <div className="stat-block" key={element[0]}><span>{statLabels[element[0]]}:</span> <span>{element[1]}</span></div>
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
            <div className="hero-main-info">
                <div className="hero-portrait">
                    <img className="hero-portrait-img" src={require(`../images/MaleA01.png`)} alt="portrait" width="80%"/>
                </div>
                <div className="portrait-controls">
                    <div className="portrait-control-prev">
                        <img className="btn-img portrait-control-btn" src={require(`../images/BtnArrowLeft.png`)} alt="previous" width="80%"/>
                    </div>
                    <div className="portrait-control-next">
                        <img className="btn-img portrait-control-btn" src={require(`../images/BtnArrowRight.png`)} alt="next" width="80%"/>
                    </div>
                </div>
                <div className="hero-class-icon">
                    <img className="hero-class-icon-img" src={require(`../images/${props.data.class}MM6_icon.png`)} alt={props.data.class} width="80%"/>
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
                    {emptySkills}
                </div>
            </div>
        </div>
    )
}

export default Hero