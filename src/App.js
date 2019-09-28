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
    this.chooseSkill = this.chooseSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  chooseHero(hero) {
    console.log("choose hero: " + hero.name);
    this.setState({
      currentHero: hero
    });
  }

  chooseSkill(skill) {
    console.log("choose skill: " + skill);
    this.setState(prev => {
      let newData = prev.currentHero;
      if (!newData.skills.includes(skill) && newData.skills.length < 4)
        newData.skills.push(skill);
      return {
        currentHero: newData
      }
    })
  }

  removeSkill(skill) {
    console.log("remove Skill: " + skill);
    this.setState(prev => {
      let newData = prev.currentHero;
      for (let i = 0; i < newData.skills.length; i++) {
        if (newData.skills[i] === skill) {
          newData.skills.splice(i, 1)
        }
      }
      return {
        currentHero: newData
      }
    })
  }

  render() {
    let self = this;
    let classItems = this.state.classes.map(function(element, idx) {
      return <div className={"class-item" + (element === self.state.currentHero.class ? ' current-class-item' : '')} key={idx}>{ classLabels[element] }</div>
    });

    console.log("hero item " + this.state.currentHero);
    let skillItems = this.state.skills[this.state.currentHero.class].map(function(element, idx) {
      let isChosen = self.state.currentHero.skills.includes(element);
      console.log("self.state.currentHero.skills " + self.state.currentHero.skills);
      console.log(element + "included? " + isChosen);
      console.log("element " + element);
      return <div className={"skill-item" + (isChosen ? ' chosen-skill' : '')} key={idx} onClick={() => self.chooseSkill(element)}>{ skillLabels[element] }</div>
    });

    let heroItems = this.state.heroes.map(function(hero, idx) {
      return <Hero
           onClick={() => self.chooseHero(hero)}
           removeSkill={ self.removeSkill }
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
