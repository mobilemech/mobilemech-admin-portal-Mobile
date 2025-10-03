import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,

  Stack,
  Divider,
  Checkbox,
  FormControlLabel,
  
} from "@mui/material";
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import AppleIcon from "@mui/icons-material/Apple";   
import background from "./images/background.png";
import logo from "./images/logo1.png";
import vector from "./images/Vector.png"
import { Link, useNavigate } from "react-router-dom";


const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate()


    
 



























  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Left Panel */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          px: 4,
          py: 5,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(20, 0, 80, 0.65)",
            zIndex: 0,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h6"
            sx={{ color: "#fff", display: "flex", alignItems: "center", gap: 1 }}
          >
            <img src={logo} alt="logo" height={26}  /> Worsship
          </Typography>
        </Box>

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize:14 }}>
            Experience Worship, Anytime, Anywhere
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff", mt: 1 }}>
            Join the conversation, and grow in faith.
          </Typography>
        </Box>
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          p: { xs: 3, md: 6 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        // backgroundColor: "#fff",
        //  maxWidth:{xs:330}
        }}
      >
        <Box sx={{ maxWidth: 400, mx: "auto", width: "100%" }}>
          {/* Title */}
          <Typography
            sx={{
              fontWeight: "bold",
              mb: 0.5,
              textAlign: "center",
              fontSize: 17,
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
              mb: 1,
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

          {/* Form Fields */}
          <Stack spacing={2} >
            {!isLogin && (
      
                 <form >
            <Grid container spacing={2.2}>
             
          
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="company-signup" style={{fontSize:10}}>Your Church Name</InputLabel>
                  <OutlinedInput
                    id="company-signup"
                    name="company"
                    placeholder="Enter your Church name"
                       sx={{
                        height:35, 

                          "& input::placeholder": {
                              color: "#9e9e9e",  
                              fontSize: "10px",   
                              fontWeight: 400,
                              opacity: 1,        
                          },

                           borderRadius: "10px",
                           backgroundColor: "#F9FAFB",   
                           "& .MuiOutlinedInput-notchedOutline": {
                               borderColor: "#E0E0E0",     
                           },



                      }}
                  />
                </Stack>
             
              </Grid>



              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="email-signup" style={{fontSize:10}}>Official Email Address</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="email-login"
                    type="email"
                    name="email"
                    placeholder="Enter your church’s email address"
                        sx={{
                        height:35, 

                          "& input::placeholder": {
                              color: "#9e9e9e",   
                              fontSize: "10px",   
                              fontWeight: 400,
                              opacity: 1,       
                          },

                           borderRadius: "10px",
                           backgroundColor: "#F9FAFB",     
                           "& .MuiOutlinedInput-notchedOutline": {
                               borderColor: "#E0E0E0",   
                           },



                      }}
                  />
                </Stack>
             
              </Grid>



                 
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="email-signup" style={{fontSize:10}}>Official Phone number</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="email-login"
                    type="email"
                    name="email"
                    placeholder="Enter your official number"
                       sx={{
                        height:35, 

                          "& input::placeholder": {
                              color: "#9e9e9e",   
                              fontSize: "10px",   
                              fontWeight: 400,
                              opacity: 1,        
                          },

                           borderRadius: "10px",
                           backgroundColor: "#F9FAFB",     
                           "& .MuiOutlinedInput-notchedOutline": {
                               borderColor: "#E0E0E0",       
                           },



                      }}
                  />
                </Stack>
             
              </Grid>



             



              <Grid size={12}>
               <Grid sx={{ mt: -1 }} size={12}>
                
                <Stack direction="row" sx={{ gap: 2, alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color={checked ? "#2B04DB" : "#2C2C31"}
                        size="small"
                      />
                    }
                    label={<Typography   color={checked ? "#2B04DB" : "#2C2C31"} sx={{fontSize:10}}>I agree to terms & conditions</Typography>}
                  />
               
                </Stack>

              </Grid>
              </Grid>
           
              <Grid size={12}>
                  
                  <Button fullWidth size="large" variant="contained"  style={{backgroundColor:'#2B04DB', borderRadius:'30px',}} onClick={()=>navigate('/Authentication/CreatePassword')} >
                    Create Account
                  </Button>
               
                     <Divider sx={{ my: 2, color: "#aaa", fontSize: 13 }}>Or</Divider> 

                    <Stack style={{flexDirection:'row', marginTop:-15, justifyContent:'center', alignItems:'center', gap:15}}>
                    <Button  size="small" variant="outlined"  style={{borderRadius:'30px', gap:10, fontSize:7, borderColor:'gray', color:'gray'}} >
                  <img src={vector} style={{width:12, height:12}} alt="google"/>  Continue with Google   
                  </Button>

                        <Button  size="small" variant="outlined"  style={{borderRadius:'30px', gap:10, fontSize:7, borderColor:'gray', color:'gray'}} >
                          <AppleIcon  style={{width:15, height:15}}/>  Continue with Apple
                  </Button>

                    </Stack>
                
              </Grid>


             









            </Grid>
          </form>






            )}

            {isLogin && (
              <>
                  
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="email-signup" style={{fontSize:10}}>Email Address</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="email-login"
                    type="email"
                    name="email"
                    placeholder="Enter your email Address"
                       sx={{
                        height:35, 

                          "& input::placeholder": {
                              color: "#9e9e9e",   
                              fontSize: "10px",   
                              fontWeight: 400,
                              opacity: 1,        
                          },

                           borderRadius: "10px",
                           backgroundColor: "#F9FAFB",     
                           "& .MuiOutlinedInput-notchedOutline": {
                               borderColor: "#E0E0E0",       
                           },



                      }}
                  />
                </Stack>
             
              </Grid>


    <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="email-signup" style={{fontSize:10}}>Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="email-login"
                    type="email"
                    name="email"
                    placeholder="Enter your Password"
                       sx={{
                        height:35, 

                          "& input::placeholder": {
                              color: "#9e9e9e",   
                              fontSize: "10px",   
                              fontWeight: 400,
                              opacity: 1,        
                          },

                           borderRadius: "10px",
                           backgroundColor: "#F9FAFB",     
                           "& .MuiOutlinedInput-notchedOutline": {
                               borderColor: "#E0E0E0",       
                           },



                      }}
                  />
                </Stack>
             
              </Grid>


                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={<Typography sx={{ fontSize: 10 }}>Remember me</Typography>}
                  />
                  <Typography
                    sx={{ fontSize: 10, color: "#2D00F7", cursor: "pointer" }} onClick={()=>navigate('/Authentication/ResetPassword')}
                  >
                    Forgot Password?
                  </Typography>
                </Box>



                
                  <Button fullWidth size="large" variant="contained"  style={{backgroundColor:'#2B04DB', borderRadius:'30px'}} >
                    Log in
                  </Button>
              </>
            )}
          </Stack>

        </Box>
      </Box>
    </Box>
  );
};

export default AuthScreen;
