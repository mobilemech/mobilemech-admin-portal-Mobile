import { useEffect, useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// project imports
import Drawer from './Drawer';
import Header from './Header';
import Footer from './Footer';
import Loader from 'components/Loader';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| MAIN LAYOUT ||============================== //

export default function DashboardLayout() {
  const { menuMasterLoading } = useGetMenuMaster();
  const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));





    const [width, setWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 1024
    );
  
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
  
  
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  
    // const zoom = useMemo(() => {
    //   return width <= 768 ? 0.55 : 0.50;
    // }, [width]);
  
  
    
      const zoom = useMemo(() => {
      if (width <= 768) return 0.55;       // Mobile
      if (width <= 1200) return 0.8;      // Tablets / small laptops
      if (width <= 1600) return 0.5;     // Medium desktops
      return 0.7;                         // Large desktops
    }, [width]);
    
  
  
  
  useEffect(() => {
    const body = document.body;
  
    // Apply zoom
    if ("zoom" in body.style) {
      body.style.zoom = zoom;
    } else {
      body.style.transform = `scale(${zoom})`;
      body.style.transformOrigin = "top center";
      body.style.width = `${(100 / zoom).toFixed(2)}%`;
      body.style.margin = "0 auto";
    }
  
    // 🔥 Cleanup: reset on unmount
    return () => {
      body.style.zoom = "";
      body.style.transform = "";
      body.style.transformOrigin = "";
      body.style.width = "";
      body.style.margin = "";
    };
  }, [zoom]);
  





  

  // set media wise responsive drawer
  useEffect(() => {
    handlerDrawerOpen(!downXL);
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      <Drawer />

      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar sx={{ mt: 'inherit' }} />
        <Box
          sx={{
            ...{ px: { xs: 0, sm: 2 } },
            position: 'relative',
            minHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* <Breadcrumbs /> */}
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
