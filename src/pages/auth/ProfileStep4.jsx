

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import background from "./images/plainbg.png";
import logo from "./images/logo1.png";
import Base1 from "./images/Base5.png";
import Base2 from "./images/Base7.png";
import Base3 from "./images/Base9.png";
import Base4 from "./images/Base10.png";
import Polygon1 from "./images/Polygon1.png";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useNavigate } from "react-router-dom";










const ProfileStep4 = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [clicked, setClicked] = useState(null);
  const [role, setRole] = useState("");

  const handleRoleChange = (event) => setRole(event.target.value);

  const options = [
    {
      image: Polygon1,
      title: "Church",
      description:
        "I confirm that the information provided is accurate and that I am authorized to represent this church on Worsship.",
      id: 1,
      icon: CheckBoxIcon,
    },
  ];

  const handleClick = (id) => setClicked(id);

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
          height: { xs: "auto", md: "100vh" },
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
            maxWidth: 420,
            mx: "auto",
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          {/* Progress */}
          <Typography
            sx={{
              position: "absolute",
              right: 20,
              top: 10,
              color: { xs: "white", md: "black" },
              fontSize: 12,
            }}
          >
            4 of 4
          </Typography>

          {/* Title */}
          <Typography
            sx={{
              fontWeight: 700,
              mb: 1,
              textAlign: "center",
              fontSize: 18,
              color: "#111",
            }}
          >
            Confirm Your Pledge
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: 12,
              textAlign: "center",
              mb: 3,
              lineHeight: 1.5,
            }}
          >
            Please confirm you’re authorized to set this up on behalf of your church.
            This helps us keep the community safe and trustworthy.
          </Typography>

          <Stack spacing={3}>
            {options.map((item) => (
              <Card
                key={item.id}
                onClick={() => handleClick(item.id)}
                sx={{
                  border: "1px solid",
                  borderColor: clicked === item.id ? "primary.main" : "grey.300",
                  backgroundColor: clicked === item.id ? "#f4f4ff" : "white",
                  borderRadius: 2,
                  cursor: "pointer",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                  transition: "0.3s ease",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography sx={{ fontSize: 12, flex: 1, color: "#333" }}>
                    {item.description}
                  </Typography>

                  <Box sx={{ position: "relative" }}>
                    <img
                      src={item.image}
                      alt="Polygon"
                      style={{ width: 40, height: 40 }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        color: "#2B04DB",
                      }}
                    >
                      <item.icon
                        style={{
                          width: 20,
                          height: 20,
                          color: item.title === "Church" ? "white" : "#2B04DB",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}

            {/* Dropdown */}
            <Box sx={{ width: "100%" }}>
              <InputLabel sx={{ fontSize: 10, mb: 0.5 }}>
                What is your role
              </InputLabel>
              <FormControl
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    background: "#F9FAFB",
                    height: 45,
                  },
                }}
              >
                <Select
                  value={role}
                  onChange={handleRoleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Role select" }}
                  sx={{ fontSize: 12 }}
                >
                  <MenuItem value="">
                    <em>Select your role</em>
                  </MenuItem>
                  <MenuItem value={10}>Lead Pastor</MenuItem>
                  <MenuItem value={20}>General Pastor</MenuItem>
                  <MenuItem value={30}>Admin</MenuItem>
                  <MenuItem value={40}>Option 4</MenuItem>
                  <MenuItem value={50}>Option 5</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Submit Button */}
            <Button
             onClick={()=>navigate('/Dashboard/Home')}
              fullWidth
              sx={{
                backgroundColor: "#2B04DB",
                color: "#fff",
                textTransform: "none",
                py: 1.3,
                borderRadius: 30,
                fontWeight: "bold",
                fontSize: 12,
                   "&:hover": { bgcolor: "#4a25d6", color:'white' },
              }}
            >
              Submit & Finish Setup
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileStep4;

