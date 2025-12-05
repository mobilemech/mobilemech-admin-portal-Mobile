

// DashboardDefault.jsx
import React, { useMemo, useState, useEffect } from "react";
import Paper from "@mui/material/Paper";

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
    Menu, MenuItem,
      Table,
      TableBody,
      TableCell,
      TableContainer,
      TableHead,
      TableRow,
        IconButton,

} from "@mui/material";


import {
  Add as AddIcon,
  Visibility,
  Edit,
  Delete,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import GroupsIcon from '@mui/icons-material/Groups';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import ListItemButton from '@mui/material/ListItemButton';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MessageIcon from '@mui/icons-material/Message';
import NetworkPingIcon from '@mui/icons-material/NetworkPing';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaidIcon from '@mui/icons-material/Paid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";


const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};



const generateMockData = () => {
  const mechanics = ["M. Yusuf", "A. Bello", "K. Danjuma", "R. Hakeem", "S. Umar"];
  const amounts = [5000, 7500, 10000, 12500, 15000]; // Amount in dollars
  const data = [];

  for (let i = 1; i <= 60; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (i % 30)); // Random day within the last month
    date.setHours(Math.floor(Math.random() * 24));
    date.setMinutes(Math.floor(Math.random() * 60));

    data.push({
      requestId: `CMP-${1700 + i}`,
      mechanic: mechanics[i % mechanics.length],
      amount: `₦${amounts[i % amounts.length]}`,
      requestedOn: date.toLocaleString(), // Date and time
      status: i % 2 === 0 ? "Approved" : "Denied",
      jobId: `JOB-${2600 + i}`,
      // 7 fields total
      reference: `REF-${3000 + i}`
    });
  }
  return data;
};



const complaintsData = generateMockData();














