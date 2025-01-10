import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import './Layout.scss';
const Layout = () => {
  return (
    <div>
    <header className='header'>
      <ul className='header__menu'>
      <li>
        <NavLink to="/headlightslist" end>Всі оголошення</NavLink>
      </li>
      <li>
        <NavLink to="/addAdvert">Додати оголошення</NavLink>
      </li>
      <li>
        <NavLink to="/messages">Повідомлення</NavLink>
      </li>
      </ul>
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
