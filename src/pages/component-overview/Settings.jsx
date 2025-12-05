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
  Avatar,
  Switch,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function Settings() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const [activeTab, setActiveTab] = useState(0);

  const image =
    "https://images.unsplash.com/photo-1676151216174-763d844fa041?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbmRzb21lJTIwYmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D";

  // Handle window resize for zoom
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const zoom = useMemo(() => (width <= 768 ? 0.55 : 0.5), [width]);

  const zoom = useMemo(() => {
    if (width <= 768) return 0.55; // Mobile
    if (width <= 1200) return 0.8; // Tablets / small laptops
    if (width <= 1600) return 0.5; // Medium desktops
    return 0.7; // Large desktops
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

  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  // File upload handlers
  const handleLogoUpload = (event) => {
    console.log("Logo uploaded:", event.target.files[0]);
  };

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 2, width: "100%" }}>
      {/* Header */}
      <Stack spacing={1} mb={3}>
        <Typography variant="h3" sx={{ fontWeight: 500, color: "#6B7280" }}>
          Manage your Notification, Profile, and preferences
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 800 }}>
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
          flexWrap: "wrap",
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: { xs: "1rem", md: "1.5rem" },
            fontWeight: 600,

            color: "#6B7280",
            minWidth: "auto",
            px: { xs: 1, md: 3 },
          },
          "& .Mui-selected": {
            color: "#F17A28",
            fontWeight: 700,
          },
        }}
      >
        <Tab label="General Settings" />
        <Tab label="Profile Settings" />
        <Tab label="Policy Settings" />
        <Tab label="Notification Settings" />
      </Tabs>

      {/* General Information Tab Content */}
      {activeTab === 0 && (
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 3,
              mt: 7,
              color: "#111827",
              fontSize: 25,
            }}
          >
            General Settings
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
              mb: 4,
              "& .MuiInputBase-root": {
                height: 65,
                borderRadius: "10px",
              },
              "& .MuiInputBase-input::placeholder": {
                fontSize: "18px",
                color: "#111827",
                opacity: 1,
              },
            }}
          >
            {/* Left Column */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 20 }}>
                  Platform Name
                </Typography>
                <TextField
                  placeholder="Enter your Church name"
                  fullWidth
                  value="Mobile Mechanic"
                  disabled
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "1.2rem",
                      cursor: "not-allowed",
                    },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#f0f0f0", // gray background
                      cursor: "not-allowed",
                    },
                    "& .Mui-disabled": {
                      WebkitTextFillColor: "#000", // keep text dark even when disabled
                    },
                  }}
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 20 }}>
                  Support Email Address
                </Typography>
                <TextField
                  placeholder="mobilemechanicsupport@gmail.com"
                  fullWidth
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "1.4rem",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 20 }}>
                  Support Phone Number
                </Typography>
                <TextField
                  placeholder="+234 8107756532"
                  fullWidth
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "1.4rem",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Right Column */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Official Logo */}
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 20 }}>
                  Change Logo
                </Typography>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUpload />}
                  sx={{
                    bgcolor: "#F9FAFB",
                    color: "#F17A28",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1.3rem",
                    px: 30,
                    py: 5,
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
                    fontSize: 19,
                    mt: 1,
                  }}
                >
                  We only support JPEG, JPG, or PNG files. 1 MB max.
                </Typography>
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
                color: "black",
                fontSize: "1.2rem",
                fontWeight: 600,
                bgcolor: "#F9C29C",
                "&:hover": {
                  bgcolor: "#e98034ff",
                  borderColor: "#F9C29C",
                  color: "black",
                },
              }}
            >
              Restore Default
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 8,
                py: 2,
                fontWeight: 600,
                fontSize: "1.2rem",
                bgcolor: "#F17A28",
                "&:hover": { bgcolor: "#ed8d4cff" },
              }}
            >
              Update settings
            </Button>
          </Stack>
        </Box>
      )}

      {/* Profile Tab Content */}
      {activeTab === 1 && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 3, color: "#111827" }}
          >
            Profile
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
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 25 }}>
                  Profile Picture
                </Typography>

                <Box>
                  <Avatar src={image} sx={{ width: 240, height: 240, mt: 2 }} />
                </Box>

                <>
                  <AddAPhotoIcon
                    sx={{
                      position: "absolute",
                      fontSize: { xs: 55, sm: 40, md: 50 },
                      top: { xs: 470, sm: 500, md: 500 },
                      left: { xs: 200, sm: 200, md: 240 },
                      color: "#4F46E5",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      document.getElementById("logo-upload-input").click()
                    }
                  />

                  <input
                    id="logo-upload-input"
                    type="file"
                    accept="image/png, image/jpeg"
                    hidden
                    onChange={handleLogoUpload}
                  />
                </>

                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: 19,
                    mt: 1,
                  }}
                >
                  We only support JPEG, JPG, or PNG files. 1 MB max.
                </Typography>
              </Box>

              {/* Info */}
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 25 }}>
                  {" "}
                  Full Name{" "}
                </Typography>

                <Typography sx={{ color: "#6B7280", fontSize: 23, mt: 1 }}>
                  {" "}
                  Kelvin Ayomide
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 25 }}>
                  {" "}
                  Email Address
                </Typography>

                <Typography sx={{ color: "#6B7280", fontSize: 23, mt: 1 }}>
                  kelvinayomide@gmail.com
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 25 }}>
                  Phone Number
                </Typography>

                <Typography sx={{ color: "#6B7280", fontSize: 23, mt: 1 }}>
                  +234 8108864523
                </Typography>
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
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 25 }}>
                  User Name
                </Typography>

                <Typography sx={{ color: "#6B7280", fontSize: 23, mt: 1 }}>
                  kelvin
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 25 }}>
                  {" "}
                  Recovery Email Address
                </Typography>

                <Typography sx={{ color: "#6B7280", fontSize: 23, mt: 1 }}>
                  kelvinayomide2@gmail.com
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 25 }}>
                  Gender
                </Typography>

                <Typography sx={{ color: "#6B7280", fontSize: 23, mt: 1 }}>
                  Male
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: 25 }}>
                  Role
                </Typography>

                <Typography sx={{ color: "#6B7280", fontSize: 23, mt: 1 }}>
                  Super-Admin
                </Typography>
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
              variant="contained"
              sx={{
                textTransform: "none",
                textTransform: "none",
                borderRadius: "30px",
                px: 8,
                py: 2,
                fontWeight: 600,
                fontSize: "1.2rem",
                bgcolor: "#F17A28",
                "&:hover": { bgcolor: "#ed8d4cff" },
              }}
            >
              Edit Profile
            </Button>
          </Stack>
        </Box>
      )}

      {/* Policy Tab Content */}
      {activeTab === 2 && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={20}
            alignItems="flex-start"
            sx={{
              p: { xs: 0, md: 1 },
              width: "100%",
            }}
          >
            {/* LEFT COLUMN — Service Times */}
            <Box
              sx={{
                flex: 1,
                width: { xs: "100%", md: "50%" }, // full width on mobile
              }}
            >
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 30 }}>
                Policy
              </Typography>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h3">
                    Terms & Conditions <br />{" "}
                    <span style={{ fontSize: 17, color: "gray" }}>
                      last update March 15 2023
                    </span>
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#EA7400",
                      "&:hover": { backgroundColor: "#d46800" },
                      borderRadius: 2,
                      textTransform: "none",
                      py: 1.1,
                      px: 7,
                      fontWeight: 600,
                      fontSize: "1.2rem",
                    }}
                  >
                    <EditIcon sx={{ mr: 2 }} /> Edit
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
                  <Typography variant="h3">
                    Privacy Policy <br />{" "}
                    <span style={{ fontSize: 17, color: "gray" }}>
                      last update july 25 2024
                    </span>{" "}
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#EA7400",
                      "&:hover": { backgroundColor: "#d46800" },
                      borderRadius: 2,
                      textTransform: "none",
                      py: 1.1,
                      px: 7,
                      fontWeight: 600,
                      fontSize: "1.2rem",
                    }}
                  >
                    <EditIcon sx={{ mr: 2 }} /> Edit
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
                  <Typography variant="h3">
                    Refund Policy <br />{" "}
                    <span style={{ fontSize: 17, color: "gray" }}>
                      last update july 25 2024
                    </span>{" "}
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#EA7400",
                      "&:hover": { backgroundColor: "#d46800" },
                      borderRadius: 2,
                      textTransform: "none",
                      py: 1.1,
                      px: 7,
                      fontWeight: 600,
                      fontSize: "1.2rem",
                    }}
                  >
                    <EditIcon sx={{ mr: 2 }} /> Edit
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
                  <Typography variant="h3">
                    Platform Usage Guidelines <br />{" "}
                    <span style={{ fontSize: 17, color: "gray" }}>
                      last update september 5 2024
                    </span>{" "}
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#EA7400",
                      "&:hover": { backgroundColor: "#d46800" },
                      borderRadius: 2,
                      textTransform: "none",
                      py: 1.1,
                      px: 7,
                      fontWeight: 600,
                      fontSize: "1.2rem",
                    }}
                  >
                    <EditIcon sx={{ mr: 2 }} /> Edit
                  </Button>
                </Box>
              </Box>
            </Box>

            {/* RIGHT COLUMN  */}

            <Box
              sx={{
                flex: 1,
                width: { xs: "100%", md: "50%" }, // full width on mobile
              }}
            >
              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 30, mt: 3 }}>
                Policy Status Controls
              </Typography>

              {[
                "Require acceptance at sign-up",
                "Enable version history backup",
                "Auto-notify users on changes",
              ].map((label, index) => (
                <Stack
                  key={index}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    borderBottom: "1px solid #E5E7EB",
                    py: 1.5,
                    "&:last-child": { borderBottom: "none" },
                    width: "100%",
                    mt: 4,
                  }}
                >
                  <Typography sx={{ fontSize: 23, fontWeight: 500 }}>
                    {label}
                  </Typography>

                  <Switch
                    defaultChecked
                    sx={{
                      transform: { xs: "scale(1.4)", md: "scale(1.2)" },
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#F17A28",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#fac4a0ff",
                          opacity: 1,
                        },
                      "& .MuiSwitch-track": {
                        borderRadius: "20px",
                        backgroundColor: "#2b2b2cff",
                      },
                    }}
                  />
                </Stack>
              ))}
            </Box>
          </Stack>

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
                color: "black",
                fontSize: "1.2rem",
                fontWeight: 600,
                bgcolor: "#F9C29C",
                "&:hover": {
                  bgcolor: "#e98034ff",
                  borderColor: "#F9C29C",
                  color: "black",
                },
              }}
            >
              Restore Default
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 8,
                py: 2,
                fontWeight: 600,
                fontSize: "1.2rem",
                bgcolor: "#F17A28",
                "&:hover": { bgcolor: "#ed8d4cff" },
              }}
            >
              Save Changes
            </Button>
          </Stack>
        </Box>
      )}

      {/* Notifiation Tab content */}

      {activeTab === 3 && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 3, color: "#111827" }}
          >
            Notification Settings
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="flex-start"
            sx={{
              p: { xs: 0, md: 1 },
              width: "100%",
            }}
          >
            {/* LEFT COLUMN — Email Notification Toggles */}
            <Box
              sx={{
                flex: 1,
                width: { xs: "100%", md: "50%" }, // full width on mobile
              }}
            >
              {[
                "Notify mechanic when a new job is assigned",
                "Email admin on failed transactions",
                "Notify admin on completed transactions",
                "Alert admin when a mechanic profile is approved",
              ].map((label, index) => (
                <Stack
                  key={index}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    borderBottom: "1px solid #E5E7EB",
                    py: 1.5,
                    "&:last-child": { borderBottom: "none" },
                    width: "100%",
                    mt: 4,
                  }}
                >
                  <Typography sx={{ fontSize: 23, fontWeight: 500 }}>
                    {label}
                  </Typography>

                  <Switch
                    defaultChecked
                    sx={{
                      transform: { xs: "scale(1.4)", md: "scale(1.2)" },
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#F17A28",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#fac4a0ff",
                          opacity: 1,
                        },
                      "& .MuiSwitch-track": {
                        borderRadius: "20px",
                        backgroundColor: "#2b2b2cff",
                      },
                    }}
                  />
                </Stack>
              ))}
            </Box>

            {/* RIGHT COLUMN — SMS/Push Notification */}
            <Box
              sx={{
                flex: 1,
                width: { xs: "100%", md: "50%" }, // full width on mobile
              }}
            >
              {[
                "Alert Admin when a Mechanic Missed Job Deadline",
                "Alert Admin when a Complaint is Lodged",
                " Alert Admin when an Invoice is Generated",
              ].map((label, index) => (
                <Stack
                  key={index}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    borderBottom: "1px solid #E5E7EB",
                    py: 1.5,
                    "&:last-child": { borderBottom: "none" },
                    width: "100%",
                    mt: 4,
                  }}
                >
                  <Typography sx={{ fontSize: 23, fontWeight: 500 }}>
                    {label}
                  </Typography>

                  <Switch
                    defaultChecked
                    sx={{
                      transform: { xs: "scale(1.4)", md: "scale(1.2)" },
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#F17A28",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#fac4a0ff",
                          opacity: 1,
                        },
                      "& .MuiSwitch-track": {
                        borderRadius: "20px",
                        backgroundColor: "#2b2b2cff",
                      },
                    }}
                  />
                </Stack>
              ))}
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
                px: 10,
                py: 2,
                borderColor: "#E5E7EB",
                color: "black",
                fontSize: "1.2rem",
                fontWeight: 600,
                bgcolor: "#F9C29C",
                "&:hover": {
                  bgcolor: "#e98034ff",
                  borderColor: "#F9C29C",
                  color: "black",
                },
              }}
            >
              Restore Default
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 8,
                py: 2,
                fontWeight: 600,
                fontSize: "1.2rem",
                bgcolor: "#F17A28",
                "&:hover": { bgcolor: "#ed8d4cff" },
              }}
            >
              Save Changes
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
