import React, { useContext, useState, useEffect } from 'react';
import style from './SelectionMenu.module.scss';
import { AppContext } from '../../../assets/context';

export const SelectionMenu = (props) => {
  const context = useContext(AppContext);
  const [answerState, setAnswerState] = useState([]);
  useEffect(() => {
    console.log(context.bird.name);
    setAnswerState(
      props.birds.concat().map((item) => {
        item.state = 'default';
        return item;
      })
    );
  }, [props.birds]);
  function checkAnswer(bird) {
    if (context.answerIsCorrect) {
      return;
    }
    const birds = [...answerState];
    const checkBird = birds.find((item) => item.name === bird.name);
    if (bird.name === context.bird.name) {
      if (checkBird.state !== 'true') {
        context.rightAnswer();
      }
      checkBird.state = 'true';
    } else {
      if (checkBird.state !== 'false') {
        context.wrongAnswer();
      }
      checkBird.state = 'false';
    }

    setAnswerState(birds);
  }
  return (
    <ul className={style['answer-board']}>
      {answerState.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            context.setViewBird(item);
            checkAnswer(item);
          }}
        >
          <span className={`${style.led} ${style[item.state]}`}></span>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
