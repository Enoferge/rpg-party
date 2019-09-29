import React, { Component } from 'react';
import {classLabels} from "../data/Labels";
import portraitsData from "../data/Portraits"

class HeroMainInfoBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portraits: portraitsData,
            currentPortraitIndex: props.currentPortrait,
            hero: props.data
        };
        this.choosePrevPortrait = this.choosePrevPortrait.bind(this);
        this.chooseNextPortrait = this.chooseNextPortrait.bind(this)
    }

    choosePrevPortrait(event) {
        event.stopPropagation();
        this.setState(prevState => ({
            currentPortraitIndex: prevState.currentPortraitIndex <= 0 ?
                prevState.portraits.length -1 : prevState.currentPortraitIndex - 1
        }));
        this.props.changeData(this.state.currentPortraitIndex - 1)
    }

    chooseNextPortrait(event) {
        event.stopPropagation();
        this.setState(prevState => ({
            currentPortraitIndex: prevState.currentPortraitIndex >= prevState.portraits.length -1 ?
                0 : prevState.currentPortraitIndex + 1,
        }));
        /*this.props.changeData(this.state.portraits[this.state.currentPortraitIndex + 1].name)*/
        this.props.changeData(this.state.currentPortraitIndex + 1)
    }

    render() {
        return (
            <div className="hero-main-info">
                <div className="hero-portrait">
                    <img className="hero-portrait-img" src={this.state.portraits[this.state.currentPortraitIndex].image} alt="portrait" width="80%"/>
                </div>
                <div className="portrait-controls">
                    <div className="portrait-control-prev" onClick={(e) => this.choosePrevPortrait(e)}>
                        <img className="btn-img portrait-control-btn" src={require(`../images/BtnArrowLeft.png`)} alt="previous" width="80%"/>
                    </div>
                    <div className="portrait-control-next" onClick={(e) => this.chooseNextPortrait(e)}>
                        <img className="btn-img portrait-control-btn" src={require(`../images/BtnArrowRight.png`)} alt="next" width="80%"/>
                    </div>
                </div>
                <div className="hero-class-icon">
                    <img className="hero-class-icon-img" src={require(`../images/${this.state.hero.class}MM6_icon.png`)} alt={this.state.hero.class} width="80%"/>
                </div>
                <div className="hero-class">{ classLabels[this.state.hero.class] }</div>
                <div className="hero-name">{ this.state.hero.name }</div>
            </div>
        );
    }
}

export default HeroMainInfoBlock