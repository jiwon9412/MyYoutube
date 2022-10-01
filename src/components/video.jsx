import React from 'react';
import styles from './video.module.scss';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Video = () => {
  /**state */
  const [more, setMore] = useState(false); //더보기 버튼 눌렀는지 여부

  /**reducer state */
  const selectedVideo = useSelector((state) => state.player.selectedVideo);

  const { title, channelTitle, tags, description } = selectedVideo.snippet;

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  let id = '';
  if (selectedVideo.id.videoId) {
    id = selectedVideo.id.videoId;
  } else {
    id = selectedVideo.id;
  }

  //console.log(id);

  /**
   * 더보기 클릭 시 description 나머지 내용 보여주기
   */
  const clickMore = () => {
    setMore(!more);
  };

  return (
    <div className={styles.videoBox}>
      <div className={styles.player}>
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="600"
          src={'https://www.youtube.com/embed/' + id + '?autoplay=1'}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.contents}>
        <div>
          {tags &&
            tags
              .filter((tag, index) => index < 5)
              .map((tag) => <span className={styles.tag}>{'#' + tag}</span>)}
        </div>
        <div className={styles.title}>{title}</div>
        <div>{channelTitle}</div>
        <hr />
        <div className={styles.description}>
          {description.length > 200
            ? description.substring(0, 200)
            : description}
          {description.length > 200 && !more ? (
            <span className={styles.more} onClick={clickMore}>
              더보기
            </span>
          ) : (
            ''
          )}
          {description.length > 200 && more
            ? description.substring(200, description.length)
            : ''}
          {description.length > 200 && more ? (
            <span className={styles.briefly} onClick={clickMore}>
              간략히
            </span>
          ) : (
            ''
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Video;
