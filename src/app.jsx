import { useEffect, useState } from 'react';
import Header from './components/header';
import axios from 'axios';

const App = () => {
  const [mode, setMode] = useState('light');
  const [playerList, setPlayerList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get(
        'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=50&key=AIzaSyA8pVOkvY3H29QtW2FWW9o-hBKOwq6JflM',
      )
      .then((response) => setPlayerList(response.data.items));
  }, []);

  return <Header handleSubmit={handleSubmit} mode={mode} />;
};

export default App;
