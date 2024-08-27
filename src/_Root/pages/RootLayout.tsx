// import { useState, useEffect } from 'react';
import BottomNav from '../../components/Shared/BottomNav';
import SideNav from '../../components/Shared/SideNav';
import { Navigate, Outlet } from 'react-router-dom';
// import TopSection from '@/components/Home/TopSection';

const RootLayout = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/begin" />;
  }


  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  
  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);

  //   window.addEventListener('resize', handleResize);

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <>
    {/* <div className={`  ${ windowWidth >= 768 ? "flex gap-1": null}`}>
      {windowWidth <= 768 ? <BottomNav /> : <SideNav />}
      <div className=' w-full'>
      <Outlet />
      </div>
      </div> */}
      <div className=' w-full  md:flex'>
        {/* <TopSection/> */}
        <div className=' hidden md:block'>
        <SideNav/>
        </div>
        <section className=' flex-1'>
          <Outlet/>
        </section>
        <div className=' md:hidden fixed bottom-0 w-full'>
        <BottomNav/>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
