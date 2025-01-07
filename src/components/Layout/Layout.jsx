import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import './Layout.scss';
import logo from '../../assets/images/logo.png';

const Layout = () => {
  return (
    <div>
    <header className='header'>
      <a className='logo'>
        <img src={logo} alt='Logo' width={100}/>
      </a>

        <NavLink to="/admin"> Admin</NavLink>

    </header>
      <main>
      <Suspense fallback={<p>Loading....</p>}>
        <Outlet />
        </Suspense>
      </main>
      <footer>
        {/* Футер */}
      </footer>
    </div>
  );
};

export default Layout;
