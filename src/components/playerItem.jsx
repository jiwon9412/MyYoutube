import React from 'react';
import styles from './playerItem.module.css';

const PlayerItem = ({ player }) => {
  const { title, thumbnails, channelTitle, publishedAt } = player.snippet;
  const { url, width, height } = thumbnails.medium;
  return (
    <div className={styles.playerBox}>
      <img src={url} alt="" className={styles.thumbnails} />
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        <div className="chnnelTitle">{channelTitle}</div>
        <div className="date">{publishedAt.substring(0, 10)}</div>
      </div>
    </div>
  );
};

export default PlayerItem;
