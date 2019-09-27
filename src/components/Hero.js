import React from 'react'

function Hero (props) {
    console.log("props: " + props.data.stats);
    let arr = Object.entries(props.data.stats);
    let heroStats = arr.map(element => {
        return <div className="stat-block" key={element[0]}>{element[0]}: {element[1]}</div>
    });

    function firstLetterUpper(word) {
        return word[0].toUpperCase() +
            word.slice(1);
    }

    return (
        <div className="hero-block" onClick={props.onClick}>
            <div className="hero-name">{ props.data.name }</div>
            <div className="hero-class">{ firstLetterUpper(props.data.class) }</div>
            {heroStats}
        </div>
    )
}

export default Hero