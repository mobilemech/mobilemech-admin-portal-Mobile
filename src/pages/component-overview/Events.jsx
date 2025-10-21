// import React,{useState, useMemo} from 'react'
// // material-ui
// import { useTheme } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import { useEffect } from 'react';





// export default function Events() {


//      const [width, setWidth] = useState(
//        typeof window !== "undefined" ? window.innerWidth : 1024
//      );
   
   
//      useEffect(() => {
//        const handleResize = () => setWidth(window.innerWidth);
//        window.addEventListener("resize", handleResize);
   
     
//        handleResize();
   
//        return () => window.removeEventListener("resize", handleResize);
//      }, []);
   
   
//      const zoom = useMemo(() => {
//        return width <= 768 ? 0.55 : 0.50; 
//      }, [width]);
   
    
//      useEffect(() => {
//        const body = document.body;
   
   
//        body.style.zoom = "";
//        body.style.transform = "";
//        body.style.transformOrigin = "";
//        body.style.width = "";
   
//        if ("zoom" in body.style) {
       
//          body.style.zoom = zoom;
//        } else {
//          // ✅ Firefox / Safari fallback
//          body.style.transform = `scale(${zoom})`;
//          body.style.transformOrigin = "top center";
//          body.style.width = `${(100 / zoom).toFixed(2)}%`; 
//          body.style.margin = "0 auto";
//        }
//      }, [zoom]);
   
  
 

//   return (

//  <Stack style={{justifyContent:'center', alignItems:'center',position:'absolute', top:0, left:0, bottom:0, right:0, margin:'auto'}}>
//       <Typography variant='h2'>Events Page is  Under Construction!!</Typography>


//   </Stack>
//   );
// }














// import React, { useState, useMemo, useEffect } from "react";
// import {
//   Box,
//   Stack,
//   Typography,
//   Tabs,
//   Tab,
//   Button,
//   IconButton,
// } from "@mui/material";
// import {
//   CalendarToday,
//   ExpandMore,
//   ArrowBackIosNew,
//   ArrowForwardIos,
// } from "@mui/icons-material";
// import dayjs from "dayjs";

// export default function Events() {
//   const [width, setWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1024
//   );

