
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
import { DataGrid } from '@mui/x-data-grid';
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import image from "./images/Avatar.png"
import ListItemAvatar from '@mui/material/ListItemAvatar';
import QuizIcon from '@mui/icons-material/Quiz';
import MessageIcon from '@mui/icons-material/Message';

import Rect1 from "./images/Rect1.png";
import Rect2 from "./images/Rect2.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import donationImg from "./images/donation.png"

import TeamMemberModal from "./Modals/AddTeamModal";
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





export default function TeamMembers() {
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
  const totalTeamMembers = 12;
  const activeRoles = 7;
  const activeTeamMembers = 11;
  const pendingInvites = 3;








  const mockRows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', lastActive: '2 hours ago', role: 'Choir Leader' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', lastActive: '5 hours ago', role: 'Usher' },
    { id: 3, name: 'Samuel Green', email: 'samuel@example.com', lastActive: '1 day ago', role: 'Youth Pastor' },
    { id: 4, name: 'Esther Brown', email: 'esther@example.com', lastActive: '3 days ago', role: 'Media Team' },
    { id: 5, name: 'David Miller', email: 'david@example.com', lastActive: '4 days ago', role: 'Technical Team' },
    { id: 6, name: 'Grace Johnson', email: 'grace@example.com', lastActive: '1 week ago', role: 'Sunday School' },
    { id: 7, name: 'Peter Obi', email: 'peter@example.com', lastActive: '2 weeks ago', role: 'Security' },
    { id: 8, name: 'Mary Jane', email: 'mary@example.com', lastActive: '3 weeks ago', role: 'Finance' },
    { id: 9, name: 'Tunde Bakare', email: 'tunde@example.com', lastActive: '1 month ago', role: 'Hospitality' },
    { id: 10, name: 'Ruth Wise', email: 'ruth@example.com', lastActive: '2 months ago', role: 'Volunteer Coord.' },
  ];

  const columns = [
    {
      field: 'avatar',
      headerName: 'User ID',
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Avatar
          alt={params.row.name}
          src={`https://i.pravatar.cc/150?u=${params.row.email}`}
          sx={{ width: 42, height: 42 }}
        />
      ),
    },
    { field: 'name', headerName: 'Full Name', flex: 1, sortable: true },
    { field: 'email', headerName: 'Email', flex: 1.3, sortable: true },
    { field: 'lastActive', headerName: 'Last Active', flex: 0.9, sortable: true },
    { field: 'role', headerName: 'Role', flex: 0.9, sortable: true },
  ];







  return (
    <Box sx={{ px: 3, py: 3, width: "100%" }}>
      {/* Subtitle */}
      <Typography
        variant="h4"
        sx={{ color: "black", mb: 1.5, fontSize: 20 }}
      >
        Invite and Manage your church admin team on Worsship.
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
          Team Members
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
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: 'pointer' }}>
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
                Total Team Members
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {totalTeamMembers}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: 'pointer' }}>
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
                Active Roles
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {activeRoles}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: 'pointer' }}>
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
                Active Team Members
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {activeTeamMembers}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Card 4 (Blue gradient) */}
        <Grid item xs={12} sm={6} md={3} sx={{ flexGrow: 1, cursor: 'pointer' }}>
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
                Pending Invites
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 22 }}>
                {pendingInvites}
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
        <TeamMemberModal open={openModal} onClose={() => setOpenModal(false)} />

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




            {/* Team Members table */}
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography sx={{ fontWeight: 800, mb: 2, fontSize: 17 }}>
                Team Members
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "1500px",
                  height: 400,
                  bgcolor: 'white',
                  borderRadius: 2,
                  mx: "auto",
                  overflowX: "auto"
                }}
              >
                <DataGrid
                  rows={mockRows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5, 10, 25]}
                  pagination
                  disableRowSelectionOnClick
                  sx={{
                    border: 'none',
                    fontSize: '1.1rem',
                    '& .MuiDataGrid-cell': {
                      fontSize: '1.1rem',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                      bgcolor: '#F7F7F9',
                      color: '#111827',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                    },
                    '& .MuiDataGrid-footerContainer': {
                      fontSize: '1.1rem',
                    },
                    '& .MuiDataGrid-row:hover': {
                      bgcolor: '#FBFBFF',
                    },
                    '& .MuiDataGrid-cell:focus': {
                      outline: 'none',
                    },
                  }}
                />

              </Box>
            </Paper>












            {/* Bottom Cards (Overview + Itinerary) */}
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
              {/* Overview */}



              <Stack style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white' }}>





                <Stack style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >


                  <Stack style={{ marginTop: 20 }}>
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
                    <Typography variant='h4' sx={{ mt: 1, }}>254</Typography>

                  </Stack>





                  <Stack style={{ marginTop: 90 }}>
                    <Stack style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                      <FiberManualRecordIcon style={{ color: '#FFAC20' }} />
                      <Typography variant='h4'>General offering</Typography>
                    </Stack>
                    <Typography variant='h4' sx={{ mt: 1 }}>3254</Typography>

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
                  title: "Add New",
                  desc: "Add new members or roles",
                  gradient: "linear-gradient(to bottom, #7838F4, #2B04DB)",

                  icon: image
                }, {
                  title: "Edit Permissions",
                  desc: "Edit Team member's Permissions",
                  gradient: "linear-gradient(to bottom, #FF6773, #FE8B6E)",
                  icon: <CalendarMonthIcon sx={{ width: 40, height: 40 }} />
                }, {
                  title: "Team Settings",
                  desc: "Bible Study materials",
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
                        card.title === "Add New" ? () => setOpenModal(true) :
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












            {/* Notification */}
            <Grid

              sx={{ mt: 8, mb: 1.5 }}
            >
              <Paper content={false} sx={{ p: 0, borderRadius: 3, mt: 2 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ px: 2, py: 1.5 }}
                >
                  <Typography variant="h3" color="black">Notification</Typography>
                  <Typography variant="h4" color="#2B04DB" sx={{ cursor: "pointer" }}>
                    View All
                  </Typography>
                </Stack>

                <List
                  component="nav"
                  sx={{
                    px: 0,
                    py: 0,
                    '& .MuiListItemButton-root': {
                      py: 1.2, // slightly reduced vertical space
                      px: 2,
                      '& .MuiAvatar-root': avatarSX,
                      '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                    }
                  }}
                >
                  {/* Notification Items */}
                  {[
                    {

                      title: 'New Livestream',
                      subtitle: 'Samuel starrted a new Livestream',
                      date: 'sept 15, 10:00am'
                    },

                    {

                      title: 'Merchandise Refund',
                      subtitle: 'Grace Approved a store refund',
                      date: 'sept 15, 10:00am'
                    },
                    {

                      title: 'New Livestream',
                      subtitle: 'Samuel starrted a new Livestream',
                      date: 'sept 15, 10:00am'
                    },
                    {

                      title: 'New Livestream',
                      subtitle: 'Samuel starrted a new Livestream',
                      date: 'sept 15, 10:00am'
                    },

                    {
                      title: 'New Livestream',
                      subtitle: 'Samuel starrted a new Livestream',
                      date: 'sept 15, 10:00am'
                    },

                    {

                      title: 'New Livestream',
                      subtitle: 'Samuel starrted a new Livestream',
                      date: 'sept 15, 10:00am'
                    },
                    {
                      title: 'New Livestream',
                      subtitle: 'Samuel starrted a new Livestream',
                      date: 'sept 15, 10:00am'
                    },
                  ].map((item, index) => (
                    <ListItem
                      key={index}
                      component={ListItemButton}
                      secondaryAction={
                        <Stack sx={{ alignItems: 'flex-end' }}>
                          <Typography>{item.date}</Typography>
                        </Stack>
                      }
                    >

                      <ListItemText
                        sx={{ ml: 2 }}
                        primary={<Typography variant="h4">{item.title}</Typography>}
                        secondary={
                          <Typography variant="body1" sx={{ fontSize: 18 }}>
                            {item.subtitle}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>









          </Stack>
        </Box>















      </Box>
    </Box>
  );
}








































