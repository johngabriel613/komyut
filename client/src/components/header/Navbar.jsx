import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../../constants/images';
import { navLinks, navBtns } from '../../constants/text';
import { Icon } from '@iconify/react';

function Navbar() {
  const [isMenu, setIsMenu] = useState(false)

  const handleMenu = () => {
    setIsMenu(prev => !prev);
  }

  return (
    <header className="fixed w-full top-0 py-6 z-[999] bg-gradient-to-b from-[#10151D] via-[#10151D] to-transparent">
      <nav className="container-5xl flex-center justify-between">
        <div className="flex-center gap-6">
          <img src={logo} alt="komyut-logo" className='w-[100px] md:w-[120px]' />
          <ul className={`${isMenu ? 'grid' : 'hidden'} absolute top-6 right-4 gap-2 bg-card border border-gray-300/20 pt-10 pb-4 px-8 rounded-md md:static md:flex-center md:gap-6 md:p-0 md:bg-transparent md:border-none`}>
            <button className="absolute top-4 right-4 block text-[#808080] md:hidden" onClick={handleMenu}>
              <Icon icon="iconamoon:close" width={22}/>
            </button>
            {navLinks.map(item => (
              <li>
                <NavLink 
                  className="text-sm text-dark navlink" 
                  key={item.id}
                  to={item.path}>
                  {item.pathname}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-center gap-2">
          <div className="flex-center gap-4">
            {navBtns.map(item => (
              <NavLink 
                className={item.id === 2 ? "btn-sm bg-primary" : "text-sm text-dark"}
                key={item.id}
                to={item.path}>
                {item.pathname}
              </NavLink>
            ))}
          </div>
          <button className="block text-dark border-2 border-gray-300/20 rounded-full p-1 md:hidden" onClick={handleMenu}>
            <Icon icon="solar:menu-dots-bold" width={22} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
