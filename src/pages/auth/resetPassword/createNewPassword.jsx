import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  IconButton,
  Modal,
  TextField,
  Typography,

  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CheckIcon from '@mui/icons-material/Check';

import confirmedImg from "../images/Account.png"

import { useNavigate } from "react-router-dom";











export default function CreateNewPassword() {

    const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirm = () => setShowConfirm(!showConfirm);

  const handleSetPassword = () => {
    // you can also add validation logic here
    setOpenModal(true);
  };



 const BackToLogin = ()=>{
    setOpenModal(false)
    navigate('/Authentication')
 }















  return (
    <Grid
      container
      justifyContent="center"
   
     // alignItems="center"
      sx={{ minHeight: "100vh", mt:8}}
    >
      <Grid
        item
        xs={11}
        sm={8}
        md={5}
        sx={{
       //   backgroundColor: "#fff",
          borderRadius: "12px",
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography style={{fontSize:17}} fontWeight={600} gutterBottom>
          Set New Password
        </Typography>
        <Typography style={{fontSize:12}} color="text.secondary" mb={3}>
          Set a New Password to access your account
        </Typography>

        {/* Create Password */}
        <TextField
          placeholder="Create Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              height: 40,
              fontSize: "14px",
               backgroundColor: "#F9FAFB", 
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Confirm Password */}
        <TextField
          placeholder="Confirm Password"
          type={showConfirm ? "text" : "password"}
          fullWidth
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              height: 40,
              fontSize: "14px",
               backgroundColor: "#F9FAFB", 
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowConfirm} edge="end">
                  {showConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Checkbox */}


             <Box
                  sx={{
                    backgroundColor: "#F1F2FF",
                    mt: 2,
                    borderRadius: "10px",
                    p: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CheckIcon sx={{ fontSize: 10, color: "#2B04DB" }} />
                  <Typography sx={{ color: "#777", fontSize: 10 }}>
                    Once done, please log in again with new password
                   
                  </Typography>
                </Box>



        {/* Submit Button */}
        <Button
          fullWidth
          onClick={handleSetPassword}
          sx={{
            backgroundColor: "#2B04DB",
            color: "#fff",
            borderRadius: "20px",
            textTransform: "none",
            height: "40px",
            mt:3,
            "&:hover": { backgroundColor: "#2003a8" },
          }}
        >
          Set Password
        </Button>
      </Grid>

      {/* Success Modal */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            borderRadius: "12px",
            p: 4,
            width: { xs: "85%", sm: "400px" },
            textAlign: "center",
          }}
        >
       <Stack style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
        <img src={confirmedImg} style={{position:'absolute', top:-20, margin:'0px auto', width:70, height:70}} alt='worsship'/>


       </Stack>
          <Typography style={{fontSize:13}} mt={3}>
             Password Reset Successful!
          </Typography>
          <Typography style={{fontSize:12}} mt={2}>
           Your <span style={{color:'#2B04DB'}}>new password has been set.</span> Please log in with this new password to access your account.
          </Typography>
          <Button
            onClick={BackToLogin}
            fullWidth
            sx={{
              backgroundColor: "#2B04DB",
              color: "#fff",
              borderRadius: "20px",
              textTransform: "none",
              height: "40px",
              mt:2
            }}
          >
            Return to Login
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
}
