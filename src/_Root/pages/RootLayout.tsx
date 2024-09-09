// import { useState, useEffect } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
import TopSection from '@/components/Home/TopSection';
import BottomNav from '../../components/Shared/BottomNav';
import SideNav from '../../components/Shared/SideNav';
import {  Outlet } from 'react-router-dom';
// import TopSection from '@/components/Home/TopSection';

const RootLayout = () => {
  // const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   return <Navigate to="/signin" />;
  // }


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
      <div className=' flex'>
        {/*  */}
        <div className=' hidden md:block'>
          <SideNav/>
        </div>
        {/*  */}
              <div className=' w-full flex flex-col  h-screen'>
        <div>
          <TopSection/>
        </div>
        <div className=' overflow-y-scroll'>
          <Outlet/>
        </div>
        <div className=' fixed bottom-0 w-full md:hidden'>
          <BottomNav/>
        </div>
      </div>
      </div>

   
    </>
  );
};

export default RootLayout;
