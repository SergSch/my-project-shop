import MainTitleBlock from '../../components/MainTitleBlock/MainTitleBlock';
import HeadBlock from '../../layout/HeadBlock/HeadBlock';
import OurCategories from '../../layout/OurCategories/OurCategories';
import OurProducts from '../../layout/OurProducts/OurProducts';
import classes from './MainPage.module.css';

const MainPage = () => {
  return (
    <div>
      <HeadBlock />
      <OurCategories />
      <OurProducts />
    </div>
  );
};
export default MainPage;
