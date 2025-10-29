import React,{useEffect, useState, useMemo} from 'react'



import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

export default function Navigation() {

    const [width, setWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 1024
    );
  






  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const zoom = useMemo(() => (width <= 768 ? 0.55 : 0.50), [width]);


  const zoom = useMemo(() => {
  if (width <= 768) return 0.55;       // Mobile
  if (width <= 1200) return 0.8;      // Tablets / small laptops
  if (width <= 1600) return 0.5;     // Medium desktops
  return 0.7;                         // Large desktops
}, [width]);



  useEffect(() => {
    const body = document.body;
    body.style.zoom = "";
    if ("zoom" in body.style) {
      body.style.zoom = zoom;
    } else {
      body.style.transform = `scale(${zoom})`;
      body.style.transformOrigin = "top center";
      body.style.width = `${(100 / zoom).toFixed(2)}%`;
      body.style.margin = "0 auto";
    }
  }, [zoom]);









  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            {/* Fix - Navigation Group */}
          </Typography>
        );

    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
}
