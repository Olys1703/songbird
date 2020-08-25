import React, { useContext } from 'react';
import style from './Main.module.scss';
import { BirdCard, SelectionMenu } from '../';
import { AppContext } from '../../assets/context';

export const Main = (props) => {
  const context = useContext(AppContext);
  return (
    <main className={style.main}>
      <BirdCard bird={context.bird}></BirdCard>
      <SelectionMenu birds={context.birds}></SelectionMenu>
      <BirdCard viewBird={context.viewBird}></BirdCard>
    </main>
  );
};
