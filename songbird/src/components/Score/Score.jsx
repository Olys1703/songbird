import React from 'react';
import style from './Score.module.scss';

export const Score = (props) => (
  <span className={style.score}>Score: {props.score}</span>
);
