import { Link } from 'react-router-dom';
import classes from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div>
      AboutPage
      <Link to={'/shop'} state={{ state: 'about' }}>
        <h3>SHOP</h3>
      </Link>
    </div>
  );
};
export default AboutPage;
