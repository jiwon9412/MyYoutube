import { useEffect, useState } from 'react';
import Header from './components/header';
import axios from 'axios';
import PlayerList from './components/playerList';

const App = () => {
  /* State */
  const [mode, setMode] = useState('light'); // dark mode, light mode
  const [playerList, setPlayerList] = useState([]); // 화면에 나타날 playerlist data
  const [loading, setLoading] = useState(false); // loading 중 여부

  /**
   * 검색 시 검색 값을 받아와서 데이터 통신을 하여 playerList 상태를 변화시키는 메서드
   * @param search : 검색 값 (검색어)
   * @return
   */
  const handleSubmit = (search) => {
    //console.log('search : ' + search);
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
          'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyA8pVOkvY3H29QtW2FWW9o-hBKOwq6JflM',
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

  if (loading === true) {
    return (
      <>
        <Header handleSubmit={handleSubmit} mode={mode} />
        <div>로딩중...</div>
      </>
    );
  }

  return (
    <>
      <Header handleSubmit={handleSubmit} mode={mode} />
      <PlayerList list={playerList} />
    </>
  );
};

export default App;
