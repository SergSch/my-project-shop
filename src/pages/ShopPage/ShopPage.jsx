import { Link, NavLink, useLocation } from 'react-router-dom';
import SubHeader from '../../components/SubHeader/SubHeader';
import classes from './ShopPage.module.css';
import { useEffect, useState } from 'react';
import { fetchFirstShopProducts } from '../../utils/requests';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import SingleProductPage from '../SingleProductPage/SingleProductPage';

const ShopPage = () => {
  const [firstShopProducts, setFirstShopProducts] = useState([]);
  useEffect(() => {
    fetchFirstShopProducts(setFirstShopProducts);
  }, []);

  return (
    <div>
      <SubHeader page="Shop" />
      <div className="container">
        <div className={classes.wrap}>
          {firstShopProducts.map((elem) => (
            <Link
              to={`/shop/${elem.id}`}
              key={elem.id}
              style={{ color: 'black' }}
            >
              <SingleProduct {...elem} />
            </Link>
          ))}
        </div>
        <div className={classes.btnBlock}>
          <button className={classes.redBtn}>1</button>
          <Link to={'/secondpage'}>
            <button>2</button>
          </Link>
          <Link to={'/thirddpage'}>
            <button>3</button>
          </Link>
          <Link to={'/secondpage'}>
            <button className={classes.nextBtn}>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ShopPage;
