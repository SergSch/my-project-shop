import { Link } from 'react-router-dom';
import SingleProduct from '../../../components/SingleProduct/SingleProduct';
import { fetchSecondShopProducts } from '../../../utils/requests';
import classes from './SecondShopPage.module.css';
import { useEffect, useState } from 'react';

const SecondShopPage = () => {
  const [secondShopProducts, setSecondShopProducts] = useState([]);
  useEffect(() => {
    fetchSecondShopProducts(setSecondShopProducts);
  }, []);

  return (
    <div>
      <div className="container">
        <div className={classes.wrap}>
          {secondShopProducts.map((elem) => (
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
          <Link to={'/shop'} state={{ state: 'home' }}>
            <button>Back</button>
          </Link>
          <Link to={'/shop'} state={{ state: 'home' }}>
            <button>1</button>
          </Link>
          <Link to={'/secondpage'}>
            <button className={classes.redBtn}>2</button>
          </Link>
          <Link to={'/thirddpage'}>
            <button>3</button>
          </Link>
          <Link to={'/thirddpage'}>
            <button>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SecondShopPage;
