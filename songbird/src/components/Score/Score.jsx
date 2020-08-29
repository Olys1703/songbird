import React from 'react';
import style from './Score.module.scss';
import { AppContext } from '../../assets/context';

export const Score = (props) => (
  <AppContext.Consumer>
    {(value) => <span className={style.score}>Score: {value.score}</span>}
  </AppContext.Consumer>
);
