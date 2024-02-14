import { useContext, useState } from 'react';
import classes from './ImageBlockSingleProduct.module.css';
import { SingleProductContext } from '../../context';

const ImageBlockSingleProduct = () => {
  const [mainImg, setMainImg] = useState(0);

  const showImage = (i) => {
    setMainImg(i);
  };
  const singleProduct = useContext(SingleProductContext);
  let productImages = singleProduct?.images;
  return (
    <div className={classes.imageBlock}>
      <div className={classes.smallBlock}>
        {productImages &&
          productImages.length > 0 &&
          productImages.map((elem, i) => (
            <div
              key={i}
              onClick={() => showImage(i)}
              className={classes.smallImgBlock}
            >
              <img src={elem} alt={elem} />
            </div>
          ))}
      </div>
      <div className={classes.bigImage}>
        {productImages &&
          productImages.length > 0 &&
          productImages[mainImg] && <img src={productImages[mainImg]} alt="" />}
      </div>
    </div>
  );
};
export default ImageBlockSingleProduct;
