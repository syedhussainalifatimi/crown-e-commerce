import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/shop';
import Header from './components/menu-item/header';
import SignInAndSignUp from './components/signinandsignup';
import { auth, createUserProfileDocument } from './firebase/firebase';
import {Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        currentUser: null,
      },
    };
    this.unsubscribeFromAuth = null;
  }

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        this.setState({
          user: { // Update user state instead of currentUser directly
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }
        });
      });
    } else {
      this.setState({ // If userAuth is null (user signs out), set currentUser to null
        user: {
          currentUser: null
        }
      });
    }
  });
}

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

 

  render() {
    return (
      <>
        <Header  currentUser={this.state.user.currentUser}/>
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

export default App;
