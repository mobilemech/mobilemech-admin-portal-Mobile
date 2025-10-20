


import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  InputLabel,
  OutlinedInput,
  useMediaQuery,
} from "@mui/material";
import background from "./images/plainbg.png";
import logo from "./images/logo1.png";
import Base1 from "./images/Base5.png";
import Base2 from "./images/Base6.png";
import Base3 from "./images/Base3.png";
import Base4 from "./images/Base4.png";
import { useNavigate } from "react-router-dom";

const ProfileStep2 = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const Next = () => {
     navigate('/Authentication/ProfileStep3')
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
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
          {/* Step Indicator */}
          <Typography
            sx={{
              position: "absolute",
              right: 20,
              top: 10,
              color: { xs: "white", md: "black" },
              fontSize: 12,
            }}
          >
            2 of 4
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
            Primary Contact Details
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
            We’ll use this information to communicate verification updates and
            platform features with your leadership team.
          </Typography>

          {/* FORM */}
          <form style={{ width: "100%" }}>
            <Stack spacing={2}>
              {[
                {
                  label: "Lead Pastor/Admin Full Name",
                  placeholder: "Enter your Lead Pastor’s Full Name",
                },
                {
                  label: "Email Address",
                  placeholder: "Enter your Lead Pastor’s email address",
                },
                {
                  label: "Phone Number",
                  placeholder: "Enter your Lead Pastor’s phone number",
                },
                {
                  label: "Church Official Website",
                  placeholder: "Add your Website Link",
                },
                {
                  label: "Church Official Social Media",
                  placeholder: "Add your Social Media Link",
                },
              ].map((field, i) => (
                <Box key={i}>
                  <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>
                    {field.label}
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    placeholder={field.placeholder}
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
                  onClick={Next}
                  sx={{
                    backgroundColor: "#2B04DB",
                    borderRadius: "30px",
                    fontSize: 12,
                    py: 1.2,
                    textTransform: "none",
                    color: "#fff",
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

export default ProfileStep2;


