
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Divider,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  OutlinedInput,
  useMediaQuery,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import background from "./images/background.png";
import logo from "./images/logo1.png";
import vector from "./images/Vector.png";
import { useNavigate } from "react-router-dom";

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [checked, setChecked] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  const uniformWidth = 450; 

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
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          px: { xs: 3, md: 5 },
          py: { xs: 3, md: 5 },
           height: isMobile ? "5vh" : "100vh", 
              flexShrink: 0,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(45, 0, 150, 0.65)",
            zIndex: 0,
          }}
        />

        {/* Logo */}
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
            style={{ height: isMobile ? 22 : 28, marginRight: 8 }}
          />
          <Typography sx={{ fontWeight: 600, fontSize: { xs: 16, md: 18 }, color: "#fff" }}>
            Worsship
          </Typography>
        </Box>

        {/* Text (desktop only) */}
        {!isMobile && (
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              color: "white",
             // mt: "auto",
            }}
          >
            
            <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 1 }}>
              Experience Worship, Anytime, Anywhere
            </Typography>
            <Typography sx={{ fontSize: 14, opacity: 0.9, mb: 10 }}>
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
          p: { xs: 3, md: 6 },
        }}
      >
        <Box   sx={{
    width: "100%",
    maxWidth: { xs: "100%", md: uniformWidth, sm:uniformWidth }, 
    mx: "auto", 
  }}>
          {/* Title */}
          <Typography
            sx={{
              fontWeight: 700,
              mb: 0.5,
              textAlign: "center",
              fontSize: 18,
              color: "#111",
            }}
          >
            {isLogin ? "Welcome Back!" : "Create My Account!"}
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: 12,
              textAlign: "center",
              mb: 3,
              lineHeight: 1.5,
            }}
          >
            {isLogin
              ? "Good to see you again. Let’s continue equipping your church to reach more souls, one service at a time."
              : "To begin this Worsship journey, tell us what your platform is about."}
          </Typography>

          {/* Toggle Buttons */}
          <Stack
            direction="row"
            spacing={0}
            sx={{
              bgcolor: "#f2f2f7",
              borderRadius: "10px",
              p: "2px",
              mb: 3,
              width: "100%", 
            }}
          >
            <Button
              fullWidth
              onClick={() => setIsLogin(false)}
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                bgcolor: !isLogin ? "#2D00F7" : "transparent",
                color: !isLogin ? "#fff" : "#555",
                fontWeight: 600,
                fontSize: 14,
                boxShadow: !isLogin ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
                "&:hover": { bgcolor: !isLogin ? "#2100b3" : "transparent" },
              }}
            >
              Sign Up
            </Button>
            <Button
              fullWidth
              onClick={() => setIsLogin(true)}
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                bgcolor: isLogin ? "#2D00F7" : "transparent",
                color: isLogin ? "#fff" : "#555",
                fontWeight: 600,
                fontSize: 14,
                boxShadow: isLogin ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
                "&:hover": { bgcolor: isLogin ? "#2100b3" : "transparent" },
              }}
            >
              Log In
            </Button>
          </Stack>

          {/* Forms */}
          <Stack spacing={2} sx={{ width: "100%" }}>
            {!isLogin ? (
              <form>
                <Grid  spacing={2.5} sx={{mt:1}}  >
                  {/* Church Name */}
                  <Grid item xs={12}>
                    <Stack sx={{ gap: 1 }}>
                      <InputLabel sx={{ fontSize: 10 }}>Your Church Name</InputLabel>
                      <OutlinedInput
                        placeholder="Enter your Church name"
                        sx={inputStyle}
                        fullWidth
                      />
                    </Stack>
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sx={{mt:1}}>
                    <Stack sx={{ gap: 1 }}>
                      <InputLabel sx={{ fontSize: 10 }}>Official Email Address</InputLabel>
                      <OutlinedInput
                        placeholder="Enter your church’s email address"
                        sx={inputStyle}
                        fullWidth
                      />
                    </Stack>
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} sx={{mt:1}} >
                    <Stack sx={{ gap: 1 }}>
                      <InputLabel sx={{ fontSize: 10 }}>Official Phone number</InputLabel>
                      <OutlinedInput
                        placeholder="Enter your official number"
                        sx={inputStyle}
                        fullWidth
                      />
                    </Stack>
                  </Grid>

                  {/* Terms */}
                  <Grid item xs={12} >
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={checked}
                          onChange={(e) => setChecked(e.target.checked)}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: 10, color:'black' }}>
                          I agree to terms & conditions
                        </Typography>
                      }
                    />
                  </Grid>

               
                </Grid>

                   {/* Create Account */}
                <Grid item xs={12} sx={{mt:isMobile ? 2 : 5}}>
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      sx={buttonStyle}
                    onClick={()=>navigate('/Authentication/CreatePassword')} 
                    >
                      Create Account
                    </Button>

                    <Divider sx={{ my: 1, color: "#aaa", fontSize: 13 }}>Or</Divider>

                    {/* Social Buttons */}
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button size="small" variant="outlined" sx={socialBtnStyle}>
                        <img src={vector} style={{ width: 12, height: 12 }} alt="google" />{" "}
                        Continue with Google
                      </Button>

                      <Button size="small" variant="outlined" sx={socialBtnStyle}>
                        <AppleIcon sx={{ width: 15, height: 15 }} /> Continue with Apple
                      </Button>
                    </Stack>
                  </Grid>
              </form>
            ) : (
              <>
                <Grid  spacing={2.5}>
                  <Grid item xs={12} >
                    <Stack sx={{ gap: 1 }}>
                      <InputLabel sx={{ fontSize: 10 }}>Email Address</InputLabel>
                      <OutlinedInput
                        placeholder="Enter your email address"
                        sx={inputStyle}
                        fullWidth
                      />
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sx={{mt:1}} >
                    <Stack sx={{ gap: 1 }}>
                      <InputLabel sx={{ fontSize: 10 }}>Password</InputLabel>
                      <OutlinedInput
                        placeholder="Enter your password"
                        sx={inputStyle}
                        fullWidth
                      />
                    </Stack>
                  </Grid>

          

               
                </Grid>
                        <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Grid item xs={12} >
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={checked}
                          onChange={(e) => setChecked(e.target.checked)}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: 10, color:'black' }}>
                          Remember Me
                        </Typography>
                      }
                    />
                  </Grid>








                      <Typography
                        sx={{
                          fontSize: 10,
                          color: "#2D00F7",
                          cursor: "pointer",
                        }}
                       onClick={()=>navigate('/Authentication/ResetPassword')}
                      >
                        Forgot Password?
                      </Typography>
                    </Box>
                  </Grid>
                  

                   <Grid item xs={12}>
                    <Button
                       onClick={()=>navigate('/Dashboard/Home')}
                      fullWidth
                      size="large"
                      variant="contained"
                      sx={buttonStyle}
                    >
                      Log In
                    </Button>
                  </Grid>
              </>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

// ✅ Styles




const inputStyle = {
  height: 42,
  width: { xs: "100%", sm: 430, md: 450 }, 
  boxSizing: "border-box",                 
  borderRadius: "10px",
  backgroundColor: "#F9FAFB",
  "& input::placeholder": {
    color: "#9e9e9e",
    fontSize: "10px",
    fontWeight: 400,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#E0E0E0",
  },
};

const buttonStyle = {
  bgcolor: "#2B04DB",
  color: "#fff",
  textTransform: "none",
  py: 1.2,
  borderRadius: 3,
  fontWeight: 600,
  fontSize: 15,
  "&:hover": { bgcolor: "#4a25d6" },
};

const socialBtnStyle = {
  borderRadius: "30px",
  gap: 1,
  fontSize: 8,
  borderColor: "gray",
  color: "gray",
  px: 2,
};

export default AuthScreen;









