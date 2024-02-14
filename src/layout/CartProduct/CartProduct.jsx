import { removeFromCart } from '../../redux/features/cartSlice';
import { useAppDispatch } from '../../redux/hooks';
import { RxCross1 } from 'react-icons/rx';

const CartProduct = ({ img, id, title, price, quantity }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <img src={img} alt="img" />
        <div>
          <h3>{title}</h3>
          <p>Qty: {quantity}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
      <RxCross1 onClick={() => dispatch(removeFromCart(id))} />
    </div>
  );
};
export default CartProduct;
