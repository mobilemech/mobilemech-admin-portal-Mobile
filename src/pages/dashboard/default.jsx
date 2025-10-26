
import { useMemo, useState } from 'react'
import StreamModal from './modals/StreamModal';
import StartStreamModal from './modals/StartStreamModal';
import Paper from '@mui/material/Paper';

import {
  MonetizationOn,
  People,
  EmojiEvents,
} from "@mui/icons-material";

// material-ui
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';





// project imports
import MainCard from 'components/MainCard';

import UniqueVisitorCard from 'sections/dashboard/default/UniqueVisitorCard';

import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import image from "./Avatar.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MessageIcon from '@mui/icons-material/Message';
import QuizIcon from '@mui/icons-material/Quiz';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import group from "./Group.png"
import Rect1 from "./Rect1.png"
import Rect2 from "./Rect2.png"
import Rect3 from "./Rect3.png"
import EastIcon from '@mui/icons-material/East';




import React, { useEffect } from 'react';
import { display } from '@mui/system';

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





const status = [
  {
    value: 'Last Month',
    label: 'Last Month'
  },
  {
    value: 'This Month',
    label: 'This Month'
  },

];











export default function DashboardDefault() {


  const [value, setValue] = useState('This Month');
  const [openModal, setOpenModal] = useState(false);
  const [startStreamOpen, setStartStreamOpen] = useState(false)

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);


    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const zoom = useMemo(() => {
    return width <= 768 ? 0.55 : 0.50;
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
      // ✅ Firefox / Safari fallback
      body.style.transform = `scale(${zoom})`;
      body.style.transformOrigin = "top center";
      body.style.width = `${(100 / zoom).toFixed(2)}%`;
      body.style.margin = "0 auto";
    }
  }, [zoom]);

  // Mock Data
  const Requests = 15;
  const newMembers = 21;
  const avgDonation = "$350.40";
  const Sermons = 54;






  return (

    <Grid container rowSpacing={4.5} columnSpacing={2}  >

      <Grid sx={{ mb: -2.25 }} size={12}>
        <Typography variant="h4">Hi, Pastor Grace</Typography>
      </Grid>
      <Grid sx={{ mb: -2.25 }} size={12}>
        <Typography variant="h1">Welcome To Worsship!</Typography>
      </Grid>




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
                Requests (this month)
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {Requests}
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
                New Members
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {newMembers}
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
                Donations
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                $350.40
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
                Sermons
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 22 }}>
                {Sermons}
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















      <Grid sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} size={{ md: 8 }} />


      {/* Left hand side */}

      <Grid size={{ xs: 12, md: 7, lg: 8 }}>
        <UniqueVisitorCard />



        <Grid
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'stretch',
          }}
        >


          {/* Member activity */}

          <Grid sx={{ width: '100%' }}>

            <MainCard content={false}>
              <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>

                <Stack style={{ flexDirection: 'row', justifyContent: 'space-between', padding: '20px 20px' }}>
                  <Typography variant="h3">Member Activity</Typography>


                  <Grid>
                    <TextField
                      id="standard-select-currency"
                      size="small"
                      select
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      sx={{ '& .MuiInputBase-input': { py: 0.75, fontSize: '0.875rem' } }}
                    >
                      {status.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>


                </Stack>




              </List>


              <Stack style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>





                <Stack style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >


                  <Stack style={{ marginTop: 20 }}>
                    <Stack style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                      <FiberManualRecordIcon style={{ color: '#2B04DB' }} />
                      <Typography variant='h4'>Active</Typography>
                    </Stack>
                    <Typography variant='h4' sx={{ mt: 1 }}>3000</Typography>

                  </Stack>




                  <Stack style={{ marginTop: 60 }}>
                    <Stack style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                      <FiberManualRecordIcon style={{ color: '#FF6B6B' }} />
                      <Typography variant='h4'>Inactive</Typography>
                    </Stack>
                    <Typography variant='h4' sx={{ mt: 1, }}>254</Typography>

                  </Stack>





                  <Stack style={{ marginTop: 90 }}>
                    <Stack style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                      <FiberManualRecordIcon style={{ color: '#FFAC20' }} />
                      <Typography variant='h4'>Total</Typography>
                    </Stack>
                    <Typography variant='h4' sx={{ mt: 1 }}>3254</Typography>

                  </Stack>



                </Stack>



                <Stack >
                  <img src={group} style={{ width: 250, height: 250 }} />
                </Stack>

              </Stack>






            </MainCard>
          </Grid>



          {/* upcoming events */}

          <Grid sx={{ width: '100%' }}>


            <MainCard content={false}>
              <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>

                <Stack style={{ flexDirection: 'row', justifyContent: 'space-between', padding: '20px 20px' }}>
                  <Typography variant="h3">27 Sept</Typography>


                  <Grid>
                    <TextField
                      id="standard-select-currency"
                      size="small"
                      select
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      sx={{ '& .MuiInputBase-input': { py: 0.75, fontSize: '0.875rem' } }}
                    >
                      {status.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>


                </Stack>




              </List>


              <Stack style={{ padding: '10px 30px', }}>
                <Stack >


                  <Stack style={{ flexDirection: 'row', gap: 13, alignItems: 'center', }}>
                    <img src={Rect1} style={{ width: 5, height: 60 }} />
                    <Stack >

                      <Typography variant='h3'>Midday Confession</Typography>
                      <Typography variant='h4' sx={{ mt: 1, ml: 1, color: '#B1B8C8' }}>12:00 PM - 01`:00 PM</Typography>
                    </Stack>

                  </Stack>




                  <Stack style={{ flexDirection: 'row', gap: 13, marginTop: 30, alignItems: 'center', }}>
                    <img src={Rect2} style={{ width: 5, height: 60 }} />
                    <Stack >

                      <Typography variant='h3'>Word Study Meeting</Typography>
                      <Typography variant='h4' sx={{ mt: 1, ml: 1, color: '#B1B8C8' }}>02:00 PM - 03:00 PM</Typography>
                    </Stack>

                  </Stack>






                  <Stack style={{ flexDirection: 'row', gap: 13, marginTop: 35, alignItems: 'center', }}>
                    <img src={Rect3} style={{ width: 5, height: 60 }} />
                    <Stack >

                      <Typography variant='h3'>Weekly Leaders Connect</Typography>
                      <Typography variant='h4' sx={{ mt: 1, ml: 1, color: '#B1B8C8' }}>05:00 PM - 06:00 PM</Typography>
                    </Stack>

                  </Stack>



                </Stack>


                <Stack style={{ flexDirection: 'row', cursor: 'pointer', marginBottom: 20, marginTop: 20, justifyContent: 'flex-end', alignItems: 'center', gap: 20, color: '#2B04DB' }}>
                  <Typography variant='h3'>View all upcoming Events</Typography>
                  <EastIcon />

                </Stack>






              </Stack>


            </MainCard>
          </Grid>




        </Grid>


      </Grid>












      {/* Right hand side */}

      <Grid size={{ xs: 12, md: 5, lg: 4 }}>


        {/* Modal */}

        <div>
          <StreamModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            onNext={() => {
              setOpenModal(false);
              setTimeout(() => setStartStreamOpen(true), 200);
            }}
          />


          <StartStreamModal
            open={startStreamOpen}
            onClose={() => setStartStreamOpen(false)}
          />
        </div>







        {/* Quick Action Cards */}


        <Stack spacing={1}>
          {[
            { title: "Live Stream", desc: "Plan your next worship", gradient: "linear-gradient(to bottom, #7838F4, #2B04DB)", icon: image },
            { title: "Create Event", desc: "Organize your next church event", gradient: "linear-gradient(to bottom, #FF6773, #FE8B6E)", icon: <CalendarMonthIcon sx={{ width: 40, height: 40 }} /> },
            { title: "Message Church", desc: "Inform your congregation", gradient: "linear-gradient(to bottom, #CC6002, #FFB532)", icon: <MarkUnreadChatAltIcon sx={{ width: 40, height: 40 }} /> },
          ].map((card, idx) => (
            <Paper
              key={idx}
              sx={{
                background: card.gradient,
                borderRadius: 3,
                cursor: "pointer",
                boxShadow: "1px 1px 4px rgba(0,0,0,0.1)",
                width: "100%",
                p: 2.5,
                mb: 1.5
              }}
              onClick={card.title === "Live Stream" ? () => setOpenModal(true) : undefined}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="h4" color="#fff" fontWeight={700}>{card.title}</Typography>
                  <Typography variant="h5" color="#fefefeff" mt={0.3}>{card.desc}</Typography>
                </Box>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: 50, height: 50, borderRadius: "50%", background: "white" }}
                >
                  {typeof card.icon === "string" ? <img src={card.icon} style={{ width: 36, height: 36 }} /> : card.icon}
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>







        {/* Notification */}
        <Grid

          sx={{ mt: 4.5, mb: 1.5 }}
        >
          <MainCard content={false} sx={{ p: 0, borderRadius: 3 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ px: 2, py: 1.5 }} // Slightly reduced padding
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
                  color: '#FE8B6E',
                  bg: '#FFF1F1',
                  icon: <QuizIcon sx={{ width: 40, height: 40 }} />,
                  title: '15 New MVPs',
                  subtitle: 'View MVPs'
                },
                {
                  color: '#2B04DB',
                  bg: '#F1F2FF',
                  icon: <VolunteerActivismIcon sx={{ width: 40, height: 40 }} />,
                  title: '6 New Donations',
                  subtitle: 'View Donations'
                },
                {
                  color: '#CC6002',
                  bg: '#FFF9EB',
                  icon: <MessageIcon sx={{ width: 40, height: 40 }} />,
                  title: '4 New Requests',
                  subtitle: 'View Requests'
                },
                {
                  color: '#5EC4B3',
                  bg: '#F2FBF9',
                  icon: <MessageIcon sx={{ width: 40, height: 40 }} />,
                  title: '2 Counselling Schedule',
                  subtitle: 'View Schedule'
                }
              ].map((item, index) => (
                <ListItem
                  key={index}
                  component={ListItemButton}
                  secondaryAction={
                    <Stack sx={{ alignItems: 'flex-end' }}>
                      <ArrowForwardIosIcon sx={{ width: 24, height: 24, color: '#999' }} />
                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Stack
                      sx={{
                        gap: 0.5,
                        color: item.color,
                        height: 60,
                        width: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        background: item.bg
                      }}
                    >
                      {item.icon}
                    </Stack>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ ml: 2 }}
                    primary={<Typography variant="h4">{item.title}</Typography>}
                    secondary={item.subtitle}
                  />
                </ListItem>
              ))}
            </List>
          </MainCard>
        </Grid>




      </Grid>



















    </Grid>
  );
}




















