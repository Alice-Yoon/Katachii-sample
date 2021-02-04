import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateScreenSize } from './modules/responsive';

import Auth from './hoc/auth';
import Home from './components/pages/Home/Home';
import NavBar from './components/common/NavBar/NavBar';
import Item from './components/pages/Item/Item';
import ShoppingGuide from './components/pages/ShoppingGuide/ShoppingGuide';
import Cart from './components/pages/Cart/Cart';
import Payment from './components/pages/Payment/Payment';
import MyPage from './components/pages/MyPage/MyPage';
import LogIn from './components/pages/Accounts/LogIn';
import SignUp from './components/pages/Accounts/SignUp';
import Upload from './components/pages/AdminPages/Upload/Upload';
import ManageOrders from './components/pages/AdminPages/ManageOrders/ManageOrders';
import NotFound from './components/common/NotFound/NotFound';
import ManageProducts from './components/pages/AdminPages/ManageProducts/ManageProducts';


function App(props) {

  const isLogin = useSelector(state => state.login.isLogin);
  const isAdmin = useSelector(state => state.login.isAdmin);

  // detect the screen size & update
  const dispatch = useDispatch();
  const setScreenSize = (payload) => dispatch(updateScreenSize(payload));
  
  useEffect(() => {
    setScreenSize(window.innerWidth);
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
      const width = window.innerWidth;
      setScreenSize(width);
  }

  return (
    <div className={props.className}>
      <Router>
        <Switch>
          <Route exact path="/" component={Auth(Home, null)} />
          <Route exact path="/products/:productId" component={Auth(Item, null)} />
          <Route exact path="/guide" component={Auth(ShoppingGuide, null)} />
          <Route exact path="/login" component={Auth(LogIn, false)} />
          <Route exact path="/signup" component={Auth(SignUp, false)} />

          <Route exact path="/cart" component={Auth(Cart, true)} />
          <Route exact path="/purchase" component={Auth(Payment, true)} />
          <Route exact path="/my" component={Auth(MyPage, true)} />
          <Route exact path="/upload" component={Auth(Upload, true, true)} />
          <Route exact path="/manageorders" component={Auth(ManageOrders, true, true)} />
          <Route exact path="/manageorders/:pageNumber" component={Auth(ManageOrders, true, true)} />
          <Route exact path="/manageproducts" component={Auth(ManageProducts, true, true)} />
          <Route exact path="/manageproducts/:pageNumber" component={Auth(ManageProducts, true, true)} />

          <Route component={NotFound} />
        </Switch>
        <NavBar isLogin={isLogin} isAdmin={isAdmin} />
      </Router>
    </div>
  );
}

export default styled(App)`
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
