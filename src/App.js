import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/shop';
import Header from './components/menu-item/header';
import SignInAndSignUp from '../src/components/sign-in & sign-up/signinandsignup';
import { auth, createUserProfileDocument } from './firebase/firebase';
import {Component } from 'react';

class App extends Component {
   unsubscribeFromAuth = null;
  

componentDidMount() {
  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
    } else {
      setCurrentUser(userAuth);
    }
  });
}

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

 

  render() {
    return (
      <>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/account' element={<SignInAndSignUp />} />
          </Routes>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps )(App);
