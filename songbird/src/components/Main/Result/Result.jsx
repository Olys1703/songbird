import React, { useContext } from 'react';
import style from './Result.module.scss';
import { AppContext } from '../../../assets/context';
import resultSound from '../../../assets/sound/result.mp3';

export const Result = () => {
  const context = useContext(AppContext);
  new Audio(resultSound).play();
  return (
    <div className={style.result}>
      <div className={style.title}>Поздравляем!</div>
      <div className={style.score}>
        Вы прошли викторину и набрали {context.score} из 50 возможных баллов
      </div>
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
