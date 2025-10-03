import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import {Link, useNavigate} from 'react-router-dom'




const SelectChannel = () => {
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
        mt:8,
        justifyContent: "center",
      //  alignItems: "center",
      //  backgroundColor: "#0A0047", // Dark background
        p: 3,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 420, textAlign: "center" }}>
        {/* Title */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 1, color: "#534f4fff" }}
        >
          Verify Account
        </Typography>
        <Typography sx={{ color: "#454545", mb: 4, fontSize:14 }}>
          Select Your Preferred Authentication Channel
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

        {/* Info Text */}
        <Box style={{backgroundColor:'#F1F2FF',  borderRadius:'10px', padding:10,  display:'flex', justifyContent:'center', alignItems:'center'  }}>

     
        <Typography
          sx={{
            fontSize: 12,
            color: "#999",
          //  mb: 4,
            alignItems:'center',
            textAlign:'center',
            justifyContent:'center',
          
          }}
        >
          {channel === "email"
            ? "We will send a 6-digit verification to your registered email"
            : "We will send a 6-digit verification to your registered phone"}
        </Typography>
           </Box>

        {/* Verify Button */}
       
    
        <Button
         onClick={()=>navigate('/Authentication/VerifyCode')}
          fullWidth
          sx={{
            mt:2,
            bgcolor: "#2B04DB",
            color: "#fff",
            textTransform: "none",
            py: 1,
            borderRadius: 10,
            fontWeight: "bold",
            fontSize: 16,
            "&:hover": { bgcolor: "#4a25d6", color:'white' },
          }}
        >
          Verify
        </Button>
          
      </Box>
    </Box>
  );
};

export default SelectChannel;
