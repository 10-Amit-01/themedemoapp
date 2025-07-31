import ThemeSwitcher from './ThemeSwitcher';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="top-0 left-0 w-full h-16 shadow z-50 flex items-center justify-between px-4">
    <h1 className="font-bold text-xl">Theme Switcher</h1>
    <nav className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <ThemeSwitcher />
  </header>
);

export default Header;