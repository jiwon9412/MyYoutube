import { useEffect, useState } from 'react';
import Header from './components/header';
import axios from 'axios';
import PlayerList from './components/playerList';
import Loading from './components/loading';
import './app.css';
import { useSelector } from 'react-redux';

const App = () => {
  /* fetch url */
  const baseUrl = 'https://www.googleapis.com/youtube/v3/';

  /* State */
  const [playerList, setPlayerList] = useState([]); // 화면에 나타날 playerlist data
  const [loading, setLoading] = useState(false); // loading 중 여부

  /**reducers state */
  const darkmode = useSelector((state) => state.mode.darkmode);

  /**
   * 검색 시 검색 값을 받아와서 데이터 통신을 하여 playerList 상태를 변화시키는 메서드
   * @param search : 검색 값 (검색어)
   * @return
   */
  const handleSubmit = (search) => {
    console.log(search);
    const fetchSearch = async (search) => {
      setLoading(true);
      try {
        const response = await axios.get(
          baseUrl +
            'search?part=snippet&maxResults=25&key=AIzaSyA8pVOkvY3H29QtW2FWW9o-hBKOwq6JflM&q=' +
            search,
        );
        console.log(response.data.items);
        setPlayerList(response.data.items);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch(search);
  };

  /**
   * 첫 화면이 렌더링 될 때 가장 인기있는 player 25개 data를 받아와서 playerList의 상태변환하는 메서드
   * @param
   * @return
   */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          baseUrl +
            'videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyA8pVOkvY3H29QtW2FWW9o-hBKOwq6JflM',
        );
        setPlayerList(response.data.items);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /**
   * 로고 클릭 시 첫 화면으로 돌아오기
   */
  const goHome = () => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          baseUrl +
            'videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyA8pVOkvY3H29QtW2FWW9o-hBKOwq6JflM',
        );
        setPlayerList(response.data.items);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
      <PlayerList list={playerList} />
    </div>
  );
};

export default App;
