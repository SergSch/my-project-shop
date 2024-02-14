import classes from './OurCategories.module.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import first from '../../assets/images/firstSlider/first.png';
import second from '../../assets/images/firstSlider/second.png';
import third from '../../assets/images/firstSlider/third.png';
import TitleH2 from '../../components/TitleH2/TitleH2';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const OurCategories = () => {
  const data = [
    {
      id: 0,
      img: first,
      name: 'Dining',
    },
    {
      id: 1,
      img: second,
      name: 'Living',
    },
    {
      id: 2,
      img: third,
      name: 'Bedroom',
    },
    {
      id: 3,
      img: first,
      name: 'Dining',
    },
    {
      id: 4,
      img: second,
      name: 'Living',
    },
    {
      id: 5,
      img: third,
      name: 'Bedroom',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className={classes.wrap}>
        <div className={classes.topBlock}>
          <TitleH2 text="Browse The Range" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className={classes.slider}>
          <Slider {...settings}>
            {data.map((elem) => (
              <CategoryCard key={elem.id} img={elem.img} name={elem.name} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default OurCategories;
