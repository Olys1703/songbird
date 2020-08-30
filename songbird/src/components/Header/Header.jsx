import React from 'react';
import logo from '../../assets/img/logo.svg';
import style from './Header.module.scss';
import { Score } from '../';
import { Level } from './Level/Level';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={`${style.row} ${style.spaceBetween}`}>
        <img className={style.logo} src={logo} alt='logo' />
        <Score score={0} />
      </div>
      <div className={style.row}>
        <Level activeLvl='warmUp' />
      </div>
    </header>
  );
};
