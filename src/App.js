import React from 'react';
import './App.css';
import Hero from './components/Hero'
import heroesData from './data/HeroesData'
import classesData from './data/ClassesData'
import skillsData from './data/SkillsData'

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
      return <div className={"class-item" + (element.toLowerCase() === self.state.currentHero.class ? ' current-class-item' : '')} key={idx}>{element}</div>
    });

    let skillItems = this.state.skills[this.state.currentHero.class].map(function(element, idx) {
      return <div className="skill-item" key={idx}>{element}</div>
    });

    let heroItems = this.state.heroes.map(function(hero) {
      return <Hero
           onClick={() => self.chooseHero(hero)}
           data={hero}
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
