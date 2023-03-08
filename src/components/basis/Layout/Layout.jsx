import { Outlet, useLocation, Link } from 'react-router-dom';

import Appbar from 'components/basis/Appbar';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Appbar />
      <hr />
      {location.pathname !== '/' ? (
        <Outlet />
      ) : (
        <div>
          <b>
            To use the phone book, please <Link to="register">register</Link> or{' '}
            <Link to="login">log in</Link>
          </b>
        </div>
      )}
    </>
  );
};

export default Layout;
