import React from 'react';
import './App.css';
import Hero from './components/Hero'
import heroesData from './data/HeroesData'

class App extends React.Component {
  constructor() {
    super();
    this.state = heroesData;
  }
  render() {
    let classesBlock = this.state.classes.map(function(element, idx) {
      return <div className="class-block" key={idx}>{element}</div>
    });
    console.log("party hero1 " + this.state.party.hero1);

    return (
        <div className="main-layout">
          <div className="main-layout-header">
            Создание отряда
          </div>
          <div className="main-content">
            <div className="heroes-layout">
              <Hero
                  data={this.state.party.hero1}
              />
              <Hero
                  data={this.state.party.hero2}
              />
              <Hero
                  data={this.state.party.hero3}
              />
              <Hero
                  data={this.state.party.hero4}
              />
            </div>
            <div className="options-layout">
              <div className="classes">
                { classesBlock }
              </div>
              <div className="skills">

              </div>
              <div className="bonus">
                <div>Бонусные очки</div>
                <div>{ this.state.bonusPoints }</div>
              </div>
            </div>
          </div>
          <div className="main-layout-footer">
            <button>Готово</button>
          </div>
        </div>
    );
  }
}

export default App;
