import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getMovie} from '../features/movie/movieSlice';
import { FcSearch } from 'react-icons/fc';

function Navbar() {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();

    const submitHnadler = (e) => {
        e.preventDefault();
        dispatch(getMovie(term));
    }
  return (
    <div className='header'>
        <h1>Movie Mania</h1>
        <form className='search-bar' onSubmit={submitHnadler}>
        <input className='search-input' type="text" placeholder='Search for a Movie...'
         value={term} onChange={(e)=> setTerm(e.target.value)}/>
        <button className='search-btn' type='submit'><FcSearch /></button>
        </form>
    </div>
  )
}

export default Navbar