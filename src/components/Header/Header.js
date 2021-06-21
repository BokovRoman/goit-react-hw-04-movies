import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import routes from '../../routes';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink
        exact
        to={routes.home}
        className={styles.link}
        activeClassName={styles.link__active}
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className={styles.link}
        activeClassName={styles.link__active}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;