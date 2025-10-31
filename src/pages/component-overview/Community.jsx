

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
  ListItemText,
  Avatar,
  Select
} from "@mui/material";
import { CalendarToday, ExpandMore, ArrowBack, ArrowForward, MonetizationOn, People, EmojiEvents } from "@mui/icons-material";
import dayjs from "dayjs";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import NewLabelIcon from '@mui/icons-material/NewLabel';
import GroupIcon from '@mui/icons-material/Group';
import image from "./images/Avatar.png"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QuizIcon from '@mui/icons-material/Quiz';

import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MessageIcon from '@mui/icons-material/Message';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Rect1 from "./images/Rect1.png"
import Rect2 from "./images/Rect2.png"

import MenuItem from '@mui/material/MenuItem';

import CommunityModal from "./Modals/communityModal"
import { AnnouncementModal } from "./Modals/AnouncementModal";





// Sample avatar images for overlapping avatars
const sampleAvatars = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
];








// Mock Data
const allGroups = 128;
const ActiveGroups = 21;
const newPost = 87;
const reportedPost = 2;


// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};







export default function Community() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [tabValue, setTabValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [donation] = useState(54);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [selectedSession, setSelectedSession] = useState("study");

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


  const CommunityData = [
    {
      id: 1,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "6pm",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1759464999130-fb4e4dae8e85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#4F46E5",
      participants: 24
    },
    {
      id: 2,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "6pm",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760974015741-f70361c682f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#F59E0B",
      participants: 18
    },
    {
      id: 3,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "6pm",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760532889970-9e4314f77985?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#4F46E5",
      participants: 32
    },
    {
      id: 4,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "6pm",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1759921183640-eed75be11849?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#4F46E5",
      participants: 15
    },
    {
      id: 5,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "7pm",
      date: "June 9, 2025",
      image: "https://images.unsplash.com/photo-1759921183640-eed75be11849?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#F59E0B",
      participants: 22
    },
    {
      id: 6,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "5pm",
      date: "June 10, 2025",
      image: "https://images.unsplash.com/photo-1760346972538-27c4f75ea3b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#4F46E5",
      participants: 28
    },



    {
      id: 21,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "6pm",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760974015741-f70361c682f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#F59E0B",
      participants: 18
    },





    {
      id: 8,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "5pm",
      date: "June 10, 2025",
      image: "https://images.unsplash.com/photo-1760346972538-27c4f75ea3b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#4F46E5",
      participants: 28
    },





    {
      id: 9,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "5pm",
      date: "June 10, 2025",
      image: "https://images.unsplash.com/photo-1760346972538-27c4f75ea3b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#4F46E5",
      participants: 28
    },



    {
      id: 12,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "6pm",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760974015741-f70361c682f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#F59E0B",
      participants: 18
    },


    {
      id: 90,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "5pm",
      date: "June 10, 2025",
      image: "https://images.unsplash.com/photo-1760346972538-27c4f75ea3b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#4F46E5",
      participants: 28
    },




    {
      id: 19,
      title: "Daystar word study team",
      host: "Pastor Grace Ajayi",
      time: "5pm",
      date: "June 10, 2025",
      image: "https://images.unsplash.com/photo-1760346972538-27c4f75ea3b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      activity: "6 activities this week",
      typeColor: "#4F46E5",
      participants: 28
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
          Community Dashboard
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Community Health Snapshot
        </Typography>
      </Stack>




      <CommunityModal open={openModal} onClose={() => setOpenModal(false)} />

      <AnnouncementModal
        open={openModal2}
        onClose={() => setOpenModal2(false)}
      />








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
                All Groups
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {allGroups}
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
                Active Groups
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {ActiveGroups}
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
                New Post This Week
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {newPost}
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
                Reported Post
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 22 }}>
                {reportedPost}
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











      {/* Events + Tabs + Buttons */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={3}
        mt={3}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          sx={{
            flexWrap: "wrap",
            rowGap: 2,
          }}
        >
          {/* Borderless Dropdown (uses Select for better alignment) */}
          <Select
            value={selectedSession}
            onChange={(e) => setSelectedSession(e.target.value)}
            variant="standard"
            disableUnderline
            MenuProps={{
              anchorOrigin: { vertical: "bottom", horizontal: "left" },
              transformOrigin: { vertical: "top", horizontal: "left" },
            }}
            sx={{
              fontWeight: 800,
              px: 2,
              fontSize: "1.6rem",
              color: "#111827",
              padding: 0,
              "& .MuiSelect-icon": {
                color: "#111827",
                fontSize: "1.8rem",
                marginRight: "4px",
              },
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                paddingY: 0,
                paddingX: 0,
              },
            }}
          >
            <MenuItem value="study">Community</MenuItem>
            <MenuItem value="prayer">Testimony Requests</MenuItem>
            <MenuItem value="worship">Worship Request</MenuItem>
            <MenuItem value="leadership">Leadership Request</MenuItem>
          </Select>

          {/* Tabs */}
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

            <Tab label="All Community" />
            <Tab label="Active" />
            <Tab label="InActive" />
            <Tab label="Group Leads" />
          </Tabs>
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
              mt: 3
            }}
          >

            {CommunityData.map((event) => (
              <Box
                key={event.id}
                sx={{
                  cursor: 'pointer',
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
                {/* Overlapping avatars - ABOVE THE IMAGE */}
                <Box
                  sx={{
                    display: 'flex',
                    mb: 1,
                  }}
                >
                  {sampleAvatars.slice(0, 3).map((avatar, index) => (
                    <Avatar
                      key={index}
                      src={avatar}
                      sx={{
                        width: 32,
                        height: 32,
                        border: '2px solid white',
                        ml: index > 0 ? -1 : 0,
                      }}
                    />
                  ))}
                  {event.participants > 3 && (
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        border: '2px solid white',
                        ml: -1,
                        bgcolor: '#4F46E5',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      +{event.participants - 3}
                    </Avatar>
                  )}
                </Box>

                {/* Image */}
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


                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5, fontSize: "1.1rem" }}>
                  {event.title}
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 0.5, fontSize: "1.1rem" }}>
                  Led by {event.host}
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
                  Since  {event.date}
                </Typography>



                <Box
                  sx={{
                    display: "inline-block",
                    bgcolor: '#F83B3B',
                    color: "#fff",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {event.activity}
                </Box>
              </Box>



            ))}
          </Box>
        </Box>

        {/* Right Side - 30% */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 30%" } }}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 3, bgcolor: "#F9FAFB" }}>
            <Stack spacing={2}>

              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Typography sx={{ fontWeight: 800, mb: 2, fontSize: 18 }}>
                  Quick Actions
                </Typography>

                <Stack spacing={2}>
                  {[{
                    title: "Create Group",
                    desc: "Create a new church Group",
                    gradient: "linear-gradient(to bottom, #7838F4, #2B04DB)",

                    icon: image
                  }, {
                    title: "Announcement",
                    desc: "Inform your Church Groups",
                    gradient: "linear-gradient(to bottom, #CC6002, #FFB532)",
                    icon: <MarkUnreadChatAltIcon sx={{ width: 40, height: 40 }} />
                  }].map((card, idx) => (
                    <Paper
                      key={idx}
                      sx={{
                        background: card.gradient,
                        borderRadius: 3,
                        cursor: "pointer",
                        boxShadow: "1px 1px 1px rgba(0,0,0,0.1)",
                        width: "100%",
                        maxWidth: 700,
                        mx: "auto",
                        p: 3
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        onClick={
                          card.title === "Create Group" ? () => setOpenModal(true) :
                            card.title === "Announcement" ? () => setOpenModal2(true) :
                              undefined
                        }
                      >
                        <Box>
                          <Typography variant="h3" color="#fff" fontWeight={700}>
                            {card.title}
                          </Typography>
                          <Typography variant="h4" color="#fefefeff" mt={0.5}>
                            {card.desc}
                          </Typography>
                        </Box>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            background: "white"
                          }}
                        >
                          {typeof card.icon === "string" ? (
                            <img src={card.icon} style={{ width: 40, height: 40 }} />
                          ) : (
                            card.icon
                          )}
                        </Stack>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>




              </Paper>





              {/* Notification */}
              <Grid

                sx={{ mt: 8, mb: 1.5 }}
              >
                <Paper content={false} sx={{ p: 0, borderRadius: 3, mt: 2 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ px: 2, py: 1.5 }}
                  >
                    <Typography variant="h3" color="black">Notification</Typography>
                    <Typography variant="h4" color="#2B04DB" sx={{ cursor: "pointer" }}>
                      View All
                    </Typography>
                  </Stack>

                  <List
                    component="nav"
                    sx={{
                      px: 0,
                      py: 0,
                      '& .MuiListItemButton-root': {
                        py: 1.2, // slightly reduced vertical space
                        px: 2,
                        '& .MuiAvatar-root': avatarSX,
                        '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                      }
                    }}
                  >
                    {/* Notification Items */}
                    {[
                      {
                        color: '#FE8B6E',
                        bg: '#FFF1F1',
                        icon: <QuizIcon sx={{ width: 40, height: 40 }} />,
                        title: '2 Post Reported',
                        subtitle: 'View MVPs'
                      },
                      {
                        color: '#2B04DB',
                        bg: '#F1F2FF',
                        icon: <VolunteerActivismIcon sx={{ width: 40, height: 40 }} />,
                        title: 'Word Study Team',
                        subtitle: 'View Donations'
                      },
                      {
                        color: '#CC6002',
                        bg: '#FFF9EB',
                        icon: <MessageIcon sx={{ width: 40, height: 40 }} />,
                        title: 'Prayer Warriors',
                        subtitle: 'View Requests'
                      },
                      {
                        color: '#5EC4B3',
                        bg: '#F2FBF9',
                        icon: <MessageIcon sx={{ width: 40, height: 40 }} />,
                        title: 'Women"s" Fellowship',
                        subtitle: 'View Schedule'
                      },

                      {
                        color: '#CC6002',
                        bg: '#FFF9EB',
                        icon: <MessageIcon sx={{ width: 40, height: 40 }} />,
                        title: 'Counselling Team',
                        subtitle: 'View Requests'
                      },

                      {
                        color: '#2B04DB',
                        bg: '#F1F2FF',
                        icon: <VolunteerActivismIcon sx={{ width: 40, height: 40 }} />,
                        title: 'Welfare Team',
                        subtitle: 'View Donations'
                      },
                      {
                        color: '#CC6002',
                        bg: '#FFF9EB',
                        icon: <MessageIcon sx={{ width: 40, height: 40 }} />,
                        title: 'Youth Minitry',
                        subtitle: 'View Requests'
                      },
                    ].map((item, index) => (
                      <ListItem
                        key={index}
                        component={ListItemButton}
                        secondaryAction={
                          <Stack sx={{ alignItems: 'flex-end' }}>
                            <ArrowForwardIosIcon sx={{ width: 24, height: 24, color: '#999' }} />
                          </Stack>
                        }
                      >
                        <ListItemAvatar>
                          <Stack
                            sx={{
                              gap: 0.5,
                              color: item.color,
                              height: 60,
                              width: 60,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '50%',
                              background: item.bg
                            }}
                          >
                            {item.icon}
                          </Stack>
                        </ListItemAvatar>
                        <ListItemText
                          sx={{ ml: 2 }}
                          primary={<Typography variant="h3">{item.title}</Typography>}
                          secondary={<Typography variant="h5">{item.subtitle}</Typography>}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>










            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
