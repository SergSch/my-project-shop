import { Link, useParams } from 'react-router-dom';
import classes from './SingleProductPage.module.css';
import { useEffect, useState } from 'react';
import { fetchSingleProduct } from '../../utils/requests';

import SingleProductPath from '../../components/SingleProductPath/SingleProductPath';
import ImageBlockSingleProduct from '../../components/ImageBlockSingleProduct/ImageBlockSingleProduct';
import { SingleProductContext } from '../../context';
import DescriptionBlockSingleProduct from '../../components/DescriptionBlockSingleProduct/DescriptionBlockSingleProduct';

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(id, setSingleProduct);
  }, [id]);
  let productTitle = singleProduct?.title;

  return (
    <div>
      <SingleProductPath title={productTitle} />
      <div className="container">
        <div className={classes.topBlock}>
          <SingleProductContext.Provider value={singleProduct}>
            <ImageBlockSingleProduct />
            <DescriptionBlockSingleProduct />
          </SingleProductContext.Provider>
        </div>
      </div>
    </div>
  );
};
export default SingleProductPage;
