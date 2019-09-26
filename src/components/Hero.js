import React from 'react'

function Hero (props) {
    console.log("props: " + props.data.stats);
    let arr = Object.entries(props.data.stats);
    let heroStats = arr.map(element => {
        return <div className="stat-block" key={element[0]}>{element[0]}: {element[1]}</div>
    });
    return (
        <div className="hero-block">
            <div className="hero-name">{ props.data.name }</div>
            <div className="hero-class">{ props.data.class }</div>
            {heroStats}
        </div>
    )
}

export default Hero