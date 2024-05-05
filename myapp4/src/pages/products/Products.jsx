import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { addToFav, removeFromFav } from '../../pages/store/slices/favMovies'

export default function Products() {
  const [products, setProducts] = useState([]);
  const language = useSelector((state) => state.language.language);
  const favMovies = useSelector((state) => state.favMovies.favMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=e745abc45c5a8b28694e3e3347259f04'
      );
      const data = await res.json();
      setProducts(data.results);
    }

    getProducts();
  }, []);

  const isFav = (movie) => favMovies.some((fav) => fav.id === movie.id);

  const ToggletoFavourits = (movie) => {
    if (isFav(movie)) {
      dispatch(removeFromFav(movie)); 
    } else {
      dispatch(addToFav(movie)); 
    }
  };

  return (
    <>
      <div dir={language === 'en' ? 'ltr' : 'rtl'}>
        <div className="container">
          <div className="row text-center my-5">
            {products.slice(0, 8).map((prd) => (
              <div className="col col-md-3" key={prd.id}>
                <img
                  style={{ width: '300px' }}
                  src={`https://image.tmdb.org/t/p/w500${prd.poster_path}`}
                  alt={prd.title}
                />
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/products/${prd.id}`}
                >
                  <h3>{prd.title}</h3>
                </Link>
                <button className='btn btn-success' onClick={() => ToggletoFavourits(prd)}>
                  {isFav(prd) ? <FaHeart /> : <CiHeart />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
