import React, { useState } from 'react';
import style from './BirdCard.module.scss';
import img from '../../../assets/img/silhouette_bird.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './player.scss';

export const BirdCard = (props) => {
  let bird = props.viewBird ? props.viewBird : props.bird;
  if (!bird) {
    return (
      <div className={style['bird-card']}>
        Послушайте плеер. Выберите птицу из списка
      </div>
    );
  }

  return (
    <div className={style['bird-card']}>
      <img
        className={style.img}
        src={
          props.viewBird
            ? props.viewBird.image
            : props.answerIsCorrect
            ? bird.image
            : img
        }
        alt='bird image'
      />
      <div className={style.container}>
        <h4 className={style.title}>
          {props.viewBird
            ? props.viewBird.name
            : props.answerIsCorrect
            ? bird.name
            : '******'}
        </h4>
        <AudioPlayer
          src={bird.sound}
          autoPlayAfterSrcChange={false}
          onPlay={(e) => console.log('onPlay')}
        />
      </div>
    </div>
  );
};
