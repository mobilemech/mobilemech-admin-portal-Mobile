
import React, { useEffect, useState, useMemo } from "react";
import {
  Box,
  Stack,
  Typography,
  Paper,
  Grid,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  MonetizationOn,
  People,
  EmojiEvents,

} from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import image from "./Avatar.png"
import ListItemAvatar from '@mui/material/ListItemAvatar';
import QuizIcon from '@mui/icons-material/Quiz';
import MessageIcon from '@mui/icons-material/Message';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import Rect1 from "./Rect1.png";
import Rect2 from "./Rect2.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import donationImg from "./donation.png"

import NewDonation from "./Modals/newDonationModal";
import DonationTypeModal from "./Modals/donationTypesModal";



// avatar style
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





export default function Donations() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
 

    const [itinerary] = useState([
      { id: 1, title: "Chinedu Ogwu", time: "20 - building project", duration: "30 mins", image: Rect2 },
      { id: 2, title: "Kelvin Amadi", time: "20 - building project", duration: "15 mins", image: Rect2 },
      { id: 3, title: "Amaka Nwosu", time: "20 - building project", duration: "15 mins", image: Rect2 },
      { id: 4, title: "James bond", time: "20 - building project", duration: "15 mins", image: Rect2 },
    ]);

  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)






  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const zoom = useMemo(() => {
    return width <= 768 ? 0.55 : 0.5;
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
      body.style.transform = `scale(${zoom})`;
      body.style.transformOrigin = "top center";
      body.style.width = `${(100 / zoom).toFixed(2)}%`;
      body.style.margin = "0 auto";
    }
  }, [zoom]);

  

  // Mock Data
  const totalDonation = "$50,000";
  const numDonors = 21;
  const avgDonation = "$350.40";
  const topDonationLabel = "Building Project";

  const donationData = [
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
  ];



  const recentActivity = [
    { id: 1, action: "New donation added", time: " View Donation" },
    { id: 2, action: "Donation type updated", time: "View Donation" },
    { id: 3, action: "Monthly report exported", time: "View Donation" },
  ];











  return (
    <Box sx={{ px: 3, py: 3, width: "100%" }}>
      {/* Subtitle */}
      <Typography
        variant="h4"
        sx={{ color: "black", mb: 1.5, fontSize: 17 }}
      >
        Manage Offerings, view support for the church and set up giving options
        for your members
      </Typography>

      {/* Title Row */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
        flexWrap="wrap"
        gap={2}
      >
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Donations and Giving
        </Typography>

   
      </Stack>

  





   {/* Stats Cards */}
      <Grid
        container
        spacing={2.5}
        alignItems="stretch"
        sx={{
          width: "100%",
          mx: "auto",
        }}
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor:'pointer' }}>
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
              sx={{
                bgcolor: "#EEF2FF",
                color: "#4F46E5",
                width: 58,
                height: 58,
              }}
            >
              <MonetizationOn />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.secondary">
                Total Donation (this month)
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {totalDonation}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor:'pointer' }}>
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
              sx={{
                bgcolor: "#2B04DB",
                color: "white",
                width: 58,
                height: 58,
              }}
            >
              <People />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.secondary">
                Number of Donors
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {numDonors}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor:'pointer' }}>
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
              sx={{
                bgcolor: "#EEF2FF",
                color: "#4F46E5",
                width: 58,
                height: 58,
              }}
            >
              <BarChartIcon />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.secondary">
                Average Donation
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                $350.40
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 4 (Blue gradient) */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor:'pointer' }}>
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
              background:
                "linear-gradient(135deg, #6C4CFF 0%, #4F46E5 100%)",
              transition: "0.25s ease",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ opacity: 0.95 }}>
                Top Donation
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 22 }}>
                {topDonationLabel}
              </Typography>
            </Box>
            <Avatar
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                width: 62,
                height: 62,
                ml: 2,
              }}
            >
              <EmojiEvents sx={{ color: "#fff" }} />
            </Avatar>
          </Paper>
        </Grid>
      </Grid>





  <div>
       <NewDonation open={openModal} onClose={() => setOpenModal(false)} />

       <DonationTypeModal open={openModal2} onClose={() => setOpenModal2(false)} />

  </div>
 








      {/* ===== NEW BODY SECTION (70% / 30%) ===== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          mt: 4,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 70%" } }}>
          <Stack spacing={3}>
            {/* Donation Analytics */}
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography sx={{ fontWeight: 800, mb: 2 }}>
                Donation Analytics
              </Typography>
              <Box sx={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={donationData}>
                    <defs>
                      <linearGradient id="colorDon" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="amount"
                      stroke="#4F46E5"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorDon)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Paper>

      




                {/* Bottom Cards (Overview + Itinerary) */}
                        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
                          {/* Overview */}
                       


      <Stack style={{ flexDirection: 'row', justifyContent: 'space-around',  alignItems: 'center', backgroundColor:'white' }}>



            

            <Stack style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}} >


              <Stack  style={{marginTop:20}}>
                <Stack style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                  <FiberManualRecordIcon style={{ color: '#2B04DB' }} />
                  <Typography variant='h4'>Building Projects</Typography>
                </Stack>
                <Typography variant='h4' sx={{ mt: 1 }}>3000</Typography>

              </Stack>




              <Stack style={{ marginTop: 60 }}>
                <Stack style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                  <FiberManualRecordIcon style={{ color: '#FF6B6B' }} />
                  <Typography variant='h4'>Missions</Typography>
                </Stack>
                <Typography variant='h4' sx={{ mt: 1,  }}>254</Typography>

              </Stack>





              <Stack style={{  marginTop: 90 }}>
                <Stack style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                  <FiberManualRecordIcon style={{ color: '#FFAC20' }} />
                  <Typography variant='h4'>General offering</Typography>
                </Stack>
                <Typography variant='h4' sx={{ mt: 1}}>3254</Typography>

              </Stack>



            </Stack>



            <Stack >
              <img src={donationImg} style={{ width: 250, height: 250 }} />
            </Stack>

          </Stack>















            
                          {/* Itinerary */}
                          <Paper sx={{ p: 3, borderRadius: 2 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <Typography sx={{ fontWeight: 800 }}>Recent Donation</Typography>
                              <Button size="small" sx={{ textTransform: "none" }}>
                                Today ▾
                              </Button>
                            </Box>
                            <List sx={{ mt: 1 }}>
                              {itinerary.map((it) => (
                                <ListItem key={it.id} disableGutters sx={{ py: 1, gap: 2 }}>
                                  <img src={it.image} alt={it.title} />
                                  <ListItemText
                                    primary={<Typography sx={{ fontWeight: 800, fontSize: 17 }}>{it.title}</Typography>}
                                    secondary={
                                      <Typography variant="h5" color="text.secondary">
                                        {`${it.time} • ${it.duration}`}
                                      </Typography>
                                    }
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Paper>
                        </Box>







          </Stack>
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 30%" } }}>
          <Stack spacing={3}>
            {/* Quick Actions */}
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography sx={{ fontWeight: 800, mb: 2 }}>
                Quick Actions
              </Typography>











              <Stack spacing={2}>
                {[{
                  title: "Create Donation",
                  desc: "Plan your next live worship",
                   gradient: "linear-gradient(to bottom, #7838F4, #2B04DB)",
                 
                  icon: image
                }, {
                  title: "Donation Types",
                  desc: "Organize your next church event",
                   gradient: "linear-gradient(to bottom, #FF6773, #FE8B6E)",
                  icon: <CalendarMonthIcon sx={{ width: 40, height: 40 }} />
                }, {
                  title: "Donation Settings",
                  desc: "Inform your congregation",
                  gradient: "linear-gradient(to bottom, #CC6002, #FFB532)",
                  icon: <MarkUnreadChatAltIcon sx={{ width: 40, height: 40 }} />
                }].map((card, idx) => (
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
                      p: 3
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                      onClick={
                        card.title === "Create Donation" ? () => setOpenModal(true) :
                          card.title === "Donation Types" ? () => setOpenModal2(true) :
                            undefined
                      }
                    >
                      <Box>
                        <Typography variant="h4" color="#fff" fontWeight={700}>
                          {card.title}
                        </Typography>
                        <Typography variant="h5" color="#fefefeff" mt={0.5}>
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
                          background: "white"
                        }}
                      >
                        {typeof card.icon === "string" ? (
                          <img src={card.icon} style={{ width: 40, height: 40 }} />
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
                <Typography sx={{ fontWeight: 800 }}>
                  Recent Activity
                </Typography>
                <Button size="small" sx={{ textTransform: "none" }}>
                  View All
                </Button>
              </Stack>


              {/* <List>
                {recentActivity.map((act) => (
                  <ListItem key={act.id} disableGutters sx={{ py: 1, gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: "#EEF2FF",
                        color: "#4F46E5",
                        width: 36,
                        height: 36,
                      }}
                    >
                      <History />
                    </Avatar>
                    <ListItemText
                      primary={<Typography sx={{ fontWeight: 700 }}>{act.action}</Typography>}
                      secondary={
                        <Typography variant="h5" color="text.secondary">
                          {act.time}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List> */}



              <List
                component="nav"
                sx={{
                  px: 0,
                  py: 0,
                  '& .MuiListItemButton-root': {
                    py: 1.5,
                    px: 2,
                    '& .MuiAvatar-root': avatarSX,
                    '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                  }
                }}
              >


                    <ListItem
                  component={ListItemButton}
                  //  divider
                  secondaryAction={
                    <Stack sx={{ alignItems: 'flex-end' }}>
                      <Typography variant="subtitle1" noWrap>
                        <ArrowForwardIosIcon style={{ width: 30, height: 30 }} />
                      </Typography>

                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Stack sx={{ gap: 0.5, color: '#2B04DB', height: 65, width: 65, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#F1F2FF', }}>
                      <VolunteerActivismIcon sx={{ width: 40, height: 40 }} />
                    </Stack>

                  </ListItemAvatar>
                  <ListItemText sx={{ ml: 2 }} primary={<Typography variant="h4" >6 New Donations</Typography>} secondary="View Donations" />
                </ListItem>
            





                <ListItem
                  component={ListItemButton}
                  //  divider
                  secondaryAction={
                    <Stack sx={{ alignItems: 'flex-end' }}>
                      <Typography variant="subtitle1" noWrap>
                        <ArrowForwardIosIcon style={{ width: 30, height: 30 }} />
                      </Typography>

                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Stack sx={{ gap: 0.5, color: '#2B04DB', height: 65, width: 65, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#F1F2FF', }}>
                      <VolunteerActivismIcon sx={{ width: 40, height: 40 }} />
                    </Stack>

                  </ListItemAvatar>
                  <ListItemText sx={{ ml: 2 }} primary={<Typography variant="h4" >6 New Donations</Typography>} secondary="View Donations" />
                </ListItem>







                <ListItem
                  component={ListItemButton}
                  //  divider
                  secondaryAction={
                    <Stack sx={{ alignItems: 'flex-end' }}>
                      <Typography variant="subtitle1" noWrap>
                        <ArrowForwardIosIcon style={{ width: 30, height: 30 }} />
                      </Typography>

                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Stack sx={{ gap: 0.5, color: '#CC6002', height: 65, width: 65, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#FFF9EB', }}>
                      <MessageIcon sx={{ width: 40, height: 40 }} />
                    </Stack>

                  </ListItemAvatar>
                  <ListItemText sx={{ ml: 2 }} primary={<Typography variant="h4" >Donation Target hit!</Typography>} secondary="View Request" />
                </ListItem>




                <ListItem
                  component={ListItemButton}
                  //  divider
                  secondaryAction={
                    <Stack sx={{ alignItems: 'flex-end' }}>
                      <Typography variant="subtitle1" noWrap>
                        <ArrowForwardIosIcon style={{ width: 30, height: 30 }} />
                      </Typography>

                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Stack sx={{ gap: 0.5, color: '#CC6002', height: 65, width: 65, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#FFF9EB', }}>
                      <MessageIcon sx={{ width: 40, height: 40 }} />
                    </Stack>

                  </ListItemAvatar>
                  <ListItemText sx={{ ml: 2 }} primary={<Typography variant="h4" >Donation Target hit!</Typography>} secondary="View Schedule" />
                </ListItem>







              </List>



            </Paper>








          </Stack>
        </Box>















      </Box>
    </Box>
  );
}





































