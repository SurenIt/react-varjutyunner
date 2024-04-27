import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './fetchdata';
import { DataApi } from './components/dataApi';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <DataApi/>
    </div>
  );
}

export default App;
