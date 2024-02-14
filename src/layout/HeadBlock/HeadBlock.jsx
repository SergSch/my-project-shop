import MainTitleBlock from '../../components/MainTitleBlock/MainTitleBlock';
import classes from './HeadBlock.module.css';

const HeadBlock = () => {
  return (
    <div className={classes.wrap}>
      <MainTitleBlock />
    </div>
  );
};
export default HeadBlock;
