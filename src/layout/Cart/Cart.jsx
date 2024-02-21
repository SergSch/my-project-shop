import classes from './Cart.module.css';

import { useAppSelector } from '../../redux/hooks';
import { RxCross1 } from 'react-icons/rx';
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({ setShowCart }) => {
  const data = useAppSelector((state) => state.cartReducer);

  const getTotal = () => {
    let total = 0;
    data.forEach((elem) => (total = total + total.price * elem.quantity));
    return total;
  };

  return (
    <div className={classes.wrap}>
      <RxCross1
        style={{ cursor: 'pointer' }}
        onClick={() => setShowCart(false)}
      />
      <h3>Shopping Cart</h3>

      <div>
        {data?.map((elem) => (
          <CartProduct
            key={elem.id}
            // id={elem.id}
            // img={elem.img}
            // title={elem.title}
            // quantity={elem.quantity}
            // price={elem.price}
            {...elem}
          />
        ))}
      </div>

      <div>
        <p>Subtotal: </p>
        <p>Rs. {getTotal()}$</p>
      </div>
      <button>Cart</button>
      <button>Checkout</button>
    </div>
  );
};
export default Cart;
