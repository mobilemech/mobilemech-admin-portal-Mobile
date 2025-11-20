

// DashboardDefault.jsx
import React, { useMemo, useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import {

  Search as SearchIcon,
  NotificationsOutlined,
  AccessTime,
  AssignmentTurnedIn,
  AccountCircle,
} from "@mui/icons-material";

import {
  Box,
  Stack,
  Typography,
  Grid,
  Avatar,
  TextField,
  InputAdornment,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,

} from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";




export default function DashboardDefault() {

  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  const [selected, setSelected] = useState(null);


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const zoom = useMemo(() => {
    if (width <= 768) return 0.55; // Mobile
    if (width <= 1200) return 0.8; // Tablets / small laptops
    if (width <= 1600) return 0.5; // Medium desktops
    return 0.7; // Large desktops
  }, [width]);

  useEffect(() => {
    const body = document.body;

    body.style.zoom = "";
    body.style.transform = "";
    body.style.transformOrigin = "";
    body.style.width = "";

    if ("zoom" in body.style) {
      body.style.zoom = zoom;
    } else {
      // Firefox / Safari fallback
      body.style.transform = `scale(${zoom})`;
      body.style.transformOrigin = "top center";
      body.style.width = `${(100 / zoom).toFixed(2)}%`;
      body.style.margin = "0 auto";
    }
  }, [zoom]);




  const barData = [
    { month: "Jan", requests: 30 },
    { month: "Feb", requests: 45 },
    { month: "Mar", requests: 32 },
    { month: "Apr", requests: 60 },
    { month: "May", requests: 48 },
    { month: "Jun", requests: 70 },
    { month: "Jul", requests: 55 },
    { month: "Aug", requests: 68 },
    { month: "Sep", requests: 52 },
    { month: "Oct", requests: 72 },
    { month: "Nov", requests: 83 },
    { month: "Dec", requests: 95 },
  ];

  const recentActivity = [
    { title: "New Mechanic approved", subtitle: "Akinyemi joined the platform", time: "2h ago", color: "success" },
    { title: "Payment Processed", subtitle: "Invoice #2098 paid - NGN 32,000", time: "6h ago", color: "info" },
    { title: "Invoice generated", subtitle: "Invoice #2099 created", time: "1d ago", color: "warning" },
    { title: "High rating received", subtitle: "Mechanic rating 5.0", time: "2d ago", color: "success" },
    { title: "Booking cancelled", subtitle: "Booking #377 refunded", time: "3d ago", color: "error" },
  ];

  const bookings = [
    { title: "Engine Tune - Toyota Corolla", time: "3 hours", status: "Completed" },
    { title: "Brake Repair - Honda Camry", time: "2 hours", status: "Inprogress" },
    { title: "Brake Repair - Honda Camry", time: "12 hours", status: "Scheduled" },
    { title: "Engine Tune - Toyota Corolla", time: "3 hours", status: "Completed" },
    { title: "Battery Change - Nissan", time: "1 hour", status: "Cancelled" },
    { title: "Oil Change - Honda Civic", time: "4 hours", status: "Inprogress" },
    { title: "Brake Repair - Honda Camry", time: "2 hours", status: "Inprogress" },
    { title: "Engine Tune - Toyota Corolla", time: "3 hours", status: "Completed" },
  ];

  // System health metrics
  const systemHealth = {
    uptime: 99.98,
    avgResponse: 243,
    onlineUsers: 432,
  };

  // Complaints summary
  const complaints = { total: 12, pending: 4, resolved: 8 };


  return (
    <Box sx={{ px: 3, py: 3, width: "100%" }}>
      {/* Title Row + Search */}
      <Stack direction="row" alignItems="center" mb={3} flexWrap="wrap" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h2" sx={{ fontWeight: 800 }}>
          Welcome, Kelvin Ayomide
        </Typography>






        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "100%", sm: 500, md: 600 },
            mt: 2
          }}
        >
          <TextField
            placeholder="Search requests, mechanics, bookings..."
            fullWidth
            variant="outlined"
            size="medium"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                //   bgcolor: "#F5F5F5",
                borderRadius: 4,
                height: 60,
                fontSize: 18,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "0.5px solid #c2c2c2ff",
                },
                "&:hover": {
                  //   bgcolor: "#EFEFEF", 
                },
                "&.Mui-focused": {
                  // bgcolor: "#EFEFEF",
                  boxShadow: "none",
                },
              },
            }}
          />
        </Box>


      </Stack>








      {/* Stats Cards */}
      <Grid container spacing={2.5} alignItems="stretch" sx={{ width: "100%", mx: "auto" }}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: "pointer" }}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              borderRadius: 3,
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px dashed rgba(79,70,229,0.12)",
              minHeight: 140,
              width: "100%",
              transition: "0.25s ease",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <Avatar sx={{ bgcolor: "#f17a28", color: "white", width: 60, height: 60 }}>
              <GroupsIcon style={{ fontSize: 40 }} />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.secondary">
                Total Admin
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>1,430</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: "pointer" }}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              borderRadius: 3,
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px dashed rgba(79,70,229,0.12)",
              minHeight: 140,
              width: "100%",
              transition: "0.25s ease",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <Avatar sx={{ bgcolor: "#f17a28", color: "white", width: 60, height: 60 }}>
              <ConstructionIcon style={{ fontSize: 40 }} />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.secondary">
                Active Mechanics
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>187</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: "pointer" }}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              borderRadius: 3,
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px dashed rgba(79,70,229,0.12)",
              minHeight: 140,
              width: "100%",
              transition: "0.25s ease",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <Avatar sx={{ bgcolor: "#f17a28", color: "white", width: 60, height: 60 }}>
              <LocalShippingIcon style={{ fontSize: 40 }} />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.secondary">
                Active Car Owners
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>1,430</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 4 (Blue gradient) */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: "pointer" }}>
          <Paper
            elevation={3}
            sx={{
              p: 3.5,
              borderRadius: 3,
              minHeight: 140,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#fff",
              width: "100%",
              background: "linear-gradient(135deg, #f4ad7eff 0%, #f17a28 100%)",
              transition: "0.25s ease",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ opacity: 0.95 }}>
                Total Jobs
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 22 }}>54</Typography>
            </Box>
            <Avatar sx={{ bgcolor: "white", width: 62, height: 62, ml: 2 }}>
              <Inventory2Icon sx={{ color: "#f17a28", fontSize: 40 }} />
            </Avatar>
          </Paper>
        </Grid>
      </Grid>












      {/* ===== NEW BODY SECTION (70% / 30%) ===== */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mt: 4 }}>
        {/* Left Section - 70% */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 70%" }, display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Quick Actions + Graph row */}
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            {/* Quick Actions Card */}
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                flex: 1,
                boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
                minHeight: 120,
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 1, fontSize: 17 }}>Quick Actions</Typography>


              <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                sx={{ gap: 2, alignItems: "center" }}
              >
                {[
                  "Add New Mechanic",
                  "Assign Role",
                  "Job Requests",
                  "Payment History",
                  "Manage pricing",
                  "Send Notification",
                  "Generate Report",
                  "Resolve Complaints",
                  "View Users",
                ].map((label, i) => {
                  const isSelected = selected === i;

                  return (
                    <Button
                      key={label}
                      size="small"
                      onClick={() => setSelected(i)}
                      variant="outlined"
                      sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        bgcolor: isSelected ? "#F17A28" : "transparent",
                        color: isSelected ? "white" : "text.primary",
                        borderColor: "rgba(15,23,42,0.06)",
                        px: 3,
                        py: 1.5,
                        mb: 1,
                        fontSize: "1.2rem",

                        "&:hover": {
                          backgroundColor: isSelected
                            ? "#F17A28"
                            : "rgba(241, 122, 40, 0.12)",
                          color: isSelected ? "white" : "#F17A28",
                          borderColor: isSelected ? "#F17A28" : "rgba(241,122,40,0.4)",
                        },

                        "&:focus": {
                          outline: "none",
                        },
                      }}
                    >
                      {label}
                    </Button>

                  );
                })}
              </Stack>

            </Paper>

            {/* Service Request Chart Card */}
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                width: { xs: "100%", md: 520 },
                boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
                minHeight: 200,              // ⬆️ increased card height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 1, fontSize: 17 }}>
                Service Requests (Monthly)
              </Typography>

              <Box sx={{ height: 150, width: "100%" }}>   {/* ⬆️ increased chart height */}
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} barGap={4}>
                    <XAxis dataKey="month" hide />
                    <YAxis hide domain={[0, "dataMax + 5"]} /> {/* ensures bars start from bottom */}
                    <Tooltip />

                    <Bar
                      dataKey="requests"
                      fill="#F17A28"
                      radius={[6, 6, 0, 0]}
                      barSize={14}            // ⬆️ slightly wider bars
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>


          </Stack>

          {/* Recent Activity + System Health row */}
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="stretch">
            {/* Recent Activity */}
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                flex: 1,
                boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
                minHeight: 300,                 // Taller like design
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 2, fontSize: "1rem" }}>
                Recent Activity
              </Typography>

              <List
                sx={{
                  // maxHeight: 260,
                  overflowY: "auto",
                  pr: 1,
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "rgba(0,0,0,0.1)",
                    borderRadius: "6px",
                  },
                }}
              >
                {recentActivity.map((act, idx) => (
                  <React.Fragment key={idx}>
                    <ListItem sx={{ py: 1.5, alignItems: "flex-start" }}>
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            bgcolor:
                              act.color === "success"
                                ? "#ECFDF5"
                                : act.color === "warning"
                                  ? "#FFFBEB"
                                  : "#EFF6FF",
                            color:
                              act.color === "success"
                                ? "#059669"
                                : act.color === "warning"
                                  ? "#92400E"
                                  : "#1E40AF",
                            width: 40,
                            height: 40,
                          }}
                        >
                          {idx % 2 === 0 ? (
                            <AssignmentTurnedIn fontSize="large" />
                          ) : (
                            <AccessTime fontSize="large" />
                          )}
                        </Avatar>
                      </ListItemAvatar>

                      <ListItemText
                        primary={
                          <Typography sx={{ fontWeight: 600, fontSize: "1.3rem" }}>
                            {act.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
                            {act.subtitle}
                          </Typography>
                        }
                      />

                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ whiteSpace: "nowrap", fontSize: "1.2rem", mt: 0.6 }}
                      >
                        {act.time}
                      </Typography>
                    </ListItem>

                    {/* Divider between items */}
                    {idx < recentActivity.length - 1 && (
                      <Box
                        sx={{
                          height: 1,
                          bgcolor: "rgba(0,0,0,0.06)",
                          mx: 2,
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Paper>














            {/* Right side within left column: Rate & Review (area) & Complaints */}
            <Box sx={{ width: { xs: "100%", md: 520 }, display: "flex", flexDirection: "column", gap: 2 }}>


              {/* Rate & Review small chart */}
              <Paper elevation={0} sx={{ p: 2, borderRadius: 2, boxShadow: "0 6px 18px rgba(15,23,42,0.06)" }}>
                <Typography sx={{ fontWeight: 700, mb: 1, fontSize: 17 }}>Total Rate & Review</Typography>
                <Box sx={{ height: 120 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={barData}>
                      <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FFEDD5" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#FFEDD5" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" hide />
                      <YAxis hide />
                      <Tooltip
                        contentStyle={{
                          fontSize: "19px",
                          padding: "8px 12px",
                          borderRadius: "8px",
                        }}
                        itemStyle={{
                          fontSize: "14px",
                        }}
                      />
                      <Area type="monotone" dataKey="requests" stroke="#FF7A00" fill="url(#colorUv)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                  <Typography variant="h4" color="text.secondary">4.5 avg rating</Typography>
                  <Typography variant="h4" color="text.secondary">+8% this month</Typography>
                </Box>
              </Paper>

              {/* Complaints & Resolutions */}
              <Paper elevation={0} sx={{ p: 2, borderRadius: 2, textAlign: "center", boxShadow: "0 6px 18px rgba(15,23,42,0.06)" }}>
                <Typography sx={{ fontWeight: 700, fontSize: 19, mt: 2 }}>Complaints & Resolutions</Typography>
                <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 4, cursor: 'pointer' }}>
                  <Box sx={{ p: 5, bgcolor: "#F17A28", borderRadius: 2 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: 'white' }}>{complaints.total}</Typography>
                    <Typography variant="h4" color="white">Total</Typography>
                  </Box>
                  <Box sx={{ p: 5, bgcolor: "#F17A28", borderRadius: 2 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: 'white' }}>{complaints.pending}</Typography>
                    <Typography variant="h4" color="white">Pending</Typography>
                  </Box>
                  <Box sx={{ p: 5, bgcolor: "#F17A28", borderRadius: 2 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: 'white' }}>{complaints.resolved}</Typography>
                    <Typography variant="h4" color="white">Resolved</Typography>
                  </Box>
                </Stack>
                <Button size="large" sx={{ mt: 3, textTransform: "none", color: "#F17A28", fontSize: 19 }}>View All</Button>
              </Paper>
            </Box>
          </Stack>
        </Box>

        {/* Right Section - 30% */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 30%" }, display: "flex", flexDirection: "column", gap: 3 }}>


          {/* Recent Bookings */}
          <Paper elevation={0} sx={{ p: 2, borderRadius: 2, boxShadow: "0 6px 18px rgba(15,23,42,0.06)", flex: 1 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Recent Booking</Typography>
              <Button
                size="large"
                variant="contained"
                sx={{
                  textTransform: "none",
                  bgcolor: "#FFEDD5",
                  color: "#F17A28",
                  fontSize: 20,
                  "&:hover": {
                    bgcolor: "#FFEDD5",
                  },
                }}
              >
                View All
              </Button>

            </Stack>

            <List>
              {bookings.map((b, i) => (
                <ListItem key={i} sx={{ py: 1.2 }}>
                  <ListItemText
                    primary={<Typography sx={{ fontWeight: 700, fontSize: 20 }}>{b.title}</Typography>}
                    secondary={<Typography variant="h4" color="text.secondary">{b.time}</Typography>}
                  />
                  <Chip
                    label={b.status}
                    size="large"
                    color={b.status === "Completed" ? "success" : b.status === "Cancelled" ? "error" : "warning"}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>


        </Box>
      </Box>
    </Box>
  );
}




























































