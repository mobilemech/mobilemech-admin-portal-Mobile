
import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Box,
} from "@mui/material";


export default function Mechanic() {

  const [scale, setScale] = useState(1);
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









  return (
    <Box sx={{ minHeight: "100vh", py: 6, display: "flex", justifyContent: "center" }}>

      <Box sx={{ transform: `scale(${scale})`, transformOrigin: "top center", width: "100%" }}>


        Mechanics







        {/* Main content: 60% left + 40% right */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>


          {/* Left side - Video + Cards */}
          <Box sx={{ flex: { md: "0 0 60%" }, width: "100%" }}>
       
          </Box>




          {/* Right side - Chat + Requests */}
          <Box sx={{ flex: { md: "0 0 40%" }, width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
      

      
          </Box>



        </Box>
      </Box>
    </Box>
  );
}











