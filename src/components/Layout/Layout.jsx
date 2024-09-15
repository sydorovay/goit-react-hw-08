import AppBar from '../AppBar/AppBar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;