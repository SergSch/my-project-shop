import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={classes.nav}>
        <li>
          <NavLink
            to={'/'}
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
            state={{ state: 'home' }}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
            state={{ state: 'home' }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/contact'}
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
            state={{ state: 'home' }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/checkout'}
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
            state={{ state: 'home' }}
          >
            Checkout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
