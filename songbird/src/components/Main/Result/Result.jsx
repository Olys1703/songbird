import React, { useContext } from 'react';
import style from './Result.module.scss';
import { AppContext } from '../../../assets/context';
import resultSound from '../../../assets/sound/result.mp3';
import img from '../../../assets/img/gennadii.jpg';

export const Result = () => {
  const maxScore = 50;
  const context = useContext(AppContext);
  new Audio(resultSound).play();
  return (
    <div className={style.result}>
      <div className={style.title}>Поздравляем!</div>
      <div className={style.score}>
        Вы прошли викторину и набрали {context.score} из {maxScore} возможных
        баллов. {context.score === maxScore ? 'Вы настоящий голубь!' : ''}
      </div>
      {context.score === maxScore ? (
        <img className={style.img} src={img} alt='gennadii golub' />
      ) : undefined}
      <hr className={style.hr} />
      <button
        className={style.reboot}
        onClick={() => {
          context.reboot();
        }}
      >
        Попробовать ещё раз!
      </button>
    </div>
  );
};
