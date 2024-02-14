import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import CartBlock from './CartBlock/CartBlock';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Header = () => {
  const [isOpen, setIsopen] = useState();

  const [showCart, setShowCart] = useState(false);
  return (
    <div className="container">
      <div className={classes.wrap}>
        <div className={classes.logo}>
          <Link to={'/'}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </div>
        <div className={`${classes.navBlock} ${isOpen ? classes.active : ''}`}>
          <Navigation />
          <CartBlock setShowCart={setShowCart} />

          {showCart && <Cart setShowCart={setShowCart} />}
          <AiOutlineClose
            className={classes.close}
            onClick={() => setIsopen(!isOpen)}
          />
        </div>
        <AiOutlineMenu
          className={classes.menu}
          onClick={() => setIsopen(!isOpen)}
        />
      </div>
    </div>
  );
};
export default Header;
