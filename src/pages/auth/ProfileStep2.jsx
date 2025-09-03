import React from "react";
import {
  Box,
  Typography,
  Button,

  Stack,


} from "@mui/material";
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import background from "./images/plainbg.png";
import logo from "./images/logo1.png";

import Base1 from "./images/Base5.png"
import Base2 from "./images/Base6.png"
import Base3 from "./images/Base3.png"
import Base4 from "./images/Base4.png"



import { useNavigate } from "react-router-dom";






const ProfileStep2 = () => {

    const navigate = useNavigate()




  const Next = ()=>{
    navigate('/Authentication/ProfileStep3')
  }






















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
          position: "relative",
          p: { xs: 3, md: 5 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo */}
        <Box sx={{ zIndex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "14px", md: "18px" },
            }}
          >
            <img src={logo} alt="logo" height={24} /> Worsship
          </Typography>
        </Box>

        {/* Tagline */}
        <Box sx={{ mt: { xs: 3, md: 10 }, zIndex: 1 }}>
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

        {/* Stacked Images */}
        <Stack
          spacing={2}
          sx={{
            mt: { xs: 4, md: 8 },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <img src={Base1} alt="" style={{ maxWidth: "70%", height: "auto" }} />
          <img src={Base2} alt="" style={{ maxWidth: "70%", height: "auto" }} />
          <img src={Base3} alt="" style={{ maxWidth: "70%", height: "auto" }} />
          <img src={Base4} alt="" style={{ maxWidth: "70%", height: "auto" }} />
        </Stack>
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          //  width: { xs: "100%", md: "50%" },
            width: { xs: "96%", md: "50%" },
          p: { xs: 3, md: 6 },
          display: "flex",
          flex:1,
          flexDirection: "column",
          justifyContent: "center",
        //  backgroundColor: "#fff",
        alignItems:'center'
        }}
      >
        <Box sx={{ maxWidth: 400, mx: "auto", width: "100%" }}>

          <Typography sx={{position:'absolute', right:40, top:10, color:{sm:'white', xs:'white', md:'black'}}}>2 of 4</Typography>


          {/* Title */}
          <Typography
            sx={{
              fontWeight: "bold",
              mb: 1,
              textAlign: "center",
              fontSize: 17,
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
            }}
          >
            We’ll use this information to communicate verification updates and platform features with your leadership team.
          </Typography>


          {/* Form Fields */}
          <Stack spacing={1}>


            <form >
              <Grid container spacing={2}>


                <Grid size={12}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="company-signup" style={{ fontSize: 10 }}>Lead Pastor/Admin Full Name</InputLabel>
                    <OutlinedInput
                      id="company-signup"
                      name="company"
                      placeholder="Enter your Lead Pastor’s Full Name"
                      sx={{
                        height: 35,

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
                    <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Email Address</InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="email-login"
                      type="email"
                      name="email"
                      placeholder="Enter your lead pastor’s email address"
                      sx={{
                        height: 35,

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
                    <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Phone Number</InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="email-login"
                      type="email"
                      name="email"
                      placeholder="Enter your Lead Pastor’s phone number"
                      sx={{
                        height: 35,

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
                    <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Church Official  Website</InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="email-login"
                      type="email"
                      name="email"
                      placeholder="Add your Website Link"
                      sx={{
                        height: 35,

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
                    <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Church Official Social Media </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="email-login"
                      type="email"
                      name="email"
                      placeholder="Add your Social Media Link"
                      sx={{
                        height: 35,

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
                    <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Church Official Social Media </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="email-login"
                      type="email"
                      name="email"
                      placeholder="Add your Social Media Link"
                      sx={{
                        height: 35,

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






             
                  







  <Stack style={{flexDirection:'row', margin:'0px auto', gap:20, marginTop:5}}>


               
                  <Button  size="large" variant="contained"  style={{backgroundColor:'#E5E5FF', color:'#2B04DB', whiteSpace:'nowrap', width:130, fontSize:8, borderRadius:'30px'}}>
                    Save and Resume Later
                  </Button>
               
             


             
               
                  <Button  size="large" variant="contained"  style={{backgroundColor:'#2B04DB', fontSize:8, width:130, borderRadius:'30px'}} onClick={Next} >
                    Next
                  </Button>
               
           

             </Stack>















              </Grid>
            </form>





          </Stack>

        </Box>
      </Box>
    </Box>
  );
};

export default ProfileStep2;
