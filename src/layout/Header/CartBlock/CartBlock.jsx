import classes from './CartBlock.module.css';
import accaunt from './../../../assets/images/headerIcons/accaunt.svg';
import search from './../../../assets/images/headerIcons/search.svg';
import heart from './../../../assets/images/headerIcons/heart.svg';
import cart from './../../../assets/images/headerIcons/cart-outlined.svg';
import { useAppSelector } from '../../../redux/hooks';

const CartBlock = ({ setShowCart }) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className={classes.wrap}>
      <div>
        <img src={accaunt} alt="login" />
      </div>
      <div>
        <img src={search} alt="search" />
      </div>
      <div>
        <img src={heart} alt="favourite" />
      </div>
      <div className={classes.cart_wrap} onClick={() => setShowCart(true)}>
        <div className={classes.cartCount}>{cartCount}</div>
        <img src={cart} alt="cart" />
      </div>
    </div>
  );
};
export default CartBlock;