//   const [tabValue, setTabValue] = useState(0);
//   const [currentDate, setCurrentDate] = useState(dayjs());

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const zoom = useMemo(() => {
//     return width <= 768 ? 0.55 : 0.5;
//   }, [width]);

//   useEffect(() => {
//     const body = document.body;
//     body.style.zoom = "";
//     body.style.transform = "";
//     body.style.transformOrigin = "";
//     body.style.width = "";
//     if ("zoom" in body.style) {
//       body.style.zoom = zoom;
//     } else {
//       body.style.transform = `scale(${zoom})`;
//       body.style.transformOrigin = "top center";
//       body.style.width = `${(100 / zoom).toFixed(2)}%`;
//       body.style.margin = "0 auto";
//     }
//   }, [zoom]);

//   // Handlers for arrows and "Today"
//   const handlePrevDay = () => setCurrentDate((prev) => prev.subtract(1, "day"));
//   const handleNextDay = () => setCurrentDate((prev) => prev.add(1, "day"));
//   const handleToday = () => setCurrentDate(dayjs());

//   return (
//     <Box sx={{ px: 3, py: 2 }}>
//       {/* Header */}
//       <Stack spacing={1} mb={3}>
//         <Typography variant="h4" sx={{ fontWeight: 600, color: "#6B7280" }}>
//           Hi Pastor Grace,
//         </Typography>
//         <Typography variant="h3" sx={{ fontWeight: 800 }}>
//           Welcome to Worsship!
//         </Typography>
//       </Stack>

//       {/* Events + Tabs + Buttons */}
//       <Stack
//         direction="row"
//         alignItems="center"
//         justifyContent="space-between"
//         flexWrap="wrap"
//         mb={3}
//       >
//         <Stack direction="row" alignItems="center" spacing={4}>
//           <Typography
//             variant="h4"
//             sx={{ fontWeight: 800, fontSize: "1.6rem", color: "#111827" }}
//           >
//             Events
//           </Typography>

//           <Tabs
//             value={tabValue}
//             onChange={(e, newVal) => setTabValue(newVal)}
//             sx={{
//               minHeight: 0,
//               "& .MuiTab-root": {
//                 textTransform: "none",
//                 fontWeight: 600,
//                 fontSize: { xs: "1.1rem", md: "1.3rem" },
//                 color: "#6B7280",
//                 minHeight: 0,
//                 pb: 0.5,
//               },
//               "& .Mui-selected": {
//                 color: "#4F46E5",
//                 textDecoration: "underline",
//                 textUnderlineOffset: "6px",
//                 textDecorationThickness: "2px",
//               },
//               "& .MuiTabs-indicator": {
//                 display: "none",
//               },
//             }}
//           >
//             <Tab label="Upcoming Events" />
//             <Tab label="Past events" />
//             <Tab label="Drafts" />
//             <Tab label="RSVPs" />
//           </Tabs>
//         </Stack>

//         <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
//           <Button
//             variant="outlined"
//             sx={{
//               borderColor: "#E0E7FF",
//               color: "#4F46E5",
//               fontWeight: 600,
//               textTransform: "none",
//               bgcolor: "#EEF2FF",
//               px: 3,
//               py: 1.2,
//               borderRadius: "30px",
//               fontSize: "1rem",
//               "&:hover": { bgcolor: "#EEF2FF" },
//             }}
//           >
//             Go Live
//           </Button>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#4F46E5",
//               fontWeight: 600,
//               textTransform: "none",
//               px: 3,
//               py: 1.2,
//               borderRadius: "30px",
//               fontSize: "1rem",
//               "&:hover": { backgroundColor: "#4338CA" },
//             }}
//           >
//             + Create Event
//           </Button>
//         </Stack>
//       </Stack>

//       {/* Date Row */}
//       <Stack direction="row" alignItems="center" spacing={2} mb={4}>
//         <Button
//           startIcon={<CalendarToday fontSize="small" />}
//           endIcon={<ExpandMore />}
//           sx={{
//             textTransform: "none",
//             color: "#4F46E5",
//             border: "1px solid #E5E7EB",
//             borderRadius: "10px",
//             px: 2,
//             py: 1,
//             fontSize: "0.95rem",
//           }}
//         >
//           {currentDate.format("dddd, DD MMMM YYYY")}
//         </Button>

//         {/* Arrow Controls */}
//         <Stack direction="row" spacing={1} alignItems="center">
//           <IconButton
//             onClick={handlePrevDay}
//             sx={{
//               bgcolor: "#FEF08A",
//               "&:hover": { bgcolor: "#FACC15" },
//               width: 40,
//               height: 40,
//             }}
//           >
//             <ArrowBackIosNew fontSize="small" />
//           </IconButton>

//           <Button
//             variant="contained"
//             onClick={handleToday}
//             sx={{
//               bgcolor: "#4F46E5",
//               textTransform: "none",
//               fontWeight: 600,
//               borderRadius: "10px",
//               px: 3,
//               py: 1,
//               fontSize: "0.95rem",
//               "&:hover": { bgcolor: "#4338CA" },
//             }}
//           >
//             Today
//           </Button>

//           <IconButton
//             onClick={handleNextDay}
//             sx={{
//               bgcolor: "#FEF08A",
//               "&:hover": { bgcolor: "#FACC15" },
//               width: 40,
//               height: 40,
//             }}
//           >
//             <ArrowForwardIos fontSize="small" />
//           </IconButton>
//         </Stack>
//       </Stack>
//     </Box>
//   );
// }





















// import React, { useState, useMemo, useEffect } from "react";
// import {
//   Box,
//   Stack,
//   Typography,
//   Tabs,
//   Tab,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
// } from "@mui/material";
// import { CalendarToday, ExpandMore, ArrowBack, ArrowForward } from "@mui/icons-material";
// import dayjs from "dayjs";

// export default function Events() {
//   const [width, setWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1024
//   );
//   const [tabValue, setTabValue] = useState(0);
//   const [currentDate, setCurrentDate] = useState(dayjs());

//   // Handle Resize
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Zoom Logic
//   const zoom = useMemo(() => {
//     return width <= 768 ? 0.55 : 0.5;
//   }, [width]);

//   useEffect(() => {
//     const body = document.body;
//     body.style.zoom = "";
//     body.style.transform = "";
//     body.style.transformOrigin = "";
//     body.style.width = "";
//     if ("zoom" in body.style) {
//       body.style.zoom = zoom;
//     } else {
//       body.style.transform = `scale(${zoom})`;
//       body.style.transformOrigin = "top center";
//       body.style.width = `${(100 / zoom).toFixed(2)}%`;
//       body.style.margin = "0 auto";
//     }
//   }, [zoom]);

//   // Date navigation
//   const handleNextDay = () => setCurrentDate((prev) => prev.add(1, "day"));
//   const handlePrevDay = () => setCurrentDate((prev) => prev.subtract(1, "day"));
//   const handleToday = () => setCurrentDate(dayjs());

//   // Sample event data
//   const events = [
//     {
//       id: 1,
//       title: "Faith That Moves Mountains",
//       category: "Faith",
//       speaker: "Pastor Grace Aiyai",
//       date: "June 8, 2025",
//       image: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       id: 2,
//       title: "Sunday Morning Encounter",
//       category: "Righteousness",
//       speaker: "Pastor Grace Aiyai",
//       date: "June 8, 2025",
//       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       id: 3,
//       title: "Pentecost Conference 2025",
//       category: "Family Matters",
//       speaker: "Pastor Grace Aiyai",
//       date: "June 8, 2025",
//       image: "https://images.unsplash.com/photo-1535469420027-517674dad7f1?auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       id: 4,
//       title: "Grace Over Guilt",
//       category: "Grace",
//       speaker: "Pastor Grace Aiyai",
//       date: "June 8, 2025",
//       image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       id: 5,
//       title: "Knowing God",
//       category: "Faith",
//       speaker: "Pastor Grace Aiyai",
//       date: "June 8, 2025",
//       image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=60",
//     },
//   ];

//   return (
//     <Box sx={{ px: 3, py: 2 }}>
//       {/* Header */}
//       <Stack spacing={1} mb={3}>
//         <Typography variant="h4" sx={{ fontWeight: 600, color: "#6B7280" }}>
//           Hi Pastor Grace,
//         </Typography>
//         <Typography variant="h3" sx={{ fontWeight: 800 }}>
//           Welcome to Worsship!
//         </Typography>
//       </Stack>

//       {/* Events + Tabs + Buttons */}
//       <Stack
//         direction="row"
//         alignItems="center"
//         justifyContent="space-between"
//         flexWrap="wrap"
//         mb={3}
//       >
//         <Stack direction="row" alignItems="center" spacing={4}>
//           <Typography
//             variant="h4"
//             sx={{ fontWeight: 800, fontSize: "1.6rem", color: "#111827" }}
//           >
//             Events
//           </Typography>

//           <Tabs
//             value={tabValue}
//             onChange={(e, newVal) => setTabValue(newVal)}
//             sx={{
//               minHeight: 0,
//               "& .MuiTab-root": {
//                 textTransform: "none",
//                 fontWeight: 600,
//                 fontSize: { xs: "1.1rem", md: "1.3rem" },
//                 color: "#6B7280",
//                 minHeight: 0,
//                 pb: 0.5,
//               },
//               "& .Mui-selected": {
//                 color: "#4F46E5",
//                 textDecoration: "underline",
//                 textUnderlineOffset: "6px",
//                 textDecorationThickness: "2px",
//               },
//               "& .MuiTabs-indicator": {
//                 display: "none",
//               },
//             }}
//           >
//             <Tab label="Upcoming Events" />
//             <Tab label="Past events" />
//             <Tab label="Drafts" />
//             <Tab label="RSVPs" />
//           </Tabs>
//         </Stack>

//         <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
//           <Button
//             variant="outlined"
//             sx={{
//               borderColor: "#E0E7FF",
//               color: "#4F46E5",
//               fontWeight: 600,
//               textTransform: "none",
//               bgcolor: "#EEF2FF",
//               px: 3,
//               py: 1.2,
//               borderRadius: "30px",
//               fontSize: "1rem",
//               "&:hover": { bgcolor: "#EEF2FF" },
//             }}
//           >
//             Go Live
//           </Button>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#4F46E5",
//               fontWeight: 600,
//               textTransform: "none",
//               px: 3,
//               py: 1.2,
//               borderRadius: "30px",
//               fontSize: "1rem",
//               "&:hover": { backgroundColor: "#4338CA" },
//             }}
//           >
//             + Create Event
//           </Button>
//         </Stack>
//       </Stack>

//       {/* Date Row */}
//       <Stack direction="row" alignItems="center" spacing={2} mb={4}>
//         <Button
//           startIcon={<CalendarToday fontSize="small" />}
//           endIcon={<ExpandMore />}
//           sx={{
//             textTransform: "none",
//             color: "#4F46E5",
//             border: "1px solid #E5E7EB",
//             borderRadius: "10px",
//             px: 2,
//             py: 1,
//             fontSize: "0.95rem",
//           }}
//         >
//           {currentDate.format("dddd, D MMMM YYYY")}
//         </Button>

//         <Stack direction="row" spacing={1} alignItems="center">
//           <Button
//             onClick={handlePrevDay}
//             sx={{
//               minWidth: "40px",
//               bgcolor: "#FDE68A",
//               color: "#000",
//               "&:hover": { bgcolor: "#FCD34D" },
//               borderRadius: "10px",
//             }}
//           >
//             <ArrowBack />
//           </Button>
//           <Button
//             variant="contained"
//             onClick={handleToday}
//             sx={{
//               bgcolor: "#4F46E5",
//               textTransform: "none",
//               fontWeight: 600,
//               borderRadius: "10px",
//               px: 3,
//               py: 1,
//               fontSize: "0.95rem",
//               "&:hover": { bgcolor: "#4338CA" },
//             }}
//           >
//             Today
//           </Button>
//           <Button
//             onClick={handleNextDay}
//             sx={{
//               minWidth: "40px",
//               bgcolor: "#FDE68A",
//               color: "#000",
//               "&:hover": { bgcolor: "#FCD34D" },
//               borderRadius: "10px",
//             }}
//           >
//             <ArrowForward />
//           </Button>
//         </Stack>
//       </Stack>

//       {/* Main Content */}
//       <Grid container spacing={4}>
//         {/* Left 70% */}
//         <Grid item xs={12} md={8.4}>
//           <Grid container spacing={3}>
//             {events.map((event) => (
//               <Grid item xs={12} sm={6} md={3} key={event.id}>
//                 <Card
//                   sx={{
//                     borderRadius: "16px",
//                     boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="140"
//                     image={event.image}
//                     alt={event.title}
//                   />
//                   <CardContent>
//                     <Chip
//                       label={event.category}
//                       size="small"
//                       sx={{
//                         backgroundColor: "#EEF2FF",
//                         color: "#4F46E5",
//                         fontWeight: 600,
//                         mb: 1,
//                       }}
//                     />
//                     <Typography
//                       variant="subtitle1"
//                       sx={{ fontWeight: 700, mb: 0.5 }}
//                     >
//                       {event.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{ color: "#6B7280", mb: 0.5 }}
//                     >
//                       With {event.speaker}
//                     </Typography>
//                     <Typography
//                       variant="caption"
//                       sx={{ color: "#9CA3AF", fontWeight: 500 }}
//                     >
//                       {event.date}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>

//         {/* Right 30% (empty for now) */}
//         <Grid item xs={12} md={3.6}>
//           {/* Sidebar content coming next stage */}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
















import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Tabs,
  Tab,
  Button,
  Divider,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { CalendarToday, ExpandMore, ArrowBack, ArrowForward } from "@mui/icons-material";
import dayjs from "dayjs";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import NewLabelIcon from '@mui/icons-material/NewLabel';
import GroupIcon from '@mui/icons-material/Group';

import Rect1 from "./Rect1.png"
import Rect2 from "./Rect2.png"

import CreateEventModal from "./Modals/createEventModal"

export default function Events() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [tabValue, setTabValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs());
    const [donation] = useState(54);
       const [openModal, setOpenModal] = useState(false);

  // Handle window resize for zoom
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Zoom calculation
  const zoom = useMemo(() => {
    return width <= 768 ? 0.55 : 0.5;
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

  // Sample event data
  const events = [
    {
      id: 1,
      title: "Faith That Moves Mountains",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1759464999130-fb4e4dae8e85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      category: "Faith",
      categoryColor: "#4F46E5",
    },
    {
      id: 2,
      title: "Pentecost Conference 2025",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760974015741-f70361c682f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      category: "Family Masters",
      categoryColor: "#F59E0B",
    },
    {
      id: 3,
      title: "Grace Over Guilt",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760532889970-9e4314f77985?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      category: "Grace",
      categoryColor: "#8B5CF6",
    },
    {
      id: 4,
      title: "Sunday Morning Service",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1759921183640-eed75be11849?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      category: "Righteousness",
      categoryColor: "#EF4444",
    },


       {
      id: 5,
      title: "Sunday Morning Service",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1759921183640-eed75be11849?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      category: "Grace",
      categoryColor: "#8B5CF6",
    },





    
       {
      id: 6,
      title: "Sunday Morning Service",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760346972538-27c4f75ea3b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      category: "Prosperity",
      categoryColor: "green",
    },



        {
      id: 7,
      title: "Sunday Morning Service",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760715142134-fe34467c93f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      category: "Righteousness",
      categoryColor: "#EF4444",
    },




        {
      id: 8,
      title: "Sunday Morning Service",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://plus.unsplash.com/premium_photo-1760876475958-680bc9c45d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      category: "Grace",
      categoryColor: "#8B5CF6",
    },





        {
      id: 9,
      title: "Sunday Morning Service",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760773767056-c7f1d4e4db5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
    category: "Family Masters",
      categoryColor: "#F59E0B",
    },





        {
      id: 10,
      title: "Sunday Morning Service",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760679171231-7673b857e2f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
        category: "Prosperity",
      categoryColor: "green",
    },




        {
      id: 11,
      title: "Sunday Morning Service",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760971129480-ebe47b9821d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      category: "Salvation",
      categoryColor: "#EF4444",
    },





        {
      id: 12,
      title: "Sunday Morning Service",
      host: "Pastor Grace Ajao",
      date: "June 8, 2025",
      image: "https://plus.unsplash.com/premium_photo-1760386367252-f8d546898566?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
         category: "Grace",
      categoryColor: "#8B5CF6",
    },



  ];

  // Handlers for date navigation
  const handlePreviousDay = () => setSelectedDate(selectedDate.subtract(1, "day"));
  const handleNextDay = () => setSelectedDate(selectedDate.add(1, "day"));
  const handleToday = () => setSelectedDate(dayjs());

    const [itinerary] = useState([
      { id: 1, title: "Word Session", time: "02:00 PM", duration: "30 mins", image: Rect1 },
      { id: 2, title: "Testimony", time: "02:30 PM", duration: "15 mins", image: Rect2 },
      { id: 3, title: "Offering/Donations", time: "02:45 PM", duration: "15 mins", image: Rect1 },
      { id: 4, title: "Testimony", time: "02:30 PM", duration: "15 mins", image: Rect2 }
    ]);















  return (
    <Box sx={{ px: 3, py: 2, width: "100%" }}>
      {/* Header */}
      <Stack spacing={1} mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 600, color: "#6B7280" }}>
          Hi Pastor Grace,
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Welcome to Worship!
        </Typography>
      </Stack>


      <div>
             <CreateEventModal
                open={openModal}
                onClose={() => setOpenModal(false)}
              />
      </div>









      {/* Events + Tabs + Buttons */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={3}
      >
        <Stack direction="row" alignItems="center" spacing={4}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, fontSize: "1.6rem", color: "#111827" }}
          >
            Events
          </Typography>

          <Tabs
            value={tabValue}
            onChange={(e, newVal) => setTabValue(newVal)}
            sx={{
              minHeight: 0,
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                color: "#6B7280",
                minHeight: 0,
                pb: 0.5,
              },
              "& .Mui-selected": {
                color: "#4F46E5",
                textDecoration: "underline",
                textUnderlineOffset: "6px",
                textDecorationThickness: "2px",
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab label="Upcoming Events" />
            <Tab label="Past events" />
            <Tab label="Drafts" />
            <Tab label="RSVPs" />
          </Tabs>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#E0E7FF",
              color: "#4F46E5",
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#EEF2FF",
              px: 3,
              py: 1.2,
              borderRadius: "30px",
              fontSize: "1rem",
              "&:hover": { bgcolor: "#EEF2FF" },
            }}
          >
            Go Live
          </Button>
          <Button
            variant="contained"
            onClick={() => setOpenModal(true)} 
            sx={{
              backgroundColor: "#4F46E5",
              fontWeight: 600,
              textTransform: "none",
              px: 3,
              py: 1.2,
              borderRadius: "30px",
              fontSize: "1rem",
              "&:hover": { backgroundColor: "#4338CA" },
            }}
          >
            + Create Event
          </Button>
        </Stack>
      </Stack>

      {/* Date Row */}
      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <Button
          startIcon={<CalendarToday fontSize="small" />}
          endIcon={<ExpandMore />}
          sx={{
            textTransform: "none",
            color: "#4F46E5",
            border: "1px solid #E5E7EB",
            borderRadius: "10px",
            px: 2,
            py: 1,
            fontSize: "0.95rem",
          }}
        >
          {selectedDate.format("dddd, D MMMM YYYY")}
        </Button>

        <Stack direction="row" spacing={1}>
          <Button
            onClick={handlePreviousDay}
            sx={{
              bgcolor: "#FACC15",
              minWidth: 40,
              color: "#111827",
              "&:hover": { bgcolor: "#EAB308" },
            }}
          >
            <ArrowBack />
          </Button>
          <Button
            onClick={handleToday}
            variant="contained"
            sx={{
              bgcolor: "#4F46E5",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "10px",
              px: 3,
              py: 1,
              fontSize: "0.95rem",
              "&:hover": { bgcolor: "#4338CA" },
            }}
          >
            Today
          </Button>
          <Button
            onClick={handleNextDay}
            sx={{
              bgcolor: "#FACC15",
              minWidth: 40,
              color: "#111827",
              "&:hover": { bgcolor: "#EAB308" },
            }}
          >
            <ArrowForward />
          </Button>
        </Stack>
      </Stack>

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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              width: "100%",
              flex: 1,
            }}
          >
            {events.map((event) => (
              <Box
                key={event.id}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    sm: "1 1 48%",
                    md: "1 1 23%",
                  },
                  bgcolor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  p: 2,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={event.image}
                  alt={event.title}
                  sx={{
                    width: "100%",
                    height: 160,
                    borderRadius: 2,
                    objectFit: "cover",
                    mb: 1.5,
                  }}
                />
                <Box
                  sx={{
                    display: "inline-block",
                    bgcolor: event.categoryColor,
                    color: "#fff",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {event.category}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  With {event.host}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {event.date}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right Side - 30% */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 30%" } }}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 3, bgcolor: "#F9FAFB" }}>
            <Typography variant="body1" color="text.secondary" mb={2}>
              Quick summary of your upcoming events, participants, and total views.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={2}>



              {/* Overview Section */}
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3, borderRadius: 2, height: "100%", width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography sx={{ fontWeight: 800 }}>Overview</Typography>
                    <Button size="small" sx={{ textTransform: "none" }}>
                      View All
                    </Button>
                  </Box>

                  <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                    {/* Card 1 */}
                    <Paper
                      sx={{
                        flex: 1,
                        p: 2,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <NewLabelIcon
                        sx={{
                          color: "white",
                          p: 1,
                          backgroundColor: "#4318FF",
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Total Events
                        </Typography>
                        <Typography sx={{ fontWeight: 800, fontSize: 20 }}>
                          {donation}
                        </Typography>
                      </Box>
                    </Paper>

                    {/* Card 2 */}
                    <Paper
                      sx={{
                        flex: 1,
                        p: 2,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <GroupIcon 
                        sx={{
                          color: "white",
                          p: 1,
                          backgroundColor: "#4318FF",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Most RSVP
                        </Typography>
                        <Typography sx={{ fontWeight: 800, fontSize: 20 }}>Grace over Guilt</Typography>
                      </Box>
                    </Paper>

                    {/* Card 3 */}
                    <Paper
                      sx={{
                        flex: 1,
                        p: 2,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <BarChartIcon
                        sx={{
                          color: "#4318FF",
                          p: 1,
                          backgroundColor: "#f1e7e7ff",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Weekly Engagement
                        </Typography>
                        <Typography sx={{ fontWeight: 800, fontSize: 20 }}>+22%</Typography>
                      </Box>
                    </Paper>
                  </Box>
                </Paper>
              </Grid>




              {/* Itinerary Section */}
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3, borderRadius: 2, height: "100%", width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography sx={{ fontWeight: 800 }}>27th September</Typography>
                    <Button size="small" sx={{ textTransform: "none" }}>Today ▾</Button>
                  </Box>

                  <List sx={{ mt: 1 }}>
                    {itinerary.map((it) => (
                      <ListItem
                        key={it.id}
                        disableGutters
                        sx={{ py: 1, gap: 2, alignItems: "center" }}
                      >
                        <Box
                          component="img"
                          src={it.image}
                          alt={it.title}
                          sx={{
                            width: 6,
                            height: 56,
                            borderRadius: 2,
                            objectFit: "cover",
                            flexShrink: 0,
                          }}
                        />
                        <ListItemText
                          primary={
                            <Typography sx={{ fontWeight: 700 }}>{it.title}</Typography>
                          }
                          secondary={
                            <Typography variant="body2" color="text.secondary">
                              {`${it.time} • ${it.duration}`}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Box textAlign="right">
                    <Button size="small" sx={{ textTransform: "none" }}>
                      View all lined up Activities →
                    </Button>
                  </Box>
                </Paper>
              </Grid>

            


            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
