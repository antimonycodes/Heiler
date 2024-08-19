import { useState, useEffect } from 'react';
import BottomNav from '../components/BottomNav';
import SideNav from '../components/SideNav';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  // State to store window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to update windowWidth on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {windowWidth <= 768 ? <BottomNav /> : <SideNav />}
      <Outlet />
    </>
  );
};

export default MainPage;
