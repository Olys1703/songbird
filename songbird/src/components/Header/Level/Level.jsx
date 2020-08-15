import React from 'react';
import style from './Level.module.scss';

const levels = [
  { name: 'Разминка', nameLvl: 'warmUp' },
  { name: 'Воробьинообразные', nameLvl: 'passerine' },
  { name: 'Домашние', nameLvl: 'home' },
  { name: 'Лесные', nameLvl: 'forest' },
  { name: 'Морские', nameLvl: 'marine' },
  { name: 'Ночные', nameLvl: 'night' },
  { name: 'Оседлые', nameLvl: 'sedentary' },
  { name: 'Певчие', nameLvl: 'singers' },
  { name: 'Перелетные', nameLvl: 'migratory' },
  { name: 'Хищные', nameLvl: 'predatory' },
];
export const Level = (props) => (
  <ul className={style.level}>
    {levels.map((item) => (
      <li
        key={item.nameLvl}
        className={props.activeLvl === item.nameLvl ? style.active : ''}
      >
        {item.name}
      </li>
    ))}
  </ul>
);
