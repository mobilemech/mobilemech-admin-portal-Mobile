

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,

  useMediaQuery,
  IconButton,
  Link,
  Modal,

} from "@mui/material";

import logo from "./images/back.png";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseIcon from "@mui/icons-material/Close";
import confirmedImg from "./images/Checkmark.png"















const VerifyCode = () => {
  const isMobile = useMediaQuery("(max-width:900px)");




  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()



  const handleVerify = () => {

    setOpen(true);
  };


  const handleClose = () => setOpen(false);










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
          <Box sx={{ width: "100%", maxWidth: 420, textAlign: "center" }}>
            {/* Title */}
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 1, color: "#191E24" }}
            >
              Verify Account
            </Typography>
            <Typography sx={{ color: "#454545", mb: 4, fontSize: 11 }}>
              Enter the 6-digit verification sent to your Email Address
            </Typography>

            {/* OTP Input */}
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              shouldAutoFocus
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "40px",
                height: "40px",
                margin: "0 auto",
                fontSize: "20px",
                borderRadius: "8px",
                border: "1px solid #e5e0e0ff",
                background: "#fff",
                textAlign: "center",
              }}
              focusStyle={{
                border: "2px solid #5B2EFF",
                outline: "none",
              }}
            />

            {/* Resend Code */}
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
              <ErrorOutlineIcon sx={{ fontSize: 15, color: "#f17a28" }} />
              <Typography sx={{ color: "#777", fontSize: 12 }}>
                Didn’t get a code in your email address?{" "}
                <Link href="#" sx={{ color: "#f17a28", fontWeight: 500 }}>
                  Resend code
                </Link>
              </Typography>
            </Box>

            {/* Verify Button */}
            <Button
              fullWidth
              onClick={handleVerify}
              sx={{
                bgcolor: "#f17a28",
                color: "#fff",
                textTransform: "none",
                py: 1,
                mt: 5,
                borderRadius: 30,
                fontWeight: "bold",
                fontSize: 16,
                "&:hover": { bgcolor: "#ef853eff", color: 'white' },
              }}
            >
              Verify
            </Button>
          </Box>

          {/* Success Modal */}
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#fff",
                borderRadius: 3,
                width: "80%",
                maxWidth: 400,
                p: 4,
                textAlign: "center",
                //  boxShadow: 24,
              }}
            >
              {/* Close button */}
              <IconButton
                onClick={handleClose}
                sx={{ position: "absolute", top: 10, right: 10 }}
              >
                <CloseIcon />
              </IconButton>

              {/* Illustration */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  //   bgcolor: "#2B04DB",
                  mx: "auto",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={confirmedImg} style={{ position: 'absolute', top: 20, width: 100, height: 100 }} alt='mobile mechanic' />
              </Box>

              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Account Verified!
              </Typography>
              <Typography sx={{ color: "#555", mb: 3, fontSize: 14 }}>
                Your account has been Verified Successfully.
              </Typography>

              <Button
                onClick={() => navigate('/Dashboard/Home')}
                fullWidth
                sx={{
                  bgcolor: "#f17a28",
                  color: "#fff",
                  textTransform: "none",
                  py: 1,
                  borderRadius: 30,
                  fontWeight: "bold",
                  fontSize: 15,
                  mb: 2,
                  "&:hover": { bgcolor: "#f28e4bff", color: 'white' },
                }}
              >
                Go To Dashboard
              </Button>

            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};







export default VerifyCode;









