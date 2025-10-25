

import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  CalendarToday,
  ExpandMore,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import dayjs from "dayjs";

export default function Settings() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [activeTab, setActiveTab] = useState(0);

  // Handle window resize for zoom
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const zoom = useMemo(() => (width <= 768 ? 0.55 : 0.5), [width]);

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

  const handlePreviousDay = () => setSelectedDate(selectedDate.subtract(1, "day"));
  const handleNextDay = () => setSelectedDate(selectedDate.add(1, "day"));
  const handleToday = () => setSelectedDate(dayjs());
  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  return (
    <Box sx={{ px: 3, py: 2, width: "100%" }}>
      {/* Header */}
      <Stack spacing={1} mb={3}>
        <Typography variant="h5" sx={{ fontWeight: 500, color: "#6B7280" }}>
          Manage your church information, branding, and preferences
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Settings
        </Typography>
      </Stack>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="inherit"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          borderBottom: "1px solid #E5E7EB",
          mb: 3,
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#6B7280",
            minWidth: "auto",
            px: { xs: 1, md: 3 },
          },
          "& .Mui-selected": {
            color: "#4F46E5",
            fontWeight: 700,
          },
        }}
      >
        <Tab label="General Information" />
        <Tab label="Branding" />
        <Tab label="Service Schedule" />
        <Tab label="Donation Preferences" />
        <Tab label="Notification Settings" />
      </Tabs>

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

      {/* Tab Content */}
      {activeTab === 0 && (
        <>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 3, color: "#111827" }}
          >
            General Information
          </Typography>

          {/* Two Column Layout */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="flex-start"
            mb={4}
          >
            {/* Left Column */}
            <Stack spacing={2} flex={1}>
              <TextField
                label="Your Church Name"
                placeholder="Enter your Church name"
                fullWidth
                size="small"
              />
              <TextField
                label="Official Email Address"
                placeholder="Enter your church’s email address"
                fullWidth
                size="small"
              />
              <TextField
                label="Official Phone Number"
                placeholder="Enter your official number"
                fullWidth
                size="small"
              />
              <Stack direction="row" spacing={2}>
                <TextField
                  label="Country"
                  placeholder="Select your country"
                  select
                  fullWidth
                  size="small"
                >
                  <MenuItem value="Nigeria">Nigeria</MenuItem>
                  <MenuItem value="Ghana">Ghana</MenuItem>
                </TextField>
                <TextField
                  label="State"
                  placeholder="Select your state"
                  select
                  fullWidth
                  size="small"
                >
                  <MenuItem value="Lagos">Lagos</MenuItem>
                  <MenuItem value="Abuja">Abuja</MenuItem>
                </TextField>
              </Stack>
              <TextField
                label="Address"
                placeholder="Enter your organisation’s address"
                fullWidth
                size="small"
              />
              <TextField
                label="Official Website URL"
                placeholder="Enter your official website"
                fullWidth
                size="small"
              />
            </Stack>

            {/* Right Column */}
            <Stack spacing={2} flex={1}>
              <TextField
                label="Lead Pastor/Admin Full Name"
                placeholder="Enter your Lead Pastor’s Full Name"
                fullWidth
                size="small"
              />
              <TextField
                label="Email Address"
                placeholder="Enter your lead pastor’s email address"
                fullWidth
                size="small"
              />
              <TextField
                label="Phone Number"
                placeholder="Enter your Lead Pastor’s phone number"
                fullWidth
                size="small"
              />
              <TextField
                label="Official Social Media URL"
                placeholder="Enter your church’s social media link"
                fullWidth
                size="small"
              />
              <TextField
                label="Official Social Media URL"
                placeholder="Enter your lead pastor’s social media link"
                fullWidth
                size="small"
              />
            </Stack>
          </Stack>

          <Divider sx={{ my: 3 }} />

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                px: 4,
                py: 1,
                borderColor: "#E5E7EB",
                color: "#4F46E5",
                bgcolor: "#F9FAFB",
                "&:hover": { bgcolor: "#F3F4F6" },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                px: 4,
                py: 1,
                fontWeight: 600,
                bgcolor: "#4F46E5",
                "&:hover": { bgcolor: "#4338CA" },
              }}
            >
              Update settings
            </Button>
          </Stack>
        </>
      )}

      {activeTab === 1 && (
        <Typography color="text.secondary">Branding content will go here</Typography>
      )}
      {activeTab === 2 && (
        <Typography color="text.secondary">Service Schedule content will go here</Typography>
      )}
      {activeTab === 3 && (
        <Typography color="text.secondary">Donation Preferences content will go here</Typography>
      )}
      {activeTab === 4 && (
        <Typography color="text.secondary">Notification Settings content will go here</Typography>
      )}
    </Box>
  );
}
