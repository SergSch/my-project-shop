import { Link } from 'react-router-dom';
import classes from './SingleProductPath.module.css';
import arrow from '../../assets/images/arrow.svg';

const SingleProductPath = ({ title }) => {
  return (
    <div className={classes.wrap}>
      <Link to={'/'}>
        <p>Home</p>
      </Link>
      <img src={arrow} alt="arrow" />

      <Link to={'/shop'} state={{ state: 'home' }}>
        <p>Shop</p>
      </Link>
      <img src={arrow} alt="arrow" />
      <span className={classes.line}></span>
      <p>{title}</p>
    </div>
  );
};
export default SingleProductPath;
