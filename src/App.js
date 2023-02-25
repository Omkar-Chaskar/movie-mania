import './App.css';
import React, {useState} from 'react';
import { Navbar, Movies } from './components';
import MovieDetail from './components/MovieDetail';
import { useSelector } from 'react-redux';
import { selectMovieDetail} from "./features/detail/detailSlice";
function App() {

  const [hide, setHide] = useState(true);

  const moviesData = useSelector(selectMovieDetail);

  function handleHide(operation) {
    setHide(operation);
  }

  return (
    <div className="App">
      <Navbar />
      <Movies handleHide={handleHide}/>
      {
      !hide ? (
          <MovieDetail handleHide={handleHide} detail={moviesData} key={moviesData.id}/>
      ) : (<></>) 
      }
    </div>
  );
}

export default App;
