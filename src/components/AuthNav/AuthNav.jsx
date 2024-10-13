import { Link } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.container}>
      <Link to="/register" className={styles.link}>
        Register
      </Link>
      <Link to="/login" className={styles.link}>
        Log In
      </Link>
    </div>
  );
};

export default AuthNav;