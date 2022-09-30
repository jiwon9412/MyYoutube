import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './playerItem.module.css';
import { selectVideo } from '../reducers/player';

const PlayerItem = ({ player }) => {
  const { title, thumbnails, channelTitle, publishedAt } = player.snippet;
  const { url } = thumbnails.medium;

  const dispatch = useDispatch();

  return (
    <div className={styles.playerBox}>
      <img
        src={url}
        alt=""
        className={styles.thumbnails}
        onClick={() => dispatch(selectVideo(player))}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        <div className="chnnelTitle">{channelTitle}</div>
        <div className="date">{publishedAt.substring(0, 10)}</div>
      </div>
    </div>
  );
};

export default PlayerItem;
