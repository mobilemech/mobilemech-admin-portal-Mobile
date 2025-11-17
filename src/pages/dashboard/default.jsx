
import { useMemo, useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';


import {
  MonetizationOn,
  People,
  EmojiEvents,
} from "@mui/icons-material";

// material-ui
import Avatar from '@mui/material/Avatar';

import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



import BarChartIcon from '@mui/icons-material/BarChart';
















export default function DashboardDefault() {




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


    body.style.zoom = "";
    body.style.transform = "";
    body.style.transformOrigin = "";
    body.style.width = "";

    if ("zoom" in body.style) {

      body.style.zoom = zoom;
    } else {
      // ✅ Firefox / Safari fallback
      body.style.transform = `scale(${zoom})`;
      body.style.transformOrigin = "top center";
      body.style.width = `${(100 / zoom).toFixed(2)}%`;
      body.style.margin = "0 auto";
    }
  }, [zoom]);

  // Mock Data
  const Requests = 15;
  const newMembers = 21;
  const avgDonation = "$350.40";
  const Sermons = 54;






  return (

    <Grid container rowSpacing={4.5} columnSpacing={2}  >

   




      {/* Stats Cards */}
      <Grid
        container
        spacing={2.5}
        alignItems="stretch"
        sx={{
          width: "100%",
          mx: "auto",
        }}
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: 'pointer' }}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              borderRadius: 3,
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px dashed rgba(79,70,229,0.12)",
              minHeight: 140,
              width: "100%",
              transition: "0.25s ease",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#EEF2FF",
                color: "#4F46E5",
                width: 58,
                height: 58,
              }}
            >
              <MonetizationOn />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.secondary">
                Requests (this month)
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {Requests}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: 'pointer' }}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              borderRadius: 3,
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px dashed rgba(79,70,229,0.12)",
              minHeight: 140,
              width: "100%",
              transition: "0.25s ease",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#2B04DB",
                color: "white",
                width: 58,
                height: 58,
              }}
            >
              <People />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.secondary">
                New Members
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {newMembers}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: 'pointer' }}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              borderRadius: 3,
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px dashed rgba(79,70,229,0.12)",
              minHeight: 140,
              width: "100%",
              transition: "0.25s ease",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#EEF2FF",
                color: "#4F46E5",
                width: 58,
                height: 58,
              }}
            >
              <BarChartIcon />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.secondary">
                Donations
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                $350.40
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 4 (Blue gradient) */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: 'pointer' }}>
          <Paper
            elevation={3}
            sx={{
              p: 3.5,
              borderRadius: 3,
              minHeight: 140,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#fff",
              width: "100%",
              background:
                "linear-gradient(135deg, #6C4CFF 0%, #4F46E5 100%)",
              transition: "0.25s ease",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ opacity: 0.95 }}>
                Sermons
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 22 }}>
                {Sermons}
              </Typography>
            </Box>
            <Avatar
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                width: 62,
                height: 62,
                ml: 2,
              }}
            >
              <EmojiEvents sx={{ color: "#fff" }} />
            </Avatar>
          </Paper>
        </Grid>
      </Grid>



















      {/* Left hand side */}

      <Grid size={{ xs: 12, md: 7, lg: 8 }}>
     





      </Grid>












      {/* Right hand side */}

      <Grid size={{ xs: 12, md: 5, lg: 4 }}>









      </Grid>



















    </Grid>
  );
}




















