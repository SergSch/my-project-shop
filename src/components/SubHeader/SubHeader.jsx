import classes from './SubHeader.module.css';
import logo from './../../assets/images/logo_subheader.svg';
import arrow from './../../assets/images/arrow.svg';
import { Link, useLocation } from 'react-router-dom';

const SubHeader = ({ page }) => {
  const { state } = useLocation() || {};
  let link = state?.state?.slice(0, 1).toUpperCase() + state.state.slice(1);
  let linkToLowerCase = link.slice(0).toLowerCase();

  return (
    <div className={classes.wrap}>
      <img src={logo} alt={logo} />
      <h3>{page}</h3>
      <div className={classes.route}>
        <Link to={`/${link === 'Home' ? '' : linkToLowerCase}`}>
          {page && <h4>{link}</h4>}
        </Link>
        {page && <img src={arrow} alt="arrow" />}
        {page && <p>{page}</p>}
      </div>
    </div>
  );
};
export default SubHeader;
