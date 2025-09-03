import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Stack
} from "@mui/material";

import {Link, useNavigate} from 'react-router-dom'
import Grid from '@mui/material/Grid';

import OutlinedInput from '@mui/material/OutlinedInput';
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";




const ResetPassword = () => {
  const [channel, setChannel] = useState("email");

  const navigate = useNavigate()

  const handleChange = (event, newChannel) => {
    if (newChannel !== null) {
      setChannel(newChannel);
    }
  };






















  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        mt:8,
       // alignItems: "center",
      //  backgroundColor: "#0A0047", // Dark background
        p: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 420, textAlign: "center" }}>
        {/* Title */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 1, color: "#534f4fff" }}
        >
          Password Reset
        </Typography>
        <Typography sx={{ color: "#454545", mb: 4, fontSize:14 }}>
         You need to verify your account to reset password. Select Your Preferred Verification Channel
        </Typography>

        {/* Channel Selection */}
        <ToggleButtonGroup
          value={channel}
          exclusive
          onChange={handleChange}
          fullWidth
          sx={{
            mb: 3,
            gap:3,
            
            
            "& .MuiToggleButton-root": {
              flex: 1,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 500,
              p: 1.5,
              border: "1px solid #ccc",
              backgroundColor: "#F9FAFB",
              color: "#333",
              "&.Mui-selected": {
                backgroundColor: "#fff",
                borderColor: "#5B2EFF",
                color: "#5B2EFF",
                fontWeight: "bold",
              },
            },
          }}
        >
          <ToggleButton value="email">Email</ToggleButton>
          <ToggleButton value="phone">Phone Number</ToggleButton>
        </ToggleButtonGroup>


        
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                 
                  <OutlinedInput
                    fullWidth
                    id="email-login"
                    type="email"
                    name="email"
                    placeholder="Enter your  email address"
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




        


        {/* Info Text */}
        <Box style={{backgroundColor:'#F1F2FF', marginTop:20, gap:10,  borderRadius:'10px', padding:10,  display:'flex', justifyContent:'center', alignItems:'center'  }}>
          <ErrorOutlineIcon sx={{ fontSize: 16, color: "#2B04DB" }} />
     
        <Typography
          sx={{
            fontSize: 10,
            color: "#999",
          //  mb: 4,
            alignItems:'center',
            textAlign:'center',
            justifyContent:'center',
          
          }}
        >
         A verification code will be sent to <span style={{color:'#2B04DB'}}>hotrchurch@mail.com</span> 
        </Typography>
           </Box>

        {/* Verify Button */}
     
    
        <Button
        onClick={()=>navigate('/Authentication/VerifyPassCode')}
          fullWidth
          sx={{
            mt:2,
            bgcolor: "#2B04DB",
            color: "#fff",
            textTransform: "none",
            py: 1.5,
            borderRadius: 10,
            fontWeight: "bold",
            fontSize: 16,
            "&:hover": { bgcolor: "#4a25d6" },
          }}
        >
          Verify
        </Button>
           
      </Box>
    </Box>
  );
};

export default ResetPassword;
