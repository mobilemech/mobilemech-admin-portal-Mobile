

import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  Grid,
  InputLabel,
  OutlinedInput,
  FormControl,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import background from "./images/plainbg.png";
import logo from "./images/logo1.png";
import Base1 from "./images/Base5.png";
import Base2 from "./images/Base7.png";
import Base3 from "./images/Base8.png";
import Base4 from "./images/Base4.png";
import { useNavigate } from "react-router-dom";

const ProfileStep3 = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);

  const [fileName, setFileName] = useState("");
  const [fileName2, setFileName2] = useState("");
  const [fileName3, setFileName3] = useState("");
  const [Id, setID] = useState("");

  const handleChangeID = (e) => setID(e.target.value);

  const handleFileChange = (e, setFn) => {
    const file = e.target.files[0];
    setFn(file ? file.name : "");
  };

  const Next = () =>  navigate('/Authentication/ProfileStep4');















  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* LEFT PANEL */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          p: { xs: 2, md: 5 },
          display: "flex",
          flexDirection: "column",
          height: { xs: "8vh", md: "100vh" },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: { xs: 14, md: 18 },
            fontWeight: 600,
          }}
        >
          <img src={logo} alt="logo" height={24} /> Worsship
        </Typography>

        {!isMobile && (
          <>
            <Box sx={{ mt: 8 }}>
              <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
                Hi! House of the Rock Lagos Nigeria
              </Typography>
              <Typography sx={{ color: "#fff", mt: 1, fontSize: 13 }}>
                Join the conversation, and grow in faith.
              </Typography>
            </Box>

            <Stack spacing={2} sx={{ mt: 6 }}>
              {[Base1, Base2, Base3, Base4].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  style={{ maxWidth: "70%", height: "auto" }}
                />
              ))}
            </Stack>
          </>
        )}
      </Box>

      {/* RIGHT PANEL */}
      <Box
        sx={{
          flex: 1,
          width: { xs: "100%", md: "50%" },
          backgroundColor: "#fff",
          p: { xs: 2, sm: 4, md: 6 },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          overflowY: { xs: "auto", md: "hidden" },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 600,
            mx: "auto",
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              right: 20,
              top: 10,
              color: { xs: "white", md: "black" },
              fontSize: 12,
            }}
          >
            3 of 4
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              mb: 1,
              textAlign: "center",
              fontSize: 18,
              color: "#111",
            }}
          >
            Upload Verification Documents
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: 12,
              textAlign: "center",
              mb: 3,
              lineHeight: 1.5,
              maxWidth: 450,
              mx: "auto",
            }}
          >
            These help speed up verification and add credibility to your
            church’s profile. Don’t worry — you can skip and add them later.
          </Typography>

          {/* FORM */}
          <form style={{ width: "100%" }}>
            <Stack spacing={2}>
              {/* Upload Registration Certificate */}
              <Box>
                <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>
                  Organization Registration Certificate
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Upload Registration Certificate"
                  value={fileName}
                  InputProps={{
                    readOnly: true,
                    sx: {
                      height: 45,
                      fontSize: "12px",
                      backgroundColor: "#F9FAFB",
                      borderRadius: "10px",
                      "& input::placeholder": { fontSize: "10px", color: "#9e9e9e" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E0E0E0",
                      },
                    },
                    endAdornment: (
                      <>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={(e) => handleFileChange(e, setFileName)}
                          style={{ display: "none" }}
                        />
                        <Button
                          component="span"
                          onClick={() => fileInputRef.current.click()}
                          sx={{
                            color: "#2B04DB",
                            backgroundColor: "#F1F2FF",
                            fontSize: "10px",
                            borderRadius: "5px",
                            textTransform: "none",
                            height: "34px",
                            mr: -1.5,
                          }}
                        >
                          Upload
                        </Button>
                      </>
                    ),
                  }}
                />
              </Box>

              {/* Upload Logo */}
              <Box>
                <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>
                  Official Logo
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Upload Logo"
                  value={fileName2}
                  InputProps={{
                    readOnly: true,
                    sx: {
                      height: 45,
                      fontSize: "12px",
                      backgroundColor: "#F9FAFB",
                      borderRadius: "10px",
                      "& input::placeholder": { fontSize: "10px", color: "#9e9e9e" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E0E0E0",
                      },
                    },
                    endAdornment: (
                      <>
                        <input
                          type="file"
                          ref={fileInputRef2}
                          onChange={(e) => handleFileChange(e, setFileName2)}
                          style={{ display: "none" }}
                        />
                        <Button
                          component="span"
                          onClick={() => fileInputRef2.current.click()}
                          sx={{
                            color: "#2B04DB",
                            backgroundColor: "#F1F2FF",
                            fontSize: "10px",
                            borderRadius: "5px",
                            textTransform: "none",
                            height: "34px",
                            mr: -1.5,
                          }}
                        >
                          Upload
                        </Button>
                      </>
                    ),
                  }}
                />
              </Box>

              {/* ID Type */}
              <Box>
                <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>
                  Primary Contact Identification Type
                </InputLabel>
                <FormControl fullWidth>
                  <Select
                    value={Id}
                    onChange={handleChangeID}
                    displayEmpty
                    sx={{
                      height: 45,
                      borderRadius: "10px",
                      background: "#F9FAFB",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E0E0E0",
                      },
                      fontSize: "12px",
                    }}
                  >
                    <MenuItem value="">
                      <em>Select Identification Type</em>
                    </MenuItem>
                    <MenuItem value={10}>National ID</MenuItem>
                    <MenuItem value={20}>Passport</MenuItem>
                    <MenuItem value={30}>Driver’s License</MenuItem>
                    <MenuItem value={40}>Voter’s Card</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Identification Number */}
              <Box>
                <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>
                  Identification Number
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  placeholder="Enter Identification Number"
                  sx={{
                    height: 45,
                    borderRadius: "10px",
                    backgroundColor: "#F9FAFB",
                    "& input::placeholder": {
                      color: "#9e9e9e",
                      fontSize: "10px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E0E0E0",
                    },
                  }}
                />
              </Box>

              {/* Upload ID */}
              <Box>
                <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>
                  Primary Contact ID
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Upload Identification"
                  value={fileName3}
                  InputProps={{
                    readOnly: true,
                    sx: {
                      height: 45,
                      fontSize: "12px",
                      backgroundColor: "#F9FAFB",
                      borderRadius: "10px",
                      "& input::placeholder": { fontSize: "10px", color: "#9e9e9e" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E0E0E0",
                      },
                    },
                    endAdornment: (
                      <>
                        <input
                          type="file"
                          ref={fileInputRef3}
                          onChange={(e) => handleFileChange(e, setFileName3)}
                          style={{ display: "none" }}
                        />
                        <Button
                          component="span"
                          onClick={() => fileInputRef3.current.click()}
                          sx={{
                            color: "#2B04DB",
                            backgroundColor: "#F1F2FF",
                            fontSize: "10px",
                            borderRadius: "5px",
                            textTransform: "none",
                            height: "34px",
                            mr: -1.5,
                          }}
                        >
                          Upload
                        </Button>
                      </>
                    ),
                  }}
                />
              </Box>

              {/* Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                sx={{ mt: 3 }}
              >
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: "#E5E5FF",
                    color: "#2B04DB",
                    borderRadius: "30px",
                    fontSize: 12,
                    py: 1.2,
                    textTransform: "none",
                  }}
                >
                  Save & Resume Later
                </Button>

                <Button
                  fullWidth
                  onClick={Next}
                  sx={{
                    backgroundColor: "#2B04DB",
                    borderRadius: "30px",
                    fontSize: 12,
                    py: 1.2,
                    textTransform: "none",
                    color: "#fff",
                  }}
                >
                  Submit for Verification
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileStep3;


