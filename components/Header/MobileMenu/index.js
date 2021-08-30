import Menu from './Menu';
import { useCallback, useRef } from "react";

export default function Mobile({ menus }) {
  const menuRef = useRef(null);

  const handleOpenMenu = useCallback(() => {
    menuRef.current.openMenu();
  }, []);

  return (
    <div className="md:hidden flex">
      <button className="mobile-menu-button" onClick={handleOpenMenu}>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Menu ref={menuRef} menus={menus} />
    </div>
  );
}
