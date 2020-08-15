import React from 'react';
import style from './App.module.scss';
import { Header, Main } from './components';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
