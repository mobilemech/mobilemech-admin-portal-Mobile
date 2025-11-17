
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Link,
} from "@mui/material";

import logo from "../images/back.png";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const VerifyPassCode = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

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
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#f17a28",
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

        {!isMobile && (
          <Box sx={{ position: "relative", zIndex: 1, color: "white" }}>
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

          <Box
            sx={{
              width: { xs: "100%", md: "100%" },
              maxWidth: { xs: "100%", md: 420 },
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, color: "#191E24" }}>
              Verify Account
            </Typography>
            <Typography sx={{ color: "#454545", mb: 4, fontSize: 11 }}>
              Enter the 6-digit verification sent to your Email Address
            </Typography>

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
                border: "2px solid #f17a28",
                outline: "none",
              }}
            />

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
            <Button
              fullWidth
              onClick={() => navigate('/Authentication/CreateNewPassword')}
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
        </Box>
      </Box>
    </Box>
  );
};

export default VerifyPassCode;
