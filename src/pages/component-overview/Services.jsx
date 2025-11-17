
import React, { useEffect, useState, useMemo } from "react";
import {
  Box,

} from "@mui/material";







export default function Services() {
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
  //   return width <= 768 ? 0.55 : 0.5;
  // }, [width]);



  const zoom = useMemo(() => {
    if (width <= 768) return 0.55;       // Mobile
    if (width <= 1200) return 0.8;      // Tablets / small laptops
    if (width <= 1600) return 0.5;     // Medium desktops
    return 0.7;                         // Large desktops
  }, [width]);


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
    <Box sx={{ px: 3, py: 3, width: "100%" }}>


      Services



















      {/* ===== NEW BODY SECTION (70% / 30%) ===== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          mt: 4,
        }}
      >


        {/* Left Section */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 70%" } }}>
       
        </Box>





        {/* Right Section */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 30%" } }}>
      
        </Box>















      </Box>
    </Box>
  );
}





































