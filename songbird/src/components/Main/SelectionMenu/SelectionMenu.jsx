import React, { useContext } from 'react';
import style from './SelectionMenu.module.scss';
import { AppContext } from '../../../assets/context';

export const SelectionMenu = (props) => {
  const context = useContext(AppContext);
  return (
    <ul className={style['answer-board']}>
      {props.birds.map((item) => (
        <li
          key={item.tranlate}
          onClick={() => {
            context.setViewBird(item);
          }}
        >
          <span className={style.led}></span>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
