
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Grid,
  Stack,
} from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import logo from "../images/back.png";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ResetPassword = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          flex: { xs: "0 0 auto", md: 1 },
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          px: { xs: 3, md: 5 },
          py: { xs: 3, md: 5 },
          height: isMobile ? "10vh" : "100vh",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#f17a28",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            width: "100%",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: isMobile ? 40 : 50, marginRight: 8 }}
          />
        </Box>

        {!isMobile && (
          <Box sx={{ position: "relative", zIndex: 1, color: "white" }}>
            <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 1 }}>
              Experience Worship, Anytime, Anywhere
            </Typography>
            <Typography sx={{ fontSize: 14, opacity: 0.9, mb: 3 }}>
              Join the conversation, and grow in faith.
            </Typography>
          </Box>
        )}
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, md: 6 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: 420 },
            textAlign: "center",
            p: { xs: 1, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 1, color: "#534f4fff" }}
          >
            Password Reset
          </Typography>
          <Typography sx={{ color: "#454545", mb: 4, fontSize: 12 }}>
            You need to verify your account to reset password. Please enter your
            email
          </Typography>

          <Grid  spacing={2}>
            <Grid item xs={12}>
              <Stack>
                <OutlinedInput
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={inputStyle}
                  fullWidth
                />
              </Stack>
            </Grid>
          </Grid>

          <Box
            style={{
              backgroundColor: "#eef0faff",
              marginTop: 20,
              borderRadius: "10px",
              padding: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <ErrorOutlineIcon sx={{ fontSize: 16, color: "#f17a28" }} />
            <Typography sx={{ fontSize: 10, color: "#999" }}>
              A verification code will be sent to{" "}
              <span style={{ color: "#f17a28", fontWeight: "700" }}>
                {email}
              </span>
            </Typography>
          </Box>

          <Button
            onClick={() => navigate("/Authentication/VerifyPassCode")}
            fullWidth
            sx={{
              mt: 3,
              bgcolor: "#f17a28",
              color: "#fff",
              textTransform: "none",
              py: 1,
              borderRadius: 10,
              fontWeight: "bold",
              fontSize: 16,
              "&:hover": { bgcolor: "#ef8e4eff", color: "white" },
            }}
          >
            Verify
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const inputStyle = {
  height: 42,
  width: "100%",
  borderRadius: "10px",
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ccc" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#f17a28" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#f17a28" },
  "&.Mui-focused": { boxShadow: "none" },
};

export default ResetPassword;






