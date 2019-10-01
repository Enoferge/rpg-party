import React from 'react';
import './App.css';
import Hero from './components/Hero'
import heroesData from './data/HeroesData'
import classesData from './data/ClassesData'
import {skills, baseSkills } from "./data/SkillsData"
import {classLabels, skillLabels} from './data/Labels'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heroes: heroesData,
      classes: classesData,
      skills: skills,
      bonusPoints: 50,
      currentId: 0
    };

    this.chooseHero = this.chooseHero.bind(this);
    this.chooseSkill = this.chooseSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.chooseClass = this.chooseClass.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.changeData = this.changeData.bind(this);
    this.increaseStat = this.increaseStat.bind(this);
    this.decreaseStat = this.decreaseStat.bind(this);
  }

  showInfo() {
      console.log("show current hero class:  " + this.state.heroes[this.state.currentId].class);
  }

  chooseHero(idx) {
    this.setState({
      currentId: idx
    });
  }

  chooseClass(className) {
      console.log("choose className: " + className);
      this.setState(prev => {
          let currentHero = prev.heroes[prev.currentId];
          let updatedHeroes = prev.heroes;
          if (currentHero.class !== className) {
              currentHero.class = className;
              currentHero.skills = [...baseSkills[className]]
          }
          updatedHeroes[prev.currentId] = currentHero;
          return {
              heroes: updatedHeroes
          }
      })
  }

  chooseSkill(skill) {
    console.log("choose skill: " + skill);
    this.setState(prev => {
        let currentHero = prev.heroes[prev.currentId];
        let updatedHeroes = prev.heroes;
        if (!currentHero.skills.includes(skill) && currentHero.skills.length < 4)
            currentHero.skills.push(skill);
        updatedHeroes[prev.currentId] = currentHero;
        return {
          heroes: updatedHeroes
        }
    })
  }

  removeSkill(skill) {
    console.log("remove Skill: " + skill);
    this.setState(prev => {
        let currentHero = prev.heroes[prev.currentId];
        let updatedHeroes = prev.heroes;
        for (let i = 0; i < currentHero.skills.length; i++) {
            if (currentHero.skills[i] === skill) {
            currentHero.skills.splice(i, 1)
            }
        }
        updatedHeroes[prev.currentId] = currentHero;
        return {
            heroes: updatedHeroes
        }
    })
  }

  changeData(portrait) {
      console.log("changeData: " + portrait);
      this.setState(prev => {
          let currentHero = prev.heroes[prev.currentId];
          let updatedHeroes = prev.heroes;
          currentHero.portrait = portrait;
          updatedHeroes[prev.currentId] = currentHero;
          return {
              heroes: updatedHeroes
          }
      })
  }

  increaseStat(stat) {
      if (this.state.bonusPoints > 0) {
        this.setState(prev => {
            let currentHero = prev.heroes[prev.currentId];
            let updatedHeroes = prev.heroes;
            currentHero.stats[stat[0]] += 1;
            updatedHeroes[prev.currentId] = currentHero;
            return {
                heroes: updatedHeroes,
                bonusPoints: prev.bonusPoints - 1
            }
        })
      }
  }

    decreaseStat(stat) {
        if (this.state.bonusPoints > 0) {

        }
    }

  render() {
    let self = this;
    const currentHero = self.state.heroes[self.state.currentId]
    let classItems = this.state.classes.map(function(element, idx) {
        return <div className={"class-item" + (element === currentHero.class ? ' current-class-item' : '')} key={idx}><span onClick={() => self.chooseClass(element)}>{ classLabels[element] }</span></div>
    });

    console.log("hero item " + currentHero);
    let skillItems = this.state.skills[currentHero.class].map(function(element, idx) {
      let isChosen = currentHero.skills.includes(element);
        return <div className={"skill-item" + (isChosen ? ' chosen-skill' : '')} key={idx}><span onClick={() => self.chooseSkill(element)}>{ skillLabels[element] }</span></div>
    });

    let heroItems = this.state.heroes.map(function(hero, idx) {
      return <Hero
           onClick={() => self.chooseHero(idx)}
           data={hero}
           removeSkill={ self.removeSkill }
           increaseStat={ self.increaseStat }
           decreaseStat={ self.decreaseStat }
           changeData={self.changeData}
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
            <div className="bonus-points">{ this.state.bonusPoints }</div>
{/*          <button onClick={self.showInfo}>Готово</button>*/}
            <div className="btn-block">
                <img className="btn-img" src={require("./images/BtnYes.png")} alt="create party"/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
