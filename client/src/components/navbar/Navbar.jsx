import {
  KeyboardArrowDown,
  Search,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { useState } from 'react';
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';


const Navbar = () => {

  const [cartOpen, setCartOpen] = useState(false);

  const products = useSelector(state => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="https://cdn.pixabay.com/photo/2016/05/30/15/33/julia-roberts-1424985_1280.png"
              alt=""
            />
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <span>WON</span>
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <Link to="/products/cat" className="link">
              Women
            </Link>
            <Link to="/products/cat2" className="link">
              Men
            </Link>
            <Link to="/products/cat3" className="link">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link">
            Hopago
          </Link>
        </div>
        <div className="right">
          <Link to="/" className="link">
            Homepage
          </Link>
          <Link to="/" className="link">
            About
          </Link>
          <Link to="/" className="link">
            Contact
          </Link>
          <Link to="/" className="link">
            MyStore
          </Link>
          <div className="icons">
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
              <ShoppingCartOutlined />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {cartOpen && <Cart />}
    </div>
  );
}

export default Navbar
