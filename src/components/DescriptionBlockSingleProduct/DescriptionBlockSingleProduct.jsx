import { useContext } from 'react';
import classes from './DescriptionBlockSingleProduct.module.css';
import { SingleProductContext } from '../../context';
import Raiting from '../Raiting/Raiting';
import Button from './../../UI/Button/Button';
import { useAppDispatch } from '../../redux/hooks';
import toast from 'react-hot-toast';

const DescriptionBlockSingleProduct = () => {
  const singleProduct = useContext(SingleProductContext);
  let rait = singleProduct.rating;
  console.log(singleProduct);

  const dispatch = useAppDispatch();

  const addProductCart = () => {
    const payload = {
      id: singleProduct.id,
      img: singleProduct.thumbnail,
      title: singleProduct.title,
      price: parseInt(singleProduct.price),
      quantity: 1,
    };
    dispatch(addProductCart(payload));
    toast.success('Added to Cart!');
    console.log(234);
  };

  return (
    <div className={classes.descrBlock}>
      <h2 className={classes.title}>{singleProduct.title}</h2>
      <h3 className={classes.price}>Rs. {singleProduct.price}$</h3>
      <Raiting rait={rait} />
      <p className={classes.descr}>{singleProduct.description}</p>
      <div className={classes.btnBlock}>
        <div className={classes.addOrDelete}>
          <p className={classes.count}>-</p>
          <p>0</p>
          <p className={classes.count}>+</p>
        </div>
        <Button text="Add To Cart" onClick={addProductCart} />
        <Button text="+ Compare" />
      </div>
    </div>
  );
};
export default DescriptionBlockSingleProduct;
