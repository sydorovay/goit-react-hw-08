import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <span className={styles.greeting}>Welcome, {name}</span>
      <button type="button" onClick={handleLogout} className={styles.button}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;