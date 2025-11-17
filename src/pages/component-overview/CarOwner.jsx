

import React, { useState, useMemo, useEffect } from "react";
import {
  Box,

} from "@mui/material";


export default function CarOwner() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );


  // Handle window resize for zoom
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Zoom calculation
  // const zoom = useMemo(() => {
  //   return width <= 768 ? 0.55 : 0.5;
  // }, [width]);

  const zoom = useMemo(() => {
    if (width <= 768) return 0.55;       // Mobile
    if (width <= 1200) return 0.8;      // Tablets / small laptops
    if (width <= 1600) return 0.5;     // Medium desktops
    return 0.7;                         // Large desktops
  }, [width]);


  // Apply zoom
  useEffect(() => {
    const body = document.body;
    body.style.zoom = "";
    body.style.transform = "";
    body.style.transformOrigin = "";
    body.style.width = "";

    if ("zoom" in body.style) {
      body.style.zoom = zoom;
    } else {
      body.style.transform = `scale(${zoom})`;
      body.style.transformOrigin = "top center";
      body.style.width = `${(100 / zoom).toFixed(2)}%`;
      body.style.margin = "0 auto";
    }
  }, [zoom]);















  return (
    <Box sx={{ px: 3, py: 2, width: "100%" }}>


      Car Owner
 









      {/* Main Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        {/* Left Side - 70% */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 70%" } }}>
       
        </Box>













        {/* Right Side - 30% */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 30%" } }}>
       
        </Box>
      </Box>
    </Box>
  );
}
