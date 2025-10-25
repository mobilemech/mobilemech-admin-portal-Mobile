

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
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,



  Chip,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,

} from "@mui/material";
import {
  CalendarToday,
  ExpandMore,
  ArrowBack,
  ArrowForward,
  CloudUpload,
  Add,
  DeleteOutline,
  EditOutlined
} from "@mui/icons-material";


import dayjs from "dayjs";
import debitCard from "./debitCard.png"


const PRIMARY_COLOR = '#2B04DB';
const PRIMARY_GRADIENT = 'linear-gradient(135deg, #7838F4 0%, #2B04DB 100%)';

export default function ChurchSettings() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [activeTab, setActiveTab] = useState(0);
  const [colorTheme, setColorTheme] = useState("custom");
  //  const [currency, setCurrency] = useState('USD');

  const [serviceTimes, setServiceTimes] = useState(["09:00", "12:00", "15:00"]);
  const [livestreamUrl, setLivestreamUrl] = useState("");


  // State for Donation Preferences
  const [currency, setCurrency] = useState("USD"); // "USD" | "NGN" | "GBP"
  const [anonymousGiving, setAnonymousGiving] = useState("");
  const [suggestedAmount, setSuggestedAmount] = useState(""); // single-select
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' | 'direct' | 'transfer' | 'crypto'
  const [linkedAccounts, setLinkedAccounts] = useState([
    {
      id: 1,
      name: "Finci",
      last4: "2345",
      expires: "02/30",
      image:
        "https://images.unsplash.com/photo-1565372916746-3c6f4b9d9c3a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=25c8b4d4a6a8d9b1f3f6f8b2c9a2f9a0",
    },
  ]);
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [newLinkName, setNewLinkName] = useState("");
  const [newLinkNumber, setNewLinkNumber] = useState("");












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
  const handleColorThemeChange = (event) => setColorTheme(event.target.value);

  // File upload handlers
  const handleLogoUpload = (event) => {
    console.log("Logo uploaded:", event.target.files[0]);
  };

  const handleBannerUpload = (event) => {
    console.log("Banner uploaded:", event.target.files[0]);
  };




  const addServiceTime = () => setServiceTimes([...serviceTimes, ""]);
  const removeServiceTime = (index) =>
    setServiceTimes(serviceTimes.filter((_, i) => i !== index));

  const handleServiceTimeChange = (index, value) => {
    const newTimes = [...serviceTimes];
    newTimes[index] = value;
    setServiceTimes(newTimes);
  };
  const handleEditServiceTime = (index) => {
    // just trigger custom logic, open modal, or focus input
    console.log("Edit service time at index:", index);
  };






  const handleCurrencyChange = (event, value) => {
    if (value) setCurrency(value);
  };

  const handleSuggestedAmountSelect = (value) => {
    setSuggestedAmount((prev) => (prev === value ? "" : value));
  };

  const handlePaymentMethodChange = (event, value) => {
    if (value) setPaymentMethod(value);
  };

  const handleAddLinkOpen = () => {
    setNewLinkName("");
    setNewLinkNumber("");
    setLinkModalOpen(true);
  };











  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 2, width: "100%" }}>
      {/* Header */}
      <Stack spacing={1} mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 500, color: "#6B7280" }}>
          Manage your church information, branding, and preferences
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Church Settings
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
          flexWrap: "wrap",
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: { xs: "0.9rem", md: "1rem" },
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
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        mb={4}
      >
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

      {/* General Information Tab Content */}
      {activeTab === 0 && (
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 3, color: "#111827" }}
          >
            General Information
          </Typography>

          {/* Responsive grid layout */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
              mb: 4,
              "& .MuiInputBase-root": {
                height: 60,
                borderRadius: "10px",
              },
            }}
          >
            {/* Left Column */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                  Church Name
                </Typography>
                <TextField
                  placeholder="Enter your Church name"
                  fullWidth
                  size="small"
                />
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                  Official Email Address
                </Typography>
                <TextField
                  placeholder="Enter your church's email address"
                  fullWidth
                  size="small"
                />
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                  Official Phone Number
                </Typography>
                <TextField
                  placeholder="Enter your official number"
                  fullWidth
                  size="small"
                />
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                    Country
                  </Typography>
                  <TextField placeholder="Select your country" select fullWidth size="small">
                    <MenuItem value="Nigeria">Nigeria</MenuItem>
                    <MenuItem value="Ghana">Ghana</MenuItem>
                  </TextField>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                    State
                  </Typography>
                  <TextField placeholder="Select your state" select fullWidth size="small">
                    <MenuItem value="Lagos">Lagos</MenuItem>
                    <MenuItem value="Abuja">Abuja</MenuItem>
                  </TextField>
                </Box>
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                  Address
                </Typography>
                <TextField
                  placeholder="Enter your organisation's address"
                  fullWidth
                  size="small"
                />
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                  Official Website URL
                </Typography>
                <TextField
                  placeholder="Enter your official website"
                  fullWidth
                  size="small"
                />
              </Box>
            </Box>

            {/* Right Column */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                  Lead Pastor/Admin Full Name
                </Typography>
                <TextField
                  placeholder="Enter your Lead Pastor's Full Name"
                  fullWidth
                  size="small"
                />
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                  Email Address
                </Typography>
                <TextField
                  placeholder="Enter your lead pastor's email address"
                  fullWidth
                  size="small"
                />
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                  Phone Number
                </Typography>
                <TextField
                  placeholder="Enter your Lead Pastor's phone number"
                  fullWidth
                  size="small"
                />
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                  Official Social Media URL
                </Typography>
                <TextField
                  placeholder="Enter your church's social media link"
                  fullWidth
                  size="small"
                />
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 17 }}>
                  Lead Pastor's Social Media URL
                </Typography>
                <TextField
                  placeholder="Enter your lead pastor's social media link"
                  fullWidth
                  size="small"
                />
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="flex-end"
          >
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 10,
                py: 2,
                borderColor: "#E5E7EB",
                color: "#4F46E5",
                bgcolor: "#cde2f7ff",
                "&:hover": { bgcolor: "#F3F4F6" },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 8,
                py: 2,
                fontWeight: 600,
                bgcolor: "#4F46E5",
                "&:hover": { bgcolor: "#2014a1ff" },
              }}
            >
              Update settings
            </Button>
          </Stack>
        </Box>
      )}





      {/* Branding Tab Content */}
      {activeTab === 1 && (
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 3, color: "#111827" }}
          >
            Branding
          </Typography>

          {/* Main layout container */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="flex-start"
            sx={{ p: { xs: 0, md: 1 } }}
          >
            {/* LEFT COLUMN — Upload Section */}
            <Box sx={{ flex: 1 }}>
              {/* Official Logo */}
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 20 }}>
                  Official Logo
                </Typography>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUpload />}
                  sx={{
                    bgcolor: "#F9FAFB",
                    color: "#4F46E5",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    boxShadow: "none",
                    border: "1px solid #E5E7EB",
                    "&:hover": { bgcolor: "#F3F4F6" },
                  }}
                >
                  Upload
                  <input
                    type="file"
                    hidden
                    accept="image/png, image/jpeg"
                    onChange={handleLogoUpload}
                  />
                </Button>
                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: 17,
                    mt: 1,
                  }}
                >
                  We only support JPEG, JPG, or PNG files. 1 MB max.
                </Typography>
              </Box>

              {/* Official Banner / Cover Image */}
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 20 }}>
                  Official Banner/ Cover Image
                </Typography>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUpload />}
                  sx={{
                    bgcolor: "#F9FAFB",
                    color: "#4F46E5",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    boxShadow: "none",
                    border: "1px solid #E5E7EB",
                    "&:hover": { bgcolor: "#F3F4F6" },
                  }}
                >
                  Upload
                  <input
                    type="file"
                    hidden
                    accept="image/png, image/jpeg"
                    onChange={handleBannerUpload}
                  />
                </Button>
                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: 17,
                    mt: 1,
                  }}
                >
                  We only support JPEG, JPG, or PNG files. 1 MB max.
                </Typography>
              </Box>

              {/* Colour Theme Selector */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 20 }}>
                  Colour Theme Selector
                </Typography>
                <ToggleButtonGroup
                  color="primary"
                  exclusive
                  value={colorTheme}
                  onChange={(e, val) => val && setColorTheme(val)}
                  sx={{
                    "& .MuiToggleButton-root": {
                      textTransform: "none",
                      px: 3,
                      py: 1,
                      borderRadius: "20px",
                      fontWeight: 600,
                      fontSize: 20,
                      mr: 1,
                      borderColor: "#E5E7EB",
                      color: "#374151",
                      "&.Mui-selected": {
                        background: PRIMARY_GRADIENT,
                        color: "#fff",
                        border: "none",
                      },
                    },
                  }}
                >
                  <ToggleButton value="light">Light</ToggleButton>
                  <ToggleButton value="dark">Dark</ToggleButton>
                  <ToggleButton value="custom">Custom</ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Box>

            {/* RIGHT COLUMN — Preview Section */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 20 }}>
                Preview Banner
              </Typography>
              <Typography sx={{ color: "#6B7280", mb: 2, fontSize: 17 }}>
                Preview of how the banner looks on member-facing church page
              </Typography>
              <Box
                sx={{
                  border: "2px dashed #D1D5DB",
                  borderRadius: "12px",
                  bgcolor: "#F9FAFB",
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9CA3AF",
                  fontSize: 17,
                }}
              >
                Banner Preview Area
              </Box>
            </Box>
          </Stack>

          {/* Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="flex-end"
            mt={5}
          >
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 6,
                py: 1.5,
                borderColor: "#E5E7EB",
                color: "#2d24d4ff",
                bgcolor: "#cbdef2ff",
                "&:hover": { bgcolor: "#F3F4F6" },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 6,
                py: 1.5,
                fontWeight: 600,
                bgcolor: "#4F46E5",
                "&:hover": { bgcolor: "#4338CA" },
              }}
            >
              Update settings
            </Button>
          </Stack>
        </Box>
      )}






      {/* Service Schedule Tab Content */}
      {activeTab === 2 && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={8}
            alignItems="flex-start"
            sx={{ p: { xs: 0, md: 1 } }}
          >
            {/* LEFT COLUMN — Service Times */}
            <Box sx={{ flex: 1 }}>
              {serviceTimes.map((time, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography
                    sx={{ fontWeight: 600, mb: 1, fontSize: 20, color: "#111827" }}
                  >
                    Service Time
                  </Typography>
                  <TextField
                    fullWidth
                    type="time"
                    value={time}
                    onChange={(e) => handleServiceTimeChange(index, e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          size="small"
                          onClick={() => handleEditServiceTime(index)}
                          sx={{ color: "#6B7280" }}
                        >
                          <EditOutlined fontSize="small" />
                        </IconButton>
                      ),
                      sx: {
                        borderRadius: "12px",
                        bgcolor: "#F9FAFB",
                        height: 60,
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        "& fieldset": { borderColor: "#E5E7EB" },
                        "&:hover fieldset": { borderColor: "#C7D2FE" },
                        "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
                      },
                    }}
                  />
                </Box>
              ))}

              <Button
                startIcon={<Add />}
                onClick={addServiceTime}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#4F46E5",
                  mt: 1,
                  "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
                }}
              >
                Add New
              </Button>
            </Box>

            {/* RIGHT COLUMN — Livestream URL */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{ fontWeight: 600, mb: 1, fontSize: 20, color: "#111827" }}
              >
                Livestream setup url
              </Typography>
              <TextField
                fullWidth
                placeholder="service.hotchurch/worship"
                value={livestreamUrl}
                onChange={(e) => setLivestreamUrl(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                    bgcolor: "#F9FAFB",
                    height: 60,
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    "& fieldset": { borderColor: "#E5E7EB" },
                    "&:hover fieldset": { borderColor: "#C7D2FE" },
                    "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
                  },
                }}
              />
            </Box>
          </Stack>

          {/* ACTION BUTTONS */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="flex-end"
            mt={6}
          >
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 8,
                py: 2,
                borderColor: "#E5E7EB",
                color: "#4F46E5",
                bgcolor: "#9dc5ecff",
                "&:hover": { bgcolor: "#F3F4F6" },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 8,
                py: 2,
                fontWeight: 600,
                bgcolor: "#4F46E5",
                "&:hover": { bgcolor: "#4338CA" },
              }}
            >
              Update settings
            </Button>
          </Stack>
        </Box>
      )}






      {/* Donation Preference Tab Content */}


      {activeTab === 3 && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={8}
            alignItems="flex-start"
            sx={{ p: { xs: 0, md: 1 } }}
          >
            {/* LEFT COLUMN — Form */}
            <Box sx={{ flex: 1 }}>
              {/* Currency Selector */}
              <Typography sx={{ fontWeight: 600, mb: 1, fontSize: 20 }}>
                Currency Selector
              </Typography>
              <ToggleButtonGroup
                value={currency}
                exclusive
                onChange={handleCurrencyChange}
                sx={{
                  "& .MuiToggleButton-root": {
                    textTransform: "none",
                    borderRadius: "16px",
                    px: 3,
                    py: 1,
                    fontWeight: 700,
                    fontSize: 15,
                    border: "1px solid #E5E7EB",
                    color: "#374151",
                    "&.Mui-selected": {
                      background: PRIMARY_GRADIENT,
                      color: "#fff",
                      border: "none",
                    },
                    mr: 1,
                  },
                  mb: 3,
                }}
              >
                <ToggleButton value="USD">USD</ToggleButton>
                <ToggleButton value="NGN">NGN</ToggleButton>
                <ToggleButton value="GBP">GBP</ToggleButton>
                <ToggleButton value="add">Add New</ToggleButton>
                <ToggleButton value="auto">Auto by region</ToggleButton>
              </ToggleButtonGroup>

              {/* Anonymous Giving */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600, mb: 1, fontSize: 20 }}>
                  Allow Anonymous Giving
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your official number"
                  value={anonymousGiving}
                  onChange={(e) => setAnonymousGiving(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      height: 60,
                      bgcolor: "#F9FAFB",
                      "& fieldset": { borderColor: "#E5E7EB" },
                      "&:hover fieldset": { borderColor: "#C7D2FE" },
                      "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
                    },
                  }}
                />
              </Box>

              {/* Suggested giving amount */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600, mb: 1, fontSize: 20 }}>
                  Suggested giving amount
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                  {["5", "10", "50", "100"].map((amt) => (
                    <Chip
                      key={amt}
                      label={`$${amt}`}
                      clickable
                      onClick={() => handleSuggestedAmountSelect(amt)}
                      variant={suggestedAmount === amt ? "filled" : "outlined"}
                      sx={{
                        borderRadius: "12px",
                        fontWeight: 700,
                        px: 3,
                        py: 3,
                        fontSize: 20,
                        bgcolor: suggestedAmount === amt ? PRIMARY_COLOR : undefined,
                        color: suggestedAmount === amt ? "#fff" : "#374151",
                        borderColor: "#E5E7EB",
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Payment Method */}
              <Box sx={{ mb: 3, mt: 5 }}>
                <Typography sx={{ fontWeight: 600, mb: 3, fontSize: 20 }}>
                  Select Payment Method
                </Typography>
                <ToggleButtonGroup
                  value={paymentMethod}
                  exclusive
                  onChange={handlePaymentMethodChange}
                  sx={{
                    "& .MuiToggleButton-root": {
                      textTransform: "none",
                      borderRadius: "16px",
                      px: 3,
                      py: 1,
                      fontWeight: 700,
                      fontSize: 15,


                      border: "1px solid #E5E7EB",
                      color: "#374151",
                      "&.Mui-selected": {
                        background: PRIMARY_GRADIENT,
                        color: "#fff",
                        border: "none",
                      },
                      mr: 1,
                    },
                  }}
                >
                  <ToggleButton value="card">Pay with card</ToggleButton>
                  <ToggleButton value="direct">Direct Deposit</ToggleButton>
                  <ToggleButton value="transfer">Transfer</ToggleButton>
                  <ToggleButton value="crypto">Pay with crypto</ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Box>

            {/* RIGHT COLUMN — Linked Account */}
            <Box sx={{ flex: 1 }}>
              <Stack spacing={2} alignItems="flex-start">
                <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
                  Linked Account
                </Typography>

                {/* Single linked account preview (show first) */}

                <img src={debitCard} style={{ width: 400 }} />

                <Button
                  startIcon={<Add />}
                  onClick={handleAddLinkOpen}
                  sx={{
                    textTransform: "none",
                    borderRadius: "30px",
                    px: 8,
                    py: 2,
                    bgcolor: "#4F46E5",
                    color: "#fff",
                    fontSize: 17,
                    "&:hover": { bgcolor: "#4338CA", color: 'white' },
                  }}
                >
                  Add New Link
                </Button>
              </Stack>
            </Box>
          </Stack>

          <Divider sx={{ my: 4 }} />

          {/* Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="flex-end"
          >
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 8,
                py: 2,
                fontSize: 17,
                borderColor: "#E5E7EB",
                color: "#1008aaff",
                bgcolor: "#d4e6f9ff",
                "&:hover": { bgcolor: "#F3F4F6" },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 8,
                py: 2,
                fontWeight: 600,
                fontSize: 17,
                bgcolor: "#4F46E5",
                "&:hover": { bgcolor: "#4338CA" },
              }}
              onClick={() => {
                // submit payload (you can replace with actual API call)
                const payload = {
                  currency,
                  anonymousGiving,
                  suggestedAmount,
                  paymentMethod,
                  linkedAccounts,
                };
                console.log("Save Donation Preferences:", payload);
              }}
            >
              Update settings
            </Button>
          </Stack>


        </Box>
      )}








      {activeTab === 4 && (
        <Typography color="text.secondary">Notification Settings content will go here</Typography>
      )}
    </Box>
  );
}















































