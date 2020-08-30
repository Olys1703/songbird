import React, { createRef } from 'react';
import style from './App.module.scss';
import { Header, Main } from './components';
import { levels } from './assets/levels';
import { AppContext } from './assets/context';
import correctSound from './assets/sound/correct_answer.mp3';
import incorrectSound from './assets/sound/incorrect_answer.mp3';

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
      gameOver: false,
      score: 0,
      answerIsCorrect: false,
      missNumber: 0,
      soundRef: createRef(),
    };
    this.setViewBird = this.setViewBird.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
  }
  setViewBird(bird) {
    this.setState({ viewBird: bird });
  }
  rightAnswer = () => {
    new Audio(correctSound).play();
    const highScore = 5;
    const addScore = highScore - this.state.missNumber;
    this.setState({
      score: this.state.score + addScore,
      answerIsCorrect: true,
    });
    const play = document.querySelector('.rhap_play-pause-button');
    if (!this.state.soundRef.current.audio.current.paused) {
      play.click();
    }
  };
  wrongAnswer = () => {
    new Audio(incorrectSound).play();
    this.setState({ missNumber: this.state.missNumber + 1 });
  };
  nextLevel() {
    const currentLevelNumber = this.state.level.number;
    if (currentLevelNumber === this.state.levels.length - 1) {
      this.setState({ gameOver: true });
      return;
    }
    const levels = this.state.levels;
    const birds = levels[currentLevelNumber + 1].birds;
    this.setState({
      level: levels[currentLevelNumber + 1],
      birds: birds,
      bird: birds[Math.floor(Math.random() * birds.length)],
      viewBird: undefined,
      answerIsCorrect: false,
      missNumber: 0,
    });
  }
  reboot = () => {
    const levelNumber = 0;
    const birds = levels[levelNumber].birds;
    this.setState({
      level: levels[levelNumber],
      birds: birds,
      bird: birds[Math.floor(Math.random() * birds.length)],
      viewBird: undefined,
      gameOver: false,
      score: 0,
      answerIsCorrect: false,
      missNumber: 0,
    });
  };
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
          nextLevel: this.nextLevel,
          rightAnswer: this.rightAnswer,
          wrongAnswer: this.wrongAnswer,
          score: this.state.score,
          answerIsCorrect: this.state.answerIsCorrect,
          gameOver: this.state.gameOver,
          reboot: this.reboot,
          soundRef: this.state.soundRef,
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
