import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Modal,
  IconButton,
} from "@mui/material";
import OtpInput from "react-otp-input";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseIcon from "@mui/icons-material/Close";
import confirmedImg from "./images/Account.png"
import { useNavigate } from "react-router-dom";




const VerifyCode = () => {
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()



  const handleVerify = () => {
   
    setOpen(true);
  };










  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
       // alignItems: "center",
       mt:8,
        p: 2,
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
          <ErrorOutlineIcon sx={{ fontSize: 16, color: "#2B04DB" }} />
          <Typography sx={{ color: "#777", fontSize: 12 }}>
            Didn’t get a code in your email address?{" "}
            <Link href="#" sx={{ color: "#2B04DB", fontWeight: 500 }}>
              Resend code
            </Link>
          </Typography>
        </Box>

        {/* Verify Button */}
        <Button
          fullWidth
          onClick={handleVerify}
          sx={{
            bgcolor: "#2B04DB",
            color: "#fff",
            textTransform: "none",
            py: 1,
            mt: 5,
            borderRadius: 30,
            fontWeight: "bold",
            fontSize: 16,
            "&:hover": { bgcolor: "#4a25d6", color:'white' },
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
            <img src={confirmedImg} style={{position:'absolute', top:-20, width:100, height:100}} alt='worsship'/>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Account Verified!
          </Typography>
          <Typography sx={{ color: "#555", mb: 3, fontSize: 14 }}>
            Your <b>Worsship</b> account has been Verified. Please complete your
            profile to have full access to all features.
          </Typography>

          <Button
          onClick={()=>navigate('/Authentication/ProfileStep1')}
            fullWidth
            sx={{
              bgcolor: "#2B04DB",
              color: "#fff",
              textTransform: "none",
              py: 1,
              borderRadius: 30,
              fontWeight: "bold",
              fontSize: 15,
              mb: 2,
              "&:hover": { bgcolor: "#4a25d6", color:'white' },
            }}
          >
            Complete my Profile
          </Button>
          <Button
            fullWidth
            onClick={handleClose}
            sx={{
              color: "#777",
              textTransform: "none",
              fontSize: 14,
            }}
          >
            Skip For Now
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default VerifyCode;
