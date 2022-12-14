import { useEffect, useState } from 'react';
import Header from './components/header/header';

import PlayerList from './components/playerList/playerList';
import Loading from './components/loading/loading';
import VideoPlayer from './components/videoPlayer/videoPlayer';
import './app.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectVideo } from './reducers/player';

const App = ({ youtube }) => {
  /* State */
  const [playerList, setPlayerList] = useState([]); // 화면에 나타날 playerlist data
  const [loading, setLoading] = useState(false); // loading 중 여부

  /**reducers state */
  const darkmode = useSelector((state) => state.mode.darkmode);
  const selectedVideo = useSelector((state) => state.player.selectedVideo);

  const dispatch = useDispatch();

  /**
   * 검색 시 검색 값을 받아와서 데이터 통신을 하여 playerList 상태를 변화시키는 메서드
   * @param search : 검색 값 (검색어)
   * @return
   */
  const handleSubmit = (search) => {
    const getSearchData = async (search) => {
      setLoading(true);
      try {
        const response = await youtube.search(search);
        setPlayerList(response);
      } catch (error) {
        console.log(`error : ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getSearchData(search);
    dispatch(selectVideo(null));
  };

  /**
   * 첫 화면이 렌더링 될 때 가장 인기있는 player 25개 data를 받아와서 playerList의 상태변환하는 메서드
   * @param
   * @return
   */
  useEffect(() => {
    const getPopularData = async () => {
      setLoading(true);
      try {
        const response = await youtube.mostPopular();
        setPlayerList(response);
        setLoading(false);
      } catch (error) {
        console.log(`error : ${error}`);
      } finally {
        setLoading(false);
      }
    };
    getPopularData();
  }, []);

  /**
   * 로고 클릭 시 첫 화면으로 돌아오기
   */
  const goHome = () => {
    const getPopularData = async () => {
      setLoading(true);
      try {
        const response = await youtube.mostPopular();
        setPlayerList(response);
        setLoading(false);
      } catch (error) {
        console.log(`error : ${error}`);
      } finally {
        setLoading(false);
      }
    };
    getPopularData();

    dispatch(selectVideo(null));
  };

  if (loading === true) {
    return (
      <div className={darkmode ? 'dark' : 'light'}>
        <Header handleSubmit={handleSubmit} goHome={goHome} />
        <Loading />
      </div>
    );
  }

  return (
    <div className={darkmode ? 'dark' : 'light'}>
      <Header handleSubmit={handleSubmit} goHome={goHome} />
      {selectedVideo ? (
        <VideoPlayer list={playerList} className="videoPlayer" />
      ) : (
        <PlayerList list={playerList} display="grid" />
      )}
    </div>
  );
};

export default App;
