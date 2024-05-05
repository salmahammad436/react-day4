import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../../pages/store/slices/language';
import { FaHeart } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('products');
  };

  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const changeLang = () => {
    dispatch(changeLanguage((language==='ar')?'en':'ar'));
  };



  const goToFav=()=>{
    navigate('fav')
  }

  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home" className="py-4 bg-light">
        <Nav.Item>
          <NavLink to="/home">Home</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/register">Register</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/aboutus">AboutUs</NavLink>
        </Nav.Item>
        <Nav.Item>
          <button onClick={goToProducts} className="btn btn-success mx-2">
            products
          </button>
          <button onClick={changeLang} className="btn btn-success mx-2">
            changeLang
          </button>
          <button onClick={goToFav}><FaHeart /></button>
          <div>{language}</div>
        </Nav.Item>
      </Nav>
    </>
  );
}