import React from 'react';
import style from './App.module.scss';
import { Header, Main } from './components';
import { levels } from './assets/levels';
import { AppContext } from './assets/context';

class App extends React.Component {
  constructor() {
    super();
    const levelNumber = 0;
    const birds = levels[levelNumber].birds;
    this.state = {
      levels: levels,
      level: levels[levelNumber],
      birds: birds,
      bird: birds[Math.floor(Math.random() * birds.length)],
      viewBird: undefined,
    };
    this.setViewBird = this.setViewBird.bind(this);
  }
  setViewBird(bird) {
    this.setState({ viewBird: bird });
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          level: this.state.level,
          levels: this.state.levels,
          birds: this.state.birds,
          bird: this.state.bird,
          viewBird: this.state.viewBird,
          setViewBird: this.setViewBird,
        }}
      >
        <div className={style.app}>
          <Header />
          <Main />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
