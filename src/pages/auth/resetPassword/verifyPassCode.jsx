import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,

} from "@mui/material";
import OtpInput from "react-otp-input";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { useNavigate } from "react-router-dom";




const VerifyPassCode = () => {
  const [otp, setOtp] = useState("");


  const navigate = useNavigate()














  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      //  alignItems: "center",
      mt:8,
        p: 3,
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
          <Typography sx={{ color: "#777", fontSize: 10 }}>
            Didn’t get a code in your email address?{" "}
            <Link href="#" sx={{ color: "#2B04DB", fontWeight: 500 }}>
              Resend code
            </Link>
          </Typography>
        </Box>

        {/* Verify Button */}
        <Button
          onClick={()=>navigate('/Authentication/CreateNewPassword')}
          fullWidth
        //  onClick={handleVerify}
          sx={{
            bgcolor: "#2B04DB",
            color: "#fff",
            textTransform: "none",
            py: 1,
            mt: 5,
            borderRadius: 30,
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

export default VerifyPassCode;
