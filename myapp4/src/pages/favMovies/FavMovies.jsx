import React from 'react';
import { useSelector } from 'react-redux';

export default function FavMovies() {
  const favMovies = useSelector((state) => state.favMovies.favMovies);
const language=useSelector(state=>state.language.language)
  return (
    <>
      <div dir={language==='en'?('ltr'):('rtl')} className="container">
        <div className="row">
        {favMovies.length === 0 ? (
          <h3 style={{textAlign:'center'}}>No data</h3>
        ) : (
          favMovies.map((movie) => (
            <div  key={movie.id} className='col-md-4 my-4 '>
              <img style={{ width: '300px' }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <h3 style={{width:'300px',textAlign:'center'}}>{movie.title}</h3>
            </div>
          ))
        )}
      </div></div>
    </>
  );
}
