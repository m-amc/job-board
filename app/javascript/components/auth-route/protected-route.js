import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPILoginStatus } from '../../actions';

const ProtectedRoute = ({ component: Component, path, ...props }) => {
  const { logged_in: isLoggedIn } = useSelector(state => state.user.currentUser)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPILoginStatus());
  }, [])

  return (
    <Route
      path={path}
      {...props}
      render={
        props => isLoggedIn ? <Component {...props} /> : <Redirect
          to="/login" push
        />
      }
    />
  )
}

export default ProtectedRoute;