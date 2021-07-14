import React from 'react';
import { getUser, removeUser } from '../commonUtils/Common';
import { Provider } from 'react-redux';
import store from "../store";
import Posts from './Posts';

function Home(props) {
  const user = getUser();
  const handleLogout = () => {
    removeUser();
    props.history.push('/login');
  }
  return (
    <Provider store={store}>
      <div>
        Welcome {user.user.firstname} {user.user.loginCounter}!<br /><br />
        <input type="button" onClick={handleLogout} value="Logout" />
      </div>
      <Posts />
    </Provider>
  );
}

export default Home;
