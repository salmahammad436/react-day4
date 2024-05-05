import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductId() {
   const { productId } = useParams();
   const [product, setProduct] = useState({});

   useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${productId}?api_key=e745abc45c5a8b28694e3e3347259f04`)
         .then((res) => {
        setProduct(res.data);
         })
         .catch(err => console.log(err));
   }, []);

   return (
      <>
         {product.poster_path && (
            <img
               style={{ width: '300px', alignContent: 'center' ,paddingTop:'15px'}}
               src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
               alt={product.original_title}
            />
         )}
          <h3 style={{width:'300px',textAlign:'center'}}>{product.original_title}</h3>
      </>
   );
}