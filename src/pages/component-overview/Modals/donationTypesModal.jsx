

import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tabs,
  Tab,
} from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  TrendingUp as TrendingUpIcon,
  Close as CloseIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  PauseCircleOutline as PauseCircleOutlineIcon,
} from "@mui/icons-material";

const PRIMARY_GRADIENT = "linear-gradient(135deg, #7838F4 0%, #2B04DB 100%)";
const ACTIVE_COLOR = "#2B04DB";
const INACTIVE_COLOR = "#999";










export default function DonationTypeModal({ open = false, onClose = () => {} }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [tab, setTab] = useState("active");
  const [anchorEl, setAnchorEl] = useState(null);
  const contentRef = useRef(null);
  const [fixedHeight, setFixedHeight] = useState("auto");

  const handleChange = (event, newValue) => setTab(newValue);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  useEffect(() => {
    if (contentRef.current && fixedHeight === "auto") {
      setFixedHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  const donations = [
    { title: "Offering Donation", donors: 1210, totalDonation: 2420, transactions: 1250, revenue: "$50,000", status: "Active" },
    { title: "Building Project Donation", donors: 1210, totalDonation: 2420, transactions: 1250, revenue: "$50,000", status: "Active" },
    { title: "Missions Support", donors: 1210, totalDonation: 2420, transactions: 1250, revenue: "$50,000", status: "Active" },
  ];

  const completedDonations = [
    { title: "Youth Empowerment Fund", donors: 980, revenue: "$35,000", date: "Completed on Aug 12, 2025" },
    { title: "Community Renovation Project", donors: 765, revenue: "$28,400", date: "Completed on May 25, 2025" },
  ];

  const inactiveDonations = [
    { title: "Children’s Education Support", reason: "Paused due to low engagement", lastActive: "Last active: July 2025" },
    { title: "Charity Medical Outreach", reason: "Awaiting new campaign approval", lastActive: "Last active: March 2025" },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: "#fff",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        },
      }}
    >
      {/* HEADER - Removed background */}
      <Box
        sx={{
          color: "#000",
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight={600}>
            Donation Type
          </Typography>
          <Typography variant="h4" sx={{ opacity: 0.9 }}>
            Manage donation types for your church
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: "#000" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* CONTENT */}
      <DialogContent
        ref={contentRef}
        sx={{ p: 3, backgroundColor: "#fafafa", height: fixedHeight, overflowY: "auto", transition: "height 0.3s ease" }}
      >
        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={handleChange}
          centered={!fullScreen}
          variant={fullScreen ? "scrollable" : "standard"}
          scrollButtons="auto"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            mb: 3,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            "& .MuiTabs-indicator": { display: "none" },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 800,
              fontSize:18,
              color: INACTIVE_COLOR,
              minHeight: 48,
              "&.Mui-selected": {
                color: ACTIVE_COLOR,
                backgroundColor: "rgba(43, 4, 219, 0.08)",
                borderRadius: "8px",
              },
            },
          }}
        >
          <Tab label="Active Donation" value="active" />
          <Tab label="Completed" value="completed" />
          <Tab label="Inactive Donation" value="inactive" />
        </Tabs>

        {/* Active Donations */}
        {tab === "active" && (
          <Stack spacing={2}>
            {donations.map((donation, index) => (
              <Card key={index} variant="outlined" sx={{ borderRadius: 3, p: 1, transition: "all 0.2s ease", "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.08)", transform: "translateY(-2px)" } }}>
                <CardContent>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="h3" fontWeight={600}>{donation.title}</Typography>
                    <IconButton size="small" onClick={handleMenuOpen}><MoreVertIcon fontSize="small" color="action" /></IconButton>
                  </Grid>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={6}>
                      <Typography variant="h3" color="text.secondary">Donors</Typography>
                      <Typography variant="h4">{donation.donors}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h3" color="text.secondary">Total Donation</Typography>
                      <Typography variant="h4">{donation.totalDonation}</Typography>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <TrendingUpIcon color="success" fontSize="small" />
                        <Typography variant="h4" color="success.main">+4.8% last month</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="h4">Status: <strong>{donation.status}</strong></Typography>
                      <Typography variant="h4" color="text.secondary">Transactions: {donation.transactions}</Typography>
                      <br />
                      <Typography variant="h4" color="text.secondary">Revenue: {donation.revenue}</Typography>
                    </Box>
                    <Stack direction="row" spacing={2} sx={{ mt: { xs: 2, sm: 0 } }}>
                      <Button size="small">View Progress</Button>
                      <Button variant="outlined" color="error" size="small">Deactivate</Button>
                    </Stack>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}

        {/* Completed Donations */}
        {tab === "completed" && (
          <Stack spacing={2}>
            {completedDonations.concat([...Array(3)].map((_, i) => ({
              title: `Extra Completed Donation ${i+1}`,
              donors: 500 + i * 50,
              revenue: `$${15000 + i * 2000}`,
              date: `Completed on Sep ${5+i}, 2025`
            }))).map((item, i) => (
              <Card key={i} sx={{ borderRadius: 3, p: 2, backgroundColor: "#f5f5ff", "&:hover": { boxShadow: "0 3px 10px rgba(0,0,0,0.05)" } }}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item><CheckCircleOutlineIcon sx={{ color: ACTIVE_COLOR, fontSize: 30 }} /></Grid>
                  <Grid item xs>
                    <Typography fontWeight={600}>{item.title}</Typography>
                    <Typography variant="h4" color="text.secondary">{item.date}</Typography>
                    <Typography variant="h4" sx={{ mt: 0.5 }}>{item.donors} donors contributed <strong>{item.revenue}</strong></Typography>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Stack>
        )}

        {/* Inactive Donations */}
        {tab === "inactive" && (
          <Stack spacing={2}>
            {inactiveDonations.concat([
              { title: "Old Missions Fund", reason: "Campaign ended", lastActive: "Last active: Jan 2025" },
              { title: "Local Outreach Program", reason: "Paused temporarily", lastActive: "Last active: Feb 2025" },
            ]).map((item, i) => (
              <Card key={i} sx={{ borderRadius: 3, p: 2, backgroundColor: "#fff", "&:hover": { boxShadow: "0 3px 10px rgba(0,0,0,0.05)" } }}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item><PauseCircleOutlineIcon sx={{ color: "#f39c12", fontSize: 30 }} /></Grid>
                  <Grid item xs>
                    <Typography fontWeight={600} fontSize={17}>{item.title}</Typography>
                    <Typography variant="h4" color="text.secondary">{item.reason}</Typography>
                    <Typography variant="h5" color="text.secondary">{item.lastActive}</Typography>
                  </Grid>
              
                </Grid>
              </Card>
            ))}
          </Stack>
        )}
      </DialogContent>

      {/* FOOTER */}
      <Box sx={{ justifyContent: "flex-end", px: 4, py: 3, borderTop: "none", gap: 2, display: "flex" }}>
        <Button variant="outlined" sx={{ borderRadius: "30px", textTransform: "none", px: 5, py: 1.5, fontSize: 16, backgroundColor: "#9088eeff", border: 'none', color: "white", "&:hover": { backgroundColor: "#9d95f0ff", color: 'white' } }}>Cancel</Button>
        <Button variant="contained" sx={{ backgroundColor: "#4F46E5", fontWeight: 600, textTransform: "none", px: 3, py: 1.2, borderRadius: "30px", fontSize: "1rem", "&:hover": { backgroundColor: "#4338CA" } }}>Save Settings</Button>
      </Box>

      {/* Options Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} PaperProps={{ sx: { borderRadius: 2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", minWidth: 140 } }}>
        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose}>Duplicate</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: "error.main" }}>Delete</MenuItem>
      </Menu>
    </Dialog>
  );
}
