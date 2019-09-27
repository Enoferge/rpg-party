import React from 'react';
import './App.css';
import Hero from './components/Hero'
import heroesData from './data/HeroesData'
import classesData from './data/ClassesData'
import skillsData from './data/SkillsData'
import {classLabels, skillLabels} from './data/Labels'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heroes: heroesData,
      classes: classesData,
      skills: skillsData,
      bonusPoints: 50,
      currentHero: heroesData[0]
    };
    this.chooseHero = this.chooseHero.bind(this);
  }

  chooseHero(hero) {
    console.log("choose hero: " + hero.name);
    this.setState({
      currentHero: hero
    });
  }

  render() {
    let self = this;
    let classItems = this.state.classes.map(function(element, idx) {
      return <div className={"class-item" + (element === self.state.currentHero.class ? ' current-class-item' : '')} key={idx}>{ classLabels[element] }</div>
    });

    let skillItems = this.state.skills[this.state.currentHero.class].map(function(element, idx) {
      let isChosen = self.state.currentHero.skills.includes(element);
      console.log("self.state.currentHero.skills " + self.state.currentHero.skills);
      console.log(element + "included? " + isChosen);
      console.log("element " + element);
      return <div className={"skill-item" + (isChosen ? ' chosen-skill' : '')} key={idx}>{ skillLabels[element] }</div>
    });

    let heroItems = this.state.heroes.map(function(hero, idx) {
      return <Hero
           onClick={() => self.chooseHero(hero)}
           data={hero}
           key={idx}
      />
    });

    return (
      <div id="main-layout">
        <div id="main-layout-header">
          Создание отряда
        </div>
        <div id="main-layout-content">
          <div className="heroes-layout">
            { heroItems }
          </div>
        </div>
        <div id="classesBlock">
          <div className="block-header">Класс</div>
          <div className="class-items">
            { classItems }
          </div>
        </div>
        <div id="skillsBlock">
          <div className="block-header">Доступные навыки</div>
          <div className="skill-items">
            { skillItems }
          </div>
        </div>
        <div id="bonusBlock">
          <div className="block-header">Бонусные очки</div>
          <div>{ this.state.bonusPoints }</div>
          <button>Готово</button>
        </div>
      </div>
    );
  }
}

export default App;
