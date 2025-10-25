
import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import {
  CalendarToday,
  ExpandMore,
  ArrowBack,
  ArrowForward,
  CheckCircle,
} from "@mui/icons-material";
import dayjs from "dayjs";






export default function Verification() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [selectedDate, setSelectedDate] = useState(dayjs());

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

  // Handlers for date navigation
  const handlePreviousDay = () => setSelectedDate(selectedDate.subtract(1, "day"));
  const handleNextDay = () => setSelectedDate(selectedDate.add(1, "day"));
  const handleToday = () => setSelectedDate(dayjs());

  // Verification items
  const verificationItems = [
    {
      id: 1,
      title: "Church Identity Information",
      subtitle: "Let’s get to know your church",
      progress: 100,
    },
    {
      id: 2,
      title: "Primary Contact Details",
      subtitle: "Provide Primary Contact Details",
      progress: 100,
    },
    {
      id: 3,
      title: "Upload Verification Document",
      subtitle: "Add Supporting Documents",
      progress: 100,
    },
    {
      id: 4,
      title: "Confirm your pledge",
      subtitle: "One Last Step: Confirm Your Role",
      progress: 100,
    },
  ];







  
  return (
    <Box sx={{ px: 3, py: 2, width: "100%" }}>
      {/* Header */}
      <Stack spacing={1} mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 500, color: "#6B7280" }}>
          Manage your church information, branding, and preferences
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Verification
        </Typography>
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
          flexDirection: "column",
          alignItems: { xs: "stretch", md: "start" },
          gap: 3,
        }}
      >
        {verificationItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              cursor:'pointer',
              width: { xs: "100%", md: "60%" },
              bgcolor: "#fff",
              borderRadius: 3,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              p: 3,
              display: "flex",
              flexDirection: "column",
              border: "1px solid #E5E7EB",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              },
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={1.5}
            >
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                {item.title}
              </Typography>
              <CheckCircle sx={{ color: "#4F46E5" }} />
            </Stack>

            <Typography variant="h4" color="text.secondary" mb={2}>
              {item.subtitle}
            </Typography>

            <Box sx={{ width: "100%", mt: 1 }}>
              <Box
                sx={{
                  height: 8,
                  bgcolor: "#E5E7EB",
                  borderRadius: 5,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: `${item.progress}%`,
                    height: "100%",
                    bgcolor: "#4F46E5",
              
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{ mt: 1, fontWeight: 600, color: "#4F46E5" }}
              >
                {item.progress}%
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
