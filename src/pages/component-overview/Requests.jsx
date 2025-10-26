

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
  Select,
} from "@mui/material";
import { CalendarToday, ExpandMore, ArrowBack, ArrowForward } from "@mui/icons-material";
import dayjs from "dayjs";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import NewLabelIcon from '@mui/icons-material/NewLabel';
import GroupIcon from '@mui/icons-material/Group';
import MenuItem from '@mui/material/MenuItem';


import Rect1 from "./Rect1.png"
import Rect2 from "./Rect2.png"



export default function Request() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [tabValue, setTabValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [donation] = useState(54);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState("study");

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
      title: "prayer for Favour, grace in my endeavours",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },
    {
      id: 2,
      title: "prayer for Favour, grace in my endeavours",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },
    {
      id: 3,
      title: "prayer for Favour, grace in my endeavours",
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },
    {
      id: 4,
      title: "prayer for Favour, grace in my endeavours",

      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },


    {
      id: 5,
      title: "prayer for Favour, grace in my endeavours",

      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },






    {
      id: 6,
      title: "prayer for Favour, grace in my endeavours",

      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760346972538-27c4f75ea3b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },



    {
      id: 7,
      title: "prayer for Favour, grace in my endeavours",

      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760715142134-fe34467c93f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },




    {
      id: 8,
      title: "prayer for Favour, grace in my endeavours",

      date: "June 8, 2025",
      image: "https://plus.unsplash.com/premium_photo-1760876475958-680bc9c45d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },





    {
      id: 9,
      title: "prayer for Favour, grace in my endeavours",

      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760773767056-c7f1d4e4db5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },





    {
      id: 10,
      title: "prayer for Favour, grace in my endeavours",

      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760679171231-7673b857e2f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },




    {
      id: 11,
      title: "prayer for Favour, grace in my endeavours",

      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1760971129480-ebe47b9821d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      category: "Approve",
      joined: "Joined Worsship since 2023",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },





    {
      id: 12,
      title: "prayer for Favour, grace in my endeavours",

      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      categoryColor: "#218073",
      desc: 'Please pray for my health. I want to be well. Please also pray for the protection of  my wife and children physically, mentally and spiritually.'
    },



  ];

  // Handlers for date navigation
  const handlePreviousDay = () => setSelectedDate(selectedDate.subtract(1, "day"));
  const handleNextDay = () => setSelectedDate(selectedDate.add(1, "day"));
  const handleToday = () => setSelectedDate(dayjs());














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












      {/* Events + Tabs + Buttons */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={3}
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
            <MenuItem value="study">Prayer Requests</MenuItem>
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
            <Tab label="New Request" />
            <Tab label="Approved" />
            <Tab label="Pending" />
            <Tab label="Rejected" />
            <Tab label="Scheduled" />
          </Tabs>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4F46E5",
              fontWeight: 600,
              textTransform: "none",
              px: 5,
              py: 1.2,
              borderRadius: "30px",
              fontSize: "1rem",
              "&:hover": { backgroundColor: "#4338CA" },
            }}
          >
            + Add Request
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
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 100%" } }}>
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
                <Typography variant="h5" color="text.secondary">
                  {event.date}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                  <Box
                    component="img"
                    src={event.image}
                    alt={event.title}
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: 10,
                      border: '2px solid white',
                      // ml: index > 0 ? -1 : 0,
                      objectFit: "cover",
                      mb: 1.5,
                    }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {event.title}
                  </Typography>
                </Box>


                <Typography variant="h5" sx={{ fontWeight: 500, mb: 0.5 }}>
                  {event.desc}
                </Typography>


                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography variant="h5" color="#573EFF" sx={{ mb: 1 }}>
                    {event.joined}
                  </Typography>


                  <Box
                    sx={{
                      display: "inline-block",
                      bgcolor: event.categoryColor,
                      color: "#fff",
                      px: 5,
                      py: 1.1,
                      borderRadius: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {event.category}
                  </Box>

                </Box>



              </Box>
            ))}
          </Box>
        </Box>

      
      </Box>
    </Box>
  );
}






















