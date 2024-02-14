import { Link } from 'react-router-dom';
import Button from '../../../UI/Button/Button';
import classes from './ThirdShopPage.module.css';

const ThirdShopPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      ThirdShopPage
      <Link to={'/'} style={{ display: 'block' }}>
        <Button text={'Home'} color />
      </Link>
      <Link to={'/secondpage'}>
        <button className={classes.btn}>Back</button>
      </Link>
    </div>
  );
};
export default ThirdShopPage;
