import React from 'react';
import styles from './videoPlayer.module.scss';
import Video from '../video/video';
import PlayerList from '../playerList/playerList';

const VideoPlayer = ({ list }) => {
  return (
    <div className={styles.videoPlayerBox}>
      <div className={styles.video}>
        <Video />
      </div>

      <div className={styles.list}>
        <PlayerList list={list} display="list" />
      </div>
    </div>
  );
};

export default VideoPlayer;