export default function Finance() {

  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  const [selected, setSelected] = useState(null);
    const [timeRange, setTimeRange] = useState("monthly");
      const [anchorEl, setAnchorEl] = useState(null);


        const [query, setQuery] = useState("");
        const [statusFilter, setStatusFilter] = useState("All");
        const [page, setPage] = useState(1);
      
        const rowsPerPage = 10;





    

        

        



   


       const donationData = {
    weekly: [
      { month: "Mon", amount: 1200 },
      { month: "Tue", amount: 1800 },
      { month: "Wed", amount: 1000 },
      { month: "Thu", amount: 2500 },
      { month: "Fri", amount: 2000 },
      { month: "Sat", amount: 2700 },
      { month: "Sun", amount: 1500 },
    ],
    monthly: [
      { month: "Jan", amount: 4000 },
      { month: "Feb", amount: 3200 },
      { month: "Mar", amount: 4800 },
      { month: "Apr", amount: 5200 },
      { month: "May", amount: 6100 },
      { month: "Jun", amount: 7500 },
      { month: "Jul", amount: 6800 },
      { month: "Aug", amount: 8000 },
      { month: "Sep", amount: 7000 },
      { month: "Oct", amount: 8200 },
    ],
    yearly: [
      { month: "2020", amount: 35000 },
      { month: "2021", amount: 45000 },
      { month: "2022", amount: 56000 },
      { month: "2023", amount: 62000 },
      { month: "2024", amount: 75000 },
    ],
  };



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




    // ------------------------ FILTERING & SEARCH ------------------------
    const filteredData = useMemo(() => {
      return complaintsData.filter((item) => {
        const matchesQuery =
          item.requestId.toLowerCase().includes(query.toLowerCase()) ||
          item.mechanic.toLowerCase().includes(query.toLowerCase()) ||
          item.requestedOn.toLowerCase().includes(query.toLowerCase()) ||
          item.amount.toLowerCase().includes(query.toLowerCase()) ||
          item.issue.toLowerCase().includes(query.toLowerCase()) ||
          item.jobId.toLowerCase().includes(query.toLowerCase());
  
        const matchesStatus =
          statusFilter === "All" ? true : item.status === statusFilter;
  
        return matchesQuery && matchesStatus;
      });
    }, [query, statusFilter]);
  
    const paginatedData = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      return filteredData.slice(start, start + rowsPerPage);
    }, [filteredData, page]);












  return (
    <Box sx={{ px: 3, py: 3, width: "100%" }}>
      {/* Title Row + Search */}
      <Stack
        direction="row"
        alignItems="center"
        mb={3}
        flexWrap="wrap"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h2" sx={{ fontWeight: 800 }}>
          Financial Summary OverView
        </Typography>
      </Stack>

      {/* Stats Cards */}
      <Grid
        container
        spacing={2.5}
        alignItems="stretch"
        sx={{ width: "100%", mx: "auto" }}
      >
        {/* Card 1 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
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
            <Avatar
              sx={{ bgcolor: "#f17a28", color: "white", width: 60, height: 60 }}
            >
              <AttachMoneyIcon style={{ fontSize: 40 }} />
            </Avatar>
            <Box>
              <Typography variant="h3" color="text.secondary">
                Total Platform Earnings
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 30 }}>
                ₦1,430, 00
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 3, fontSize: 17 }}>
                +8.2% Increase this month
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 2 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
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
            <Avatar
              sx={{ bgcolor: "#f17a28", color: "white", width: 60, height: 60 }}
            >
              <PaidIcon style={{ fontSize: 40 }} />
            </Avatar>
            <Box>
              <Typography variant="h3" color="text.secondary">
                Mechanic Payouts
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 30 }}>
                ₦930,000
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 3, fontSize: 17 }}>
                Average increase of 40%
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 3 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
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
            <Avatar
              sx={{ bgcolor: "#f17a28", color: "white", width: 60, height: 60 }}
            >
              <PaidIcon style={{ fontSize: 40 }} />
            </Avatar>
            <Box>
              <Typography variant="h3" color="text.secondary">
                Platform Fees (Commission)
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 30 }}>
                ₦3250,000
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 3, fontSize: 17 }}>
                Average increase of 60%
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 4 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
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
            <Avatar
              sx={{ bgcolor: "#f17a28", color: "white", width: 60, height: 60 }}
            >
              <VolunteerActivismIcon style={{ fontSize: 40 }} />
            </Avatar>
            
            <Box>
              <Typography variant="h3" color="text.secondary">
                Total Transactions
              </Typography>
              <Typography sx={{ fontWeight: 800,  fontSize: 30 }}>
                45
              </Typography>

                <Stack sx={{textAlign:'center', alignItems:'center', mt:1}}>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F17A28",
                  fontWeight: 600,
                  textTransform: "none",
                  px: 8,
                  py: 1,
                  borderRadius: "30px",
                  fontSize: "1.2rem",
                  "&:hover": { backgroundColor: "#ee965cff" },
                }}
              >
               View Details
              </Button>
             </Stack>


      
           
            </Box>

            
          </Paper>
        </Grid>

        {/* Card 4 (Blue gradient) */}
        {/* <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: "pointer" }}>
          <Paper
            elevation={3}
            sx={{
              p: 3.5,
              borderRadius: 3,
              minHeight: 140,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "black",
              width: "100%",
            //  background: "linear-gradient(135deg, #f4ad7eff 0%, #f17a28 100%)",
              transition: "0.25s ease",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ opacity: 0.95 }} color="text.secondary">
                Total Transactions
              </Typography>
                <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 30 }}>450</Typography>

     
            </Box>
            <Avatar sx={{ bgcolor: "white", width: 62, height: 62, ml: 2 }}>
              <Inventory2Icon sx={{ color: "#f17a28", fontSize: 40 }} />
            </Avatar>
          </Paper>
        </Grid> */}
      </Grid>

      {/* ===== NEW BODY SECTION (70% / 30%) ===== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          mt: 4,
        }}
      >
        {/* Left Section - 70% */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "0 0 70%" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Quick Actions + Graph row */}

          {/* Rate & Review small chart */}

          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: 18 }}>
                Earning Statistics
              </Typography>

              {/* Dropdown Filter */}
              <Button
                variant="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  borderColor: "rgba(79,70,229,0.2)",
                  color: "#F17A28",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  "&:hover": {
                    borderColor: "#F17A28",
                    backgroundColor: "rgba(39, 38, 47, 0.04)",
                    color: "#F17A28",
                  },
                }}
                endIcon={
                  <ArrowForwardIosIcon
                    sx={{ transform: "rotate(90deg)", fontSize: 14 }}
                  />
                }
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                {timeRange === "weekly"
                  ? "Weekly"
                  : timeRange === "monthly"
                    ? "Monthly"
                    : "Yearly"}
              </Button>

              <Stack
                sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <FiberManualRecordIcon sx={{ color: "#F17A28" }} />
                <Typography
                  sx={{ fontWeight: 800, alignItems: "center", fontSize: 18 }}
                >
                  Mechanic Payouts
                </Typography>
              </Stack>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                PaperProps={{ elevation: 2, sx: { borderRadius: 2 } }}
              >
                {["weekly", "monthly", "yearly"].map((option) => (
                  <MenuItem
                    key={option}
                    onClick={() => {
                      setTimeRange(option);
                      setAnchorEl(null);
                    }}
                    selected={timeRange === option}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ width: "100%", height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={donationData[timeRange]}>
                  <defs>
                    <linearGradient id="colorDon" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F17A28" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#F17A28" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#000000ff" />
                  <YAxis stroke="#000000ff" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="#F17A28"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorDon)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Paper>

          {/* Recent Activity */}

          <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>
                    Request ID
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>
                    Mechanic
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>
                    Amount
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>
                    Requested On
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedData.map((row) => (
                  <TableRow key={row.requestId}>
                    <TableCell sx={{ fontSize: 18 }}>{row.requestId}</TableCell>
                    <TableCell sx={{ fontSize: 18 }}>{row.mechanic}</TableCell>
                    <TableCell sx={{ fontSize: 18 }}>{row.amount}</TableCell>
                    <TableCell sx={{ fontSize: 18 }}>
                      {row.requestedOn}
                    </TableCell>

                    <TableCell>
                      <Chip
                        label={row.status}
                        sx={{
                          backgroundColor:
                            row.status === "Approved" ? "#CCF2D3" : "#FFF3CD",
                          color:
                            row.status === "Approved" ? "#1D7A33" : "#B38700",
                          fontWeight: 600,
                          fontSize: 18,
                        }}
                      />
                    </TableCell>

                    <TableCell>
                      <Button
                        onClick={() => handleView(row)}
                        variant="contained"
                        size="large"
                        sx={{
                          backgroundColor: "#EA7400",
                          "&:hover": { backgroundColor: "#d46800" },
                          borderRadius: 2,
                          textTransform: "none",
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}

                {paginatedData.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} align="center" sx={{ py: 5 }}>
                      No complaints found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Right Section - 30% */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 30%" } }}>
          <Stack spacing={3}>
            {/* Quick Actions */}
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography sx={{ fontWeight: 800, mb: 2, fontSize: 18 }}>
                Quick Actions
              </Typography>

              <Stack spacing={2}>
                {[
                  {
                    title: "Service Earnings",
                    desc: "loremsmjj chjdkkdcd jcjhdjdk",
                    gradient: "linear-gradient(to bottom, #F17A28, #F6A67094 )",

                    icon: <NetworkPingIcon sx={{ width: 40, height: 40 }} />,
                  },
                  {
                    title: "Commission Settings",
                    desc: "Adjust Commission Settings",
                    gradient: "linear-gradient(to bottom, #FF6773, #FE8B6E)",
                    icon: <SettingsIcon sx={{ width: 40, height: 40 }} />,
                  },
                  {
                    title: "Job History",
                    desc: "Check Job History",
                    gradient: "linear-gradient(to bottom, #CC6002, #FFB532)",
                    icon: <HistoryEduIcon sx={{ width: 40, height: 40 }} />,
                  },
                ].map((card, idx) => (
                  <Paper
                    key={idx}
                    sx={{
                      background: card.gradient,
                      borderRadius: 3,
                      cursor: "pointer",
                      boxShadow: "1px 1px 1px rgba(0,0,0,0.1)",
                      width: "100%",
                      maxWidth: 700,
                      mx: "auto",
                      p: 3,
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                      // onClick={
                      //   card.title === "Create Donation" ? () => setOpenModal(true) :
                      //     card.title === "Donation Types" ? () => setOpenModal2(true) :
                      //       undefined
                      // }
                    >
                      <Box>
                        <Typography variant="h3" color="#fff" fontWeight={700}>
                          {card.title}
                        </Typography>
                        <Typography variant="h4" color="#fefefeff" mt={0.5}>
                          {card.desc}
                        </Typography>
                      </Box>
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          background: "white",
                        }}
                      >
                        {typeof card.icon === "string" ? (
                          <img
                            src={card.icon}
                            style={{ width: 40, height: 40 }}
                          />
                        ) : (
                          card.icon
                        )}
                      </Stack>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </Paper>

            {/* Recent Activity */}
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography sx={{ fontWeight: 800, fontSize: 18 }}>
                  Recent Activity
                </Typography>
                <Button
                  size="large"
                  sx={{ textTransform: "none", color: "#DB6F24", fontSize: 20 }}
                >
                  View All
                </Button>
              </Stack>

              <List
                component="nav"
                sx={{
                  px: 0,
                  py: 0,
                  "& .MuiListItemButton-root": {
                    py: 1.5,
                    px: 2,
                    "& .MuiAvatar-root": avatarSX,
                    "& .MuiListItemSecondaryAction-root": {
                      ...actionSX,
                      position: "relative",
                    },
                  },
                }}
              >
                <ListItem
                  component={ListItemButton}
                  //  divider
                  secondaryAction={
                    <Stack sx={{ alignItems: "flex-end" }}>
                      <Typography variant="subtitle1" noWrap>
                        <ArrowForwardIosIcon
                          style={{ width: 30, height: 30 }}
                        />
                      </Typography>
                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Stack
                      sx={{
                        gap: 0.5,
                        color: "#DB6F24",
                        height: 65,
                        width: 65,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "#FBD6BC",
                      }}
                    >
                      <ConstructionIcon sx={{ width: 40, height: 40 }} />
                    </Stack>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ ml: 2 }}
                    primary={
                      <Typography variant="h3">Service-Based Earnings</Typography>
                    }
                    secondary={
                      <Typography variant="h5" color="secondary">Diagnostics category generated ₦52,000 in revenue this week.</Typography>
                    }
                  />
                </ListItem>

                <ListItem
                  component={ListItemButton}
                  //  divider
                  secondaryAction={
                    <Stack sx={{ alignItems: "flex-end" }}>
                      <Typography variant="subtitle1" noWrap>
                        <ArrowForwardIosIcon
                          style={{ width: 30, height: 30 }}
                        />
                      </Typography>
                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Stack
                      sx={{
                           gap: 0.5,
                        color: "#DB6F24",
                        height: 65,
                        width: 65,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "#FBD6BC",
                      }}
                    >
                      <AttachMoneyIcon sx={{ width: 40, height: 40 }} />
                    </Stack>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ ml: 2 }}
                    primary={
                      <Typography variant="h3">Successful Payments</Typography>
                    }
                    secondary={
                      <Typography variant="h5" color="secondary">₦18,000 payment received from Tolu Martins for Brake Pad Replacement.</Typography>
                    }
                  />
                </ListItem>

                <ListItem
                  component={ListItemButton}
                  //  divider
                  secondaryAction={
                    <Stack sx={{ alignItems: "flex-end" }}>
                      <Typography variant="subtitle1" noWrap>
                        <ArrowForwardIosIcon
                          style={{ width: 30, height: 30 }}
                        />
                      </Typography>
                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Stack
                      sx={{
                         gap: 0.5,
                        color: "#DB6F24",
                        height: 65,
                        width: 65,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "#FBD6BC",
                      }}
                    >
                      <AttachMoneyIcon sx={{ width: 40, height: 40 }} />
                    </Stack>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ ml: 2 }}
                        primary={
                      <Typography variant="h3">Successful Payments</Typography>
                    }
                    secondary={
                      <Typography variant="h5" color="secondary">₦18,000 payment received from Tolu Martins for Brake Pad Replacement.</Typography>
                    }
                  />
                </ListItem>

                <ListItem
                  component={ListItemButton}
                  //  divider
                  secondaryAction={
                    <Stack sx={{ alignItems: "flex-end" }}>
                      <Typography variant="subtitle1" noWrap>
                        <ArrowForwardIosIcon
                          style={{ width: 30, height: 30 }}
                        />
                      </Typography>
                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Stack
                      sx={{
                             gap: 0.5,
                        color: "#DB6F24",
                        height: 65,
                        width: 65,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "#FBD6BC",
                      }}
                    >
                      <CheckCircleIcon  sx={{ width: 40, height: 40 }} />
                    </Stack>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ ml: 2 }}
                        primary={
                      <Typography variant="h3">Payout Request</Typography>
                    }
                    secondary={
                      <Typography variant="h5" color="secondary">Pending payout request of ₦15,000 from C. Bello awaiting approval..</Typography>
                    }
                  />
                </ListItem>
              </List>
            </Paper>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}



























































































