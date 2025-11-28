import React from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Modal,
  Typography,
  Paper,
  Stack,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Visibility } from "@mui/icons-material";

export default function ServicesModal({ open, onClose, service }) {
  if (!service) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 1000,
          mx: "auto",
          my: 5,
          bgcolor: "white",
          borderRadius: 3,
          p: 3,
          maxHeight: "170vh",
          overflowY: "auto",
        }}
      >
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Details
          </Typography>

          <Box display="flex" alignItems="center" gap={1}>
            {/*                         
                        <Button
                            variant="contained"

                            sx={{
                                backgroundColor: "#0ab308ff",
                                fontWeight: 600,
                                textTransform: "none",
                                px: 8,
                                py: 1.2,
                                borderRadius: "30px",
                                fontSize: "1.2rem",
                                "&:hover": { backgroundColor: "#0be407ff" },
                            }}
                        >
                            Activate
                        </Button> */}

            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                fontWeight: 600,
                textTransform: "none",
                px: 8,
                py: 1.2,
                borderRadius: "30px",
                fontSize: "1.2rem",
                "&:hover": { backgroundColor: "#e40707ff" },
              }}
            >
              Delete Service
            </Button>

            <IconButton onClick={onClose}>
              <CloseIcon style={{ fontSize: 40 }} />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* USER INFO */}
        <Grid spacing={3}>
          <Grid xs={12} md={4}>
            <Box textAlign="center">
              <Avatar
                sx={{
                  bgcolor: "#FFEFD5",
                  color: "#92400E",
                  width: 140,
                  height: 140,
                  mx: "auto",
                }}
              >
                {service.title
                  .split(" ")
                  .slice(0, 2)
                  .map((p) => p[0])
                  .join("")}
              </Avatar>

              <Typography variant="h3" fontWeight={700} mt={2}>
                {service.title}
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {service.category}
              </Typography>
              {/* <Typography variant="h4" color="text.secondary">📍 Lagos, Nigeria</Typography> */}
              <Typography variant="h4" color="text.secondary">
                ⭐ 4.8 (216 Reviews)
              </Typography>
            </Box>
          </Grid>

          <Grid sx={{ mt: 2 }}>
            <Paper sx={{ p: 2, borderRadius: 2, backgroundColor: "#FEF2EA" }}>
              <Grid spacing={2}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h4" fontWeight={700}>
                    Service ID :{" "}
                  </Typography>
                  <Typography variant="h5">SER-2287689388399</Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography variant="h4" fontWeight={700}>
                    Service Type :{" "}
                  </Typography>
                  <Typography variant="h5">{service.title}</Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography variant="h4" fontWeight={700}>
                    Service Category :{" "}
                  </Typography>
                  <Typography variant="h4">{service.category}</Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography variant="h4" fontWeight={700}>
                    Last Updated Date :{" "}
                  </Typography>
                  <Typography variant="h5">{service.lastUpdated}</Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography variant="h4" fontWeight={700}>
                    Current Price :{" "}
                  </Typography>
                  <Typography variant="h4"> ₦ {service.price}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* JOB HISTORY */}
        <Typography variant="h3" mt={4} fontWeight={700}>
          Related Services
        </Typography>

        <Paper sx={{ mt: 2, p: 2, borderRadius: 2 }}>
          {/* HEADER ROW */}
          <Box
            display="flex"
            alignItems="center"
            py={2}
            sx={{ fontWeight: 700, fontSize: 16, color: "#555" }}
          >
            <Typography variant="h4" sx={{ width: "30%" }}>
              Service Type
            </Typography>
            <Typography variant="h4" sx={{ width: "25%" }}>
              Category
            </Typography>
            <Typography variant="h4" sx={{ width: "20%" }}>
              Current Price
            </Typography>
            <Typography variant="h4" sx={{ width: "20%" }}>
              Last Updated
            </Typography>
            <Box sx={{ width: "5%" }} />
          </Box>

          <Divider />

          {/* SERVICE ROWS */}
          {[1, 2, 3, 4].map((job) => (
            <Box
              key={job}
              display="flex"
              alignItems="center"
              py={2}
              borderBottom="1px solid #eee"
            >
              <Typography variant="h5" sx={{ width: "30%" }}>
                Brake Pad Replacement
              </Typography>

              <Typography variant="h5" sx={{ width: "25%" }}>
                Mechanical
              </Typography>

              <Typography variant="h5" sx={{ width: "20%" }}>
                ₦15,000
              </Typography>

              <Typography variant="h5" sx={{ width: "20%" }}>
                June 24
              </Typography>

              <Box
                sx={{
                  width: "5%",
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {/* <VisibilityIcon sx={{ fontSize: 20, cursor: "pointer" }} />
        <EditIcon sx={{ fontSize: 20, cursor: "pointer" }} />
        <DeleteIcon sx={{ fontSize: 20, cursor: "pointer" }} /> */}
              </Box>
            </Box>
          ))}

          {/* VIEW ALL BUTTON */}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F17A28",
                fontWeight: 600,
                textTransform: "none",
                px: 8,
                py: 1.3,
                borderRadius: "30px",
                fontSize: "1.1rem",
                "&:hover": { backgroundColor: "#f09151ff" },
              }}
            >
              View All
            </Button>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
}
