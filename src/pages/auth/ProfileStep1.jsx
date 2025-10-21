
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Select,
  FormControl,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import background from "./images/plainbg.png";
import logo from "./images/logo1.png";
import Base1 from "./images/Base1.png";
import Base2 from "./images/Base2.png";
import Base3 from "./images/Base3.png";
import Base4 from "./images/Base4.png";

const ProfileStep1 = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");






















  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          p: { xs: 2, md: 5 },
          display: "flex",
          flexDirection: "column",
          height: { xs: "8vh", md: "100vh" },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: 14, md: 18 },
              fontWeight: 600,
            }}
          >
            <img src={logo} alt="logo" height={24} /> Worsship
          </Typography>
        </Box>

        {!isMobile && (
          <>
            <Box sx={{ mt: 8 }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: { xs: 12, sm: 14, md: 16 },
                }}
              >
                Hi! House of the Rock Lagos Nigeria
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  mt: 1,
                  fontSize: { xs: 10, sm: 12, md: 13 },
                }}
              >
                Join the conversation, and grow in faith.
              </Typography>
            </Box>

            <Stack spacing={2} sx={{ mt: 6 }}>
              {[Base1, Base2, Base3, Base4].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{ maxWidth: "70%", height: "auto" }}
                />
              ))}
            </Stack>
          </>
        )}
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          flex: 1,
          width: { xs: "100%", md: "50%" },
          backgroundColor: "#fff",
          p: { xs: 2, sm: 4, md: 6 },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          overflowY: { xs: "auto", md: "hidden" },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "600px",
            mx: "auto",
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          {/* Progress */}
          <Typography
            sx={{
              position: "absolute",
              right: 20,
              top: 10,
              color: { xs: "white", md: "black" },
              fontSize: 12,
            }}
          >
            1 of 4
          </Typography>

          {/* Title */}
          <Typography
            sx={{
              fontWeight: 700,
              mb: 1,
              textAlign: "center",
              fontSize: 18,
              color: "#111",
            }}
          >
            Church Identity Information
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: 12,
              textAlign: "center",
              mb: 3,
              lineHeight: 1.5,
              maxWidth: 450,
              mx: "auto",
            }}
          >
            Verifying your church ensures trust, helps members find you faster,
            and unlocks all platform features.
          </Typography>

          {/* FORM */}
          <form style={{ width: "100%" }}>
            <Stack spacing={2}>
              {/* Text Inputs */}
              {[
                {
                  label: "Legal Name/Organization name",
                  placeholder: "Enter your Organization name",
                },
                {
                  label: "Address",
                  placeholder: "Enter your organisation’s address",
                },
              ].map((field, i) => (
                <Box key={i}>
                  <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>
                    {field.label}
                  </InputLabel>
                  <OutlinedInput
                    placeholder={field.placeholder}
                    fullWidth
                    sx={{
                      height: 45,
                      borderRadius: "10px",
                      backgroundColor: "#F9FAFB",
                      "& input::placeholder": {
                        color: "#9e9e9e",
                        fontSize: "10px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E0E0E0",
                      },
                    }}
                  />
                </Box>
              ))}

              {/* DROPDOWNS */}
              {/* Row 1 */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  width: "100%",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>
                    Denomination
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      defaultValue=""
                      sx={{
                        borderRadius: "10px",
                        backgroundColor: "#F9FAFB",
                        height: 45,
                      }}
                    >
                      <MenuItem value="">Select Denomination</MenuItem>
                      <MenuItem value={10}>Option 1</MenuItem>
                      <MenuItem value={20}>Option 2</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ flex: 1 }}>
                  <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>Country</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      defaultValue=""
                      sx={{
                        borderRadius: "10px",
                        backgroundColor: "#F9FAFB",
                        height: 45,
                      }}
                    >
                      <MenuItem value="">Select Country</MenuItem>
                      <MenuItem value={10}>Nigeria</MenuItem>
                      <MenuItem value={20}>Ghana</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              {/* Row 2 */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  width: "100%",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>State</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      defaultValue=""
                      sx={{
                        borderRadius: "10px",
                        backgroundColor: "#F9FAFB",
                        height: 45,
                      }}
                    >
                      <MenuItem value="">Select State</MenuItem>
                      <MenuItem value={10}>Lagos</MenuItem>
                      <MenuItem value={20}>Abuja</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ flex: 1 }}>
                  <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>
                    Worship Style
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      defaultValue=""
                      sx={{
                        borderRadius: "10px",
                        backgroundColor: "#F9FAFB",
                        height: 45,
                      }}
                    >
                      <MenuItem value="">Select Worship Style</MenuItem>
                      <MenuItem value={10}>Traditional</MenuItem>
                      <MenuItem value={20}>Contemporary</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              {/* Row 3 */}
              <Box sx={{ width: "100%" }}>
                <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>Language</InputLabel>
                <FormControl fullWidth>
                  <Select
                    defaultValue=""
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "#F9FAFB",
                      height: 45,
                    }}
                  >
                    <MenuItem value="">Select Language</MenuItem>
                    <MenuItem value={10}>Yoruba</MenuItem>
                    <MenuItem value={20}>Igbo</MenuItem>
                    <MenuItem value={30}>Hausa</MenuItem>
                    <MenuItem value={40}>English</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* BUTTONS */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                sx={{ mt: 3 }}
              >
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: "#E5E5FF",
                    color: "#2B04DB",
                    borderRadius: "30px",
                    fontSize: 12,
                    py: 1.2,
                    textTransform: "none",
                  }}
                >
                  Save & Resume Later
                </Button>

                <Button
                  fullWidth
                  onClick={() => navigate('/Authentication/ProfileStep2')}
                  sx={{
                    backgroundColor: "#2B04DB",
                    borderRadius: "30px",
                    fontSize: 12,
                    py: 1.2,
                    textTransform: "none",
                    color: "#fff",
                      "&:hover": { bgcolor: "#4a25d6", color:'white' },
                  }}
                >
                  Next
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileStep1;

