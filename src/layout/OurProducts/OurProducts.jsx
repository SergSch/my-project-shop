import { useEffect, useState } from 'react';
import classes from './OurProducts.module.css';
import { fetchProducts } from '../../utils/requests';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import TitleH2 from '../../components/TitleH2/TitleH2';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <div className="container" id="about">
      <TitleH2 text="Our Products" />
      <div className={classes.wrap}>
        {products.map((elem) => (
          <SingleProduct key={elem.id} {...elem} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Link to={'/shop'} state={{ state: 'home' }}>
          <Button text="Show More" />
        </Link>
      </div>
    </div>
  );
};
export default OurProducts;
