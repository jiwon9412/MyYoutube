import SearchInput from './components/searchInput';

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header style={{ height: '35px', width: '100%' }}>
      <SearchInput handleSubmit={handleSubmit} />
    </header>
  );
};

export default App;
