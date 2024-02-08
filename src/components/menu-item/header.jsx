import React from "react";
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { connect } from "react-redux";
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import { auth } from "../../firebase/firebase";


const Header = ({ currentUser }) => {
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


        {
          currentUser ?
            (<div className={styles.options} onClick={() => auth.signOut()}>
              Sign Out
            </div>)
            :
            (<Link className={styles.options} to="/account">
              Sign In
            </Link>)
        }

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);