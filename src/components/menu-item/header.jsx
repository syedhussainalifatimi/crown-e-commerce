import React from "react";
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.logocontainer} to="/">
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.optioncontainer}>
        <Link className={styles.options} to="/shop">
          Shop
        </Link>
        <Link className={styles.options} to="/contact">
          Contact
        </Link>
        <Link className={styles.options} to="/account">
          SignIn
        </Link>
      </div>
    </div>
  )
}
export default Header;