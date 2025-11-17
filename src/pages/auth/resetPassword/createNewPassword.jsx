
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
 
  OutlinedInput,
  useMediaQuery,
  IconButton,
  InputAdornment,

  Modal
} from "@mui/material";

import logo from "../images/back.png";

import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import confirmedImg from "../images/Checkmark.png"
import CheckIcon from '@mui/icons-material/Check';

const CreateNewPassword = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleSetPassword = () => {
    setOpenModal(true);
  };



  const BackToLogin = () => {
    setOpenModal(false)
    navigate('/')
  }









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
          <Typography style={{ fontSize: 17 }} fontWeight={600} gutterBottom>
            Set New Password
          </Typography>
          <Typography style={{ fontSize: 12 }} color="text.secondary" mb={3}>
            Set a New Password to access your account
          </Typography>

          {/* Create New Password */}
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
            <CheckIcon sx={{ fontSize: 10, color: "#f17a28" }} />
            <Typography sx={{ color: "#777", fontSize: 10 }}>
              Once done, please log in again with new password

            </Typography>
          </Box>



          {/* Submit Button */}
          <Button
            fullWidth
            onClick={handleSetPassword}
            sx={{
              backgroundColor: "#f17a28",
              color: "#fff",
              borderRadius: "20px",
              textTransform: "none",
              height: "40px",
              mt: 3,
              "&:hover": { backgroundColor: "#f28a45ff", color: 'white' },
            }}
          >
            Set Password
          </Button>
        </Box>

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
            <Stack style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
              <img src={confirmedImg} style={{ position: 'absolute', top: -20, margin: '0px auto', width: 70, height: 70 }} alt='worsship' />


            </Stack>
            <Typography style={{ fontSize: 13 }} mt={3}>
              Password Reset Successful!
            </Typography>
            <Typography style={{ fontSize: 12 }} mt={2}>
              Your <span style={{ color: '#f17a28' }}>new password has been set.</span> Please log in with this new password to access your account.
            </Typography>
            <Button
              onClick={BackToLogin}
              fullWidth
              sx={{
                backgroundColor: "#f17a28",
                color: "#fff",
                borderRadius: "20px",
                textTransform: "none",
                height: "40px",
                mt: 2,
                "&:hover": { backgroundColor: "#f28a45ff", color: 'white' },
              }}
            >
              Return to Login
            </Button>
          </Box>
        </Modal>


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

export default CreateNewPassword;









