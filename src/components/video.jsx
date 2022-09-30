import React from 'react';
import styles from './video.module.scss';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';

const Video = () => {
  /**reducer state */
  const selectedVideo = useSelector((state) => state.player.selectedVideo);

  const { title, channelTitle, tags, description } = selectedVideo.snippet;

  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const { id } = selectedVideo;
  console.log(id);

  return (
    <div className="videoBox">
      <YouTube videoId={id} opts={opts} className={styles.video} />
      <div className={styles.description}>
        <div>{title}</div>
        <div>{channelTitle}</div>
        <div>{}</div>
        <div>
          {description.length > 200
            ? description.substring(0, 200) + '......'
            : description}
        </div>
      </div>
    </div>
  );
};

export default Video;
