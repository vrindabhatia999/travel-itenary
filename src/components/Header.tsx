import React, { useContext } from 'react';
import { UserContext } from '../context/context';
import SiteLogo from '../assets/animations/site-logo.gif';
import './Header.css';
function Header() {
  //to use the context here
  const userInfo = useContext(UserContext);

  return (
    <nav className='site-nav'>
      <div className='logo-cont'>
        {/*brand logo*/}
        <img
          width={'100%'}
          height='100%'
          src={SiteLogo}
          loading='lazy'
          alt='logo'
        />
      </div>
      <div title={userInfo?.name} className='user-info-nav'>
        {userInfo && userInfo?.name?.length > 20
          ? `${userInfo?.name.slice(0, 20)}...`
          : userInfo?.name}
      </div>
    </nav>
  );
}

export default Header;
