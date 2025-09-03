import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        mt:5,
      //  alignItems: "center",
      //  backgroundColor: "#0A0047", // dark background
        p: 2,
      }}
    >
      {/* Centered Form */}
      <Box sx={{ width: "100%", maxWidth: 420 }}>
        {/* Title */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 1, color: "#111" }}
        >
          Create your Password
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "#666", mb: 4 }}
        >
          Create a Password for your account
        </Typography>

        {/* Password Input */}
        <Typography sx={{ fontSize: 14, fontWeight: 500, mb: 1, color: "#111" }}>
          Create Password
        </Typography>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          fullWidth
          sx={{
               height:45, 
            mb: 3,
            borderRadius: 2,
            backgroundColor: "#F9FAFB",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E0E0E0",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#C0C0C0",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#5B2EFF",
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />

        {/* Confirm Password */}
        <Typography sx={{ fontSize: 14, fontWeight: 500, mb: 1, color: "#111" }}>
          Confirm Password
        </Typography>
        <OutlinedInput
          type={showConfirm ? "text" : "password"}
          placeholder="Confirm password"
          fullWidth
          sx={{
               height:45, 
            mb: 2,
            borderRadius: 2,
            backgroundColor: "#F9FAFB",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E0E0E0",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#C0C0C0",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#5B2EFF",
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />

        {/* Checkbox */}
        <FormControlLabel
          control={<Checkbox size="small" sx={{ color: "#5B2EFF" }} />}
          label={
            <Typography sx={{ fontSize: 12, color: "#333" }}>
              Log into your account anytime with this password
            </Typography>
          }
          sx={{ mb: 3 }}
        />

        {/* Button */}

        
        <Button
        onClick={()=>navigate('/Authentication/SelectChannel')}
          fullWidth
          sx={{
            bgcolor: "#2B04DB",
            color: "#fff",
            textTransform: "none",
            py: 1,
            borderRadius: 30,
            fontWeight: "bold",
            fontSize: 16,
            "&:hover": { bgcolor: "#3a0efdff", color:'white' },
          }}
        >
          Create Password
        </Button>
      
      </Box>
    </Box>
  );
};

export default CreatePassword;
