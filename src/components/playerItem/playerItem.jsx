import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './playerItem.module.scss';
import { selectVideo } from '../../reducers/player';

const PlayerItem = ({ player, display }) => {
  const { title, thumbnails, channelTitle, publishedAt } = player.snippet;
  const { url } = thumbnails.medium;

  const dispatch = useDispatch();

  if (display === 'grid') {
    return (
      <div className={styles.playerGridBox}>
        <img
          src={url}
          alt=""
          className={styles.thumbnails}
          onClick={() => dispatch(selectVideo(player))}
        />
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>
          <div className={styles.chnnelTitle}>{channelTitle}</div>
          <div className={styles.date}>{publishedAt.substring(0, 10)}</div>
        </div>
      </div>
    );
  }

  if (display === 'list') {
    return (
      <div className={styles.playerListBox}>
        <img
          src={url}
          alt=""
          className={styles.thumbnails}
          onClick={() => dispatch(selectVideo(player))}
        />
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.chnnelTitle}>{channelTitle}</div>
          <div className={styles.date}>{publishedAt.substring(0, 10)}</div>
        </div>
      </div>
    );
  }
};

export default PlayerItem;
