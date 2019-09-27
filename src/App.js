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
      bonusPoints: 50
    };
  }

  render() {
    let classItems = this.state.classes.map(function(element, idx) {
      return <div className="class-item" key={idx}>{element}</div>
    });
    let skillItems = this.state.skills.paladin.map(function(element, idx) {
      return <div className="skill-item" key={idx}>{element}</div>
    });
    console.log("party hero1 " + this.state.heroes.party.hero1);

    return (
      <div id="main-layout">
        <div id="main-layout-header">
          Создание отряда
        </div>
        <div id="main-layout-content">
          <div className="heroes-layout">
            <Hero
                data={this.state.heroes.party.hero1}
            />
            <Hero
                data={this.state.heroes.party.hero2}
            />
            <Hero
                data={this.state.heroes.party.hero3}
            />
            <Hero
                data={this.state.heroes.party.hero4}
            />
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
