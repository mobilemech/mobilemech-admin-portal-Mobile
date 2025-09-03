import React, { useState } from "react";
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

import Base1 from "./images/Base1.png"
import Base2 from "./images/Base2.png"
import Base3 from "./images/Base3.png"
import Base4 from "./images/Base4.png"


import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";






const ProfileStep1 = () => {
  const navigate = useNavigate()

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [denomination, setDenomination] = useState('');
 
  const [language, setLanguage] = useState('');


  const Next = ()=>{
    navigate('/Authentication/ProfileStep2')

  }





  const handleChangeState = (event) => {
    setState(event.target.value);
  };



  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };


  const handleChangeDenomination = (event) => {
    setDenomination(event.target.value);
  };


 

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

















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
          <img src={Base1} alt="" style={{ maxWidth: "70%", height: "auto", }} />
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
        <Box  >

          <Typography sx={{position:'absolute', right:40, top:10, color:{sm:'white', xs:'white', md:'black'}}}>1 of 4</Typography>


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
            Church Identity Information
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: 12,
              textAlign: "center",
              mb: 3,
              lineHeight: 1.5,
               maxWidth:{xs:310, md:450},
            }}
          >
            Verifying your church ensures trust, helps members find you faster, and unlocks all platform features.
          </Typography>


          {/* Form Fields */}
          <Stack spacing={1}  sx={{ maxWidth:{xs:340, md:450}, }}>


            <form >
              <Grid container spacing={2} >


                <Grid size={12}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="company-signup" style={{ fontSize: 10 }}>Legal Name/Organization name</InputLabel>
                    <OutlinedInput
                      id="company-signup"
                      name="company"
                      placeholder="Enter your Organization name"
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
                    <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}> Address</InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="email-login"
                      type="email"
                      name="email"
                      placeholder="Enter your organisation’s address"
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
                     <InputLabel htmlFor="company-signup" style={{ fontSize: 10 }}>Denomination</InputLabel>
                    <FormControl 
                    fullWidth 

                    sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "5px",
                          background: "#F9FAFB",
                          height: "37px",
                        },
                      }}
                    
                    >
                      
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={denomination}
                        label="denomination"
                        onChange={handleChangeDenomination}
                      >
                            <MenuItem value={10}>option1</MenuItem>
                              <MenuItem value={20}>option2</MenuItem>
                              <MenuItem value={30}>option3</MenuItem>
                              <MenuItem value={30}>option4</MenuItem>
                              <MenuItem value={30}>option5</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>





                  
                <Grid size={12}>
                     <InputLabel htmlFor="company-signup" style={{ fontSize: 10 }}>Country</InputLabel>
                    <FormControl
                      fullWidth

                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "5px",
                          background: "#F9FAFB",
                          height: "37px",
                        },
                      }}


                    >
                      
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={country}
                        label="Country"
                        onChange={handleChangeCountry}
                      >
                        <MenuItem value={10}>Nigeria</MenuItem>
                        <MenuItem value={20}>Ghana</MenuItem>
                        <MenuItem value={30}>Egypy</MenuItem>
                        <MenuItem value={30}>Congo</MenuItem>
                        <MenuItem value={30}>Liberia</MenuItem>
                      </Select>
                    </FormControl>
              </Grid>




                <Grid size={12}>
                     <InputLabel htmlFor="company-signup" style={{ fontSize: 10 }}>State</InputLabel>
                    <FormControl 
                    fullWidth 

                    sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "5px",
                          background: "#F9FAFB",
                          height: "37px",
                        },
                      }}
                    
                    >
                      
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state}
                        label="state"
                        onChange={handleChangeState}
                      >
                        <MenuItem value={10}>Abia</MenuItem>
                        <MenuItem value={20}>Lagos</MenuItem>
                        <MenuItem value={30}>Kwara</MenuItem>
                        <MenuItem value={30}>Enugu</MenuItem>
                        <MenuItem value={30}>Kano</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
{/* 
                </Stack> */}








             
                  


                  
                 <Grid size={12}>
                     <InputLabel htmlFor="company-signup" style={{ fontSize: 10 }}>Worship Style</InputLabel>
                    <FormControl
                      fullWidth

                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "5px",
                          background: "#F9FAFB",
                          height: "37px",
                        },
                      }}


                    >
                      
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={language}
                        label="language"
                        onChange={handleChangeLanguage}
                      >
                              <MenuItem value={10}>option1</MenuItem>
                              <MenuItem value={20}>option2</MenuItem>
                              <MenuItem value={30}>option3</MenuItem>
                              <MenuItem value={30}>option4</MenuItem>
                              <MenuItem value={30}>option5</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>




                 <Grid size={12}>
                     <InputLabel htmlFor="company-signup" style={{ fontSize: 10 }}>Language</InputLabel>
                    <FormControl 
                    fullWidth 

                    sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "5px",
                          background: "#F9FAFB",
                          height: "37px",
                        },
                      }}
                    
                    > 
                      
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state}
                        label="state"
                        onChange={handleChangeState}
                      >
                         <MenuItem value={10}>Yoruba</MenuItem>
                              <MenuItem value={20}>Igbo</MenuItem>
                              <MenuItem value={30}>Hausa</MenuItem>
                              <MenuItem value={30}>English</MenuItem>
                              <MenuItem value={30}>Spanish</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>










  <Stack style={{flexDirection:'row', margin:'20px auto', gap:20, }}>


                
               
                  <Button  size="large" variant="contained"  style={{backgroundColor:'#E5E5FF', color:'#2B04DB', whiteSpace:'nowrap', width:130, fontSize:8, borderRadius:'30px'}}>
                    Save and Resume Later
                  </Button>
               
           


                
               
                  <Button  size="large" variant="contained"  style={{backgroundColor:'#2B04DB', fontSize:8, width:130, borderRadius:'30px'}} onClick={Next}>
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

export default ProfileStep1;
