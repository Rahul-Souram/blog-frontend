import React, { useEffect,useState } from 'react';
import { Link } from 'gatsby';
import { Menu } from '../component/Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuDisplay = isMenuOpen ? 'active' : '';

    const MenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header>
        <div className="header_container">
          <div className="logo">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              MovieBlog
            </Link>
          </div>
          <div className="menu-bar">
            <button type="button" className={`${menuDisplay}`} onClick={MenuHandler}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div
          className={
            isMenuOpen ? 'active menu-wrapper' : 'inactive menu-wrapper'
          }
        >
          <Menu setIsMenuOpen={setIsMenuOpen} />
        </div>
    </header>
  );
};
export default Header
