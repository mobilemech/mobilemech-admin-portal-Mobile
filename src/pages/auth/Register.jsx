
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
  IconButton,
  InputAdornment,
} from "@mui/material";

import logo from "./images/back.png";
import { useNavigate } from "react-router-dom";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [checked, setChecked] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);









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
          //  backgroundImage: `url(${splashScreen})`,
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
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: '#f17a28',
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
            style={{ height: isMobile ? 40 : 50, marginRight: 8 }}
          />

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
              MobileFix
            </Typography>
            <Typography sx={{ fontSize: 14, opacity: 0.9, mb: 3 }}>
              Your Road Partner in every mile.
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
        <Box sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: uniformWidth, sm: uniformWidth },
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
              ? "Good to see you again! Log in to access your admin dashboard"
              : "Your account will allow you to oversee data, users, and operations."}
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
                bgcolor: !isLogin ? "#f17a28" : "transparent",
                color: !isLogin ? "#fff" : "#555",
                fontWeight: 600,
                fontSize: 14,
                boxShadow: !isLogin ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
                "&:hover": { bgcolor: !isLogin ? "#f17a28" : "", color: 'black' },
                "&:focus": { outline: "none" },
                "&.Mui-focusVisible": { outline: "none", boxShadow: "none" },
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
                bgcolor: isLogin ? "#f17a28" : "transparent",
                color: isLogin ? "#fff" : "#555",
                fontWeight: 600,
                fontSize: 14,
                boxShadow: isLogin ? "0 2px 6px rgba(0,0,0,0.15)" : "none",
                "&:hover": { bgcolor: isLogin ? "#f17a28" : "", color: "black" },
                "&:focus": { outline: "none" },
                "&.Mui-focusVisible": { outline: "none", boxShadow: "none" },
              }}
            >
              Log In
            </Button>

          </Stack>

          {/* Forms */}
          <Stack spacing={2} sx={{ width: "100%" }}>
            {!isLogin ? (
              <form>
                <Grid spacing={2.5} sx={{ mt: 1 }}  >


                  {/* Email */}
                  <Grid item xs={12} sx={{ mt: 1 }}>
                    <Stack sx={{ gap: 1 }}>
                      <InputLabel sx={{ fontSize: 10 }}>Email Address</InputLabel>
                      <OutlinedInput
                        placeholder="Enter your email address"
                        sx={inputStyle}
                        fullWidth
                      />
                    </Stack>
                  </Grid>





                  <InputLabel sx={{ fontSize: 10, mt: 2 }}>Password</InputLabel>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    fullWidth
                    sx={{
                      height: 45,
                      mb: 3,
                      borderRadius: 2,

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ccc",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#f17a28",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#f17a28",
                      },
                      "&.Mui-focused": {
                        boxShadow: "none",
                      },
                    }}

                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <VisibilityOff sx={{ fontSize: 18 }} /> : <Visibility sx={{ fontSize: 18 }} />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />













                  {/* Confirm Password */}
                  <InputLabel sx={{ fontSize: 10 }}>Confirm Password</InputLabel>
                  <OutlinedInput
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm password"
                    fullWidth
                    sx={{
                      height: 45,
                      mb: 3,
                      borderRadius: 2,

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ccc",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#f17a28",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#f17a28",
                      },
                      "&.Mui-focused": {
                        boxShadow: "none",
                      },
                    }}

                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                          {showConfirm ? <VisibilityOff sx={{ fontSize: 18 }} /> : <Visibility sx={{ fontSize: 18 }} />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />







                  {/* Terms */}
                  <Grid item xs={12} >
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={checked}
                          onChange={(e) => setChecked(e.target.checked)}
                          sx={{
                            color: '#f17a28',
                            '&.Mui-checked': {
                              color: 'orange',
                            },
                          }}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: 10, color: 'black' }}>
                          I agree to terms & conditions
                        </Typography>
                      }
                    />
                  </Grid>


                </Grid>

                {/* Create Account */}
                <Grid item xs={12} sx={{ mt: isMobile ? 2 : 5 }}>
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    sx={buttonStyle}
                    onClick={() => navigate('/Authentication/VerifyCode')}
                  >
                    Create Account
                  </Button>




                </Grid>
              </form>
            ) : (
              <>
                <Grid spacing={2.5}>
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

                  <Grid item xs={12} sx={{ mt: 1 }} >
                    <InputLabel sx={{ fontSize: 10, mt: 2 }}>Password</InputLabel>
                    <OutlinedInput
                      type={showPassword2 ? "text" : "password"}
                      placeholder="Enter password"
                      fullWidth
                      sx={{
                        height: 45,
                        mb: 3,
                        borderRadius: 2,

                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ccc",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#f17a28",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#f17a28",
                        },
                        "&.Mui-focused": {
                          boxShadow: "none",
                        },
                      }}

                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword2(!showPassword2)}>
                            {showPassword2 ? <VisibilityOff sx={{ fontSize: 18 }} /> : <Visibility sx={{ fontSize: 18 }} />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
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
                            sx={{
                              color: '#f17a28',
                              '&.Mui-checked': {
                                color: 'orange',
                              },
                            }}
                          />
                        }
                        label={
                          <Typography sx={{ fontSize: 10, color: 'black' }}>
                            Remember Me
                          </Typography>
                        }
                      />
                    </Grid>








                    <Typography
                      sx={{
                        fontSize: 10,
                        color: "#f17a28",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate('/Authentication/ResetPassword')}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>
                </Grid>


                <Grid item xs={12}>
                  <Button
                    onClick={() => navigate('/Dashboard/Home')}
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

// Styles




const inputStyle = {
  height: 42,
  width: { xs: "100%", sm: 430, md: 450 },
  borderRadius: "10px",


  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ccc",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#f17a28",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#f17a28",
  },


  "&.Mui-focused": {
    boxShadow: "none",
  },
};


const buttonStyle = {
  bgcolor: "#f17a28",
  color: "#fff",
  textTransform: "none",
  py: 1.2,
  borderRadius: 20,
  fontWeight: 600,
  fontSize: 15,
  "&:hover": { bgcolor: "#f28b46ff" },
};

export default AuthScreen;









