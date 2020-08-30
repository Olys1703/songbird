import React, { useContext } from 'react';
import style from './Main.module.scss';
import { BirdCard, SelectionMenu, Result } from '../';
import { AppContext } from '../../assets/context';

export const Main = (props) => {
  const context = useContext(AppContext);
  if (context.gameOver) {
    return <Result />;
  }
  return (
    <main className={style.main}>
      <BirdCard
        bird={context.bird}
        answerIsCorrect={context.answerIsCorrect}
      ></BirdCard>
      <div className={style.row}>
        <div className={style['answer-wrapper']}>
          <SelectionMenu birds={context.birds}></SelectionMenu>
        </div>
        <div className={style['card-wrapper']}>
          <BirdCard bird={context.viewBird} view={true}></BirdCard>
        </div>
      </div>
      <button
        className={`${style.next} ${
          context.answerIsCorrect ? style.active : ''
        }`}
        onClick={() => {
          if (!context.answerIsCorrect) {
            return;
          }
          context.nextLevel();
        }}
      >
        Next
      </button>
    </main>
  );
};
