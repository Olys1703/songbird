import React, { useContext } from 'react';
import style from './BirdCard.module.scss';
import img from '../../../assets/img/silhouette_bird.jpg';
import AudioPlayer from 'react-h5-audio-player';
import { AppContext } from '../../../assets/context';
import 'react-h5-audio-player/src/styles.scss';
import './player.scss';

export const BirdCard = (props) => {
  const context = useContext(AppContext);
  if (!props.bird) {
    return (
      <div className={style.card}>
        Послушайте плеер. Выберите птицу из списка
      </div>
    );
  }
  if (props.view) {
    return (
      <div className={style.card}>
        <div className={style.row}>
          <img className={style.img} src={props.bird.image} alt='bird' />
          <div className={style.container}>
            <h4 className={style.title}>{props.bird.name}</h4>
            <div className={style.translate}>{props.bird.translate}</div>
            <AudioPlayer
              src={props.bird.sound}
              autoPlayAfterSrcChange={false}
              onPlay={(e) => console.log('onPlay')}
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.about}>{props.bird.about}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.card}>
      <div className={style.row}>
        <img
          className={style.img}
          src={props.answerIsCorrect ? props.bird.image : img}
          alt='bird'
        />
        <div className={style.container}>
          <h4 className={style.title}>
            {props.answerIsCorrect ? props.bird.name : '******'}
          </h4>
          <AudioPlayer
            ref={context.soundRef}
            src={props.bird.sound}
            autoPlayAfterSrcChange={false}
          />
        </div>
      </div>
    </div>
  );
};
