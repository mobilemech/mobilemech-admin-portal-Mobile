
import { useMemo, useState } from 'react'
import StreamModal from './modals/StreamModal';
import StartStreamModal from './modals/StartStreamModal';

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
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from 'sections/dashboard/default/MonthlyBarChart';
import ReportAreaChart from 'sections/dashboard/default/ReportAreaChart';
import UniqueVisitorCard from 'sections/dashboard/default/UniqueVisitorCard';
import SaleReportCard from 'sections/dashboard/default/SaleReportCard';
import OrdersTable from 'sections/dashboard/default/OrdersTable';



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










// ==============================|| DASHBOARD - DEFAULT ||============================== //

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








  return (
    
    <Grid container rowSpacing={4.5} columnSpacing={2}  >
     
      <Grid sx={{ mb: -2.25 }} size={12}>
        <Typography variant="h4">Hi, Pastor Grace</Typography>
      </Grid>
      <Grid sx={{ mb: -2.25 }} size={12}>
        <Typography variant="h1">Welcome To Worsship!</Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2, }} >
        <AnalyticEcommerce title="Requests" count="15" extra="35,000" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
        <AnalyticEcommerce title="New Members" count="21" percentage={70.5} extra="8,900" Icon={<GroupIcon sx={{ width: 40, height: 40 }} />} />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
        <AnalyticEcommerce title="Donations" count="$78,250" percentage={70.5} extra="8,900" Icon={<BarChartIcon sx={{ width: 40, height: 40 }} />} />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} >
        <AnalyticEcommerce title="Sermons" count="54" percentage={70.5} extra="8,900" />
      </Grid>


      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
        <AnalyticEcommerce title="Total Events" count="18" percentage={27.4} isLoss color="warning" extra="1,943" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
        <AnalyticEcommerce title="Total Members" count="35,078" percentage={27.4} isLoss color="warning" extra="20,395" />
      </Grid>
      <Grid sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} size={{ md: 8 }} />
      {/* row 2 */}
      <Grid size={{ xs: 12, md: 7, lg: 8 }}>
        <UniqueVisitorCard />
      </Grid>
      <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            {/* <Typography variant="h5">Income Overview</Typography> */}
          </Grid>
          <Grid />
        </Grid>


        <MainCard sx={{ mt: 2, pd: 20, margin: '0px auto',  maxWidth:{xs:800, md:1150},  }}>

          <Box sx={{ pr:0, pb: 0, }}>
            <Stack sx={{ gap: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography variant="h3" color="#2C2C31">
                Quick Actions
              </Typography>
              <Typography variant="h3" color="#2B04DB">View All</Typography>
            </Stack>
          </Box>

          <Stack sx={{ gap: 2, mt: 5, mb: 10, justifyContent: 'center', alignItems: 'center' }}>




            <MainCard   onClick={() => setOpenModal(true)} contentSX={{ pl: 4.25, pt: 3, pr: 2.25 }} sx={{ background: 'linear-gradient(to  bottom, #FF6773, #FE8B6E)', width:{xs:'600px', md:'700px'}, borderRadius: '30px', height: '160px', cursor: 'pointer', boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" }}>

              <Stack style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: '0px 20px' }}>

                <Stack sx={{ gap: 0.5 }}>
                  <Typography variant="h2" color='#FFFFFF'>
                    LiveStream
                  </Typography>
                  <Grid container alignItems="center">
                    <Grid>
                      <Typography variant="h5" color='#E5E5FF'>
                        Plan your next live worsship
                      </Typography>
                    </Grid>

                  </Grid>
                </Stack>

                <Stack sx={{ color: 'white' }} >
                  <MoreHorizIcon sx={{ width: 40, height: 40, }} />

                  <Stack sx={{ gap: 0.5, color: '#2B04DB', height: 65, width: 65, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'linear-gradient(to  bottom, #F1F2FF, #F1F2FF)' }}>
                    <img src={image} sx={{ width: 40, height: 40 }} alt='worsship' />
                  </Stack>

                </Stack>

              </Stack>


            </MainCard>





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





            <MainCard contentSX={{ pl: 4.25, pt: 3, pr: 2.25 }} sx={{ background: 'linear-gradient(to  bottom, #7838F4, #2B04DB)',  width:{xs:'600px', md:'700px'}, borderRadius: '30px', height: '160px', cursor: 'pointer', boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" }}>

              <Stack style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: '0px 20px' }}>

                <Stack sx={{ gap: 0.5 }}>
                  <Typography variant="h2" color='#FFFFFF'>
                    Create Event
                  </Typography>
                  <Grid container alignItems="center">
                    <Grid>
                      <Typography variant="h5" color='#E5E5FF'>
                        Organize your next church event
                      </Typography>
                    </Grid>

                  </Grid>
                </Stack>

                <Stack sx={{ color: 'white' }} >
                  <MoreHorizIcon sx={{ width: 40, height: 40, }} />

                  <Stack sx={{ gap: 0.5, color: '#2B04DB', height: 65, width: 65, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#F1F2FF', }}>
                    <CalendarMonthIcon sx={{ width: 40, height: 40 }} />
                  </Stack>

                </Stack>

              </Stack>


            </MainCard>





            <MainCard contentSX={{ pl: 4.25, pt: 3, pr: 2.25 }} sx={{ background: 'linear-gradient(to  bottom, #CC6002, #FFB532)',  width:{xs:'600px', md:'700px'}, borderRadius: '30px', height: '160px', cursor: 'pointer', boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" }}>

              <Stack style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: '0px 20px' }}>

                <Stack sx={{ gap: 0.5 }}>
                  <Typography variant="h2" color='#FFFFFF'>
                    Message Church
                  </Typography>
                  <Grid container alignItems="center">
                    <Grid>
                      <Typography variant="h5" color='#E5E5FF'>
                        Inform your congregration
                      </Typography>
                    </Grid>

                  </Grid>
                </Stack>

                <Stack sx={{ color: 'white' }} >
                  <MoreHorizIcon sx={{ width: 40, height: 40, }} />

                  <Stack sx={{ gap: 0.5, color: '#2B04DB', height: 65, width: 65, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#F1F2FF', }}>
                    <MarkUnreadChatAltIcon sx={{ width: 40, height: 40 }} />
                  </Stack>

                </Stack>

              </Stack>


            </MainCard>








          </Stack>


          {/* 
          <MonthlyBarChart /> */}
        </MainCard>
      </Grid>
      {/* row 3 */}



      <Grid size={{ xs: 12, md: 7, lg: 8 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid />
        </Grid>
        <MainCard sx={{ mt: -10 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>



      <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          {/* <Grid>
            <Typography variant="h5">Transaction History</Typography>
          </Grid> */}
          <Grid />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>

          <Stack style={{ flexDirection: 'row', justifyContent: 'space-between', padding: "15px 20px" }}>
            <Typography variant='h3' color="black">Notification</Typography>
            <Typography variant='h4' color='#2B04DB'>View All</Typography>

          </Stack>

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
                <Stack sx={{ gap: 0.5, color: '#FE8B6E', height: 65, width: 65, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#FFF1F1', }}>
                  <QuizIcon sx={{ width: 40, height: 40 }} />
                </Stack>

              </ListItemAvatar>
              <ListItemText sx={{ ml: 2 }} primary={<Typography variant="h4" >15 New MVPs</Typography>} secondary="View MVPs" />
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
              <ListItemText sx={{ ml: 2 }} primary={<Typography variant="h4" >4 New Request</Typography>} secondary="View Request" />
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
                <Stack sx={{ gap: 0.5, color: '#5EC4B3', height: 65, width: 65, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#F2FBF9', }}>
                  <MessageIcon sx={{ width: 40, height: 40 }} />
                </Stack>

              </ListItemAvatar>
              <ListItemText sx={{ ml: 2 }} primary={<Typography variant="h4" >2 Counselling Schedule</Typography>} secondary="View Schedule" />
            </ListItem>







          </List>
        </MainCard>

        {/* <MainCard sx={{ mt: 2 }}>
          <Stack sx={{ gap: 3 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical replay within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
              Need Help?
            </Button>
          </Stack>
        </MainCard> */}
      </Grid>




      {/* row 4 */}




      <Grid size={{ xs: 12, md: 3.5, lg: 4 }}>
        <Grid container alignItems="center" justifyContent="space-between">

          <Grid />
        </Grid>

        <MainCard sx={{ mt: 2 }} content={false}>
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


          <Stack style={{ flexDirection: 'row', justifyContent: 'space-around',  alignItems: 'center' }}>





            <Stack style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}} >


              <Stack  style={{marginTop:20}}>
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
                <Typography variant='h4' sx={{ mt: 1,  }}>254</Typography>

              </Stack>





              <Stack style={{  marginTop: 90 }}>
                <Stack style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                  <FiberManualRecordIcon style={{ color: '#FFAC20' }} />
                  <Typography variant='h4'>Total</Typography>
                </Stack>
                <Typography variant='h4' sx={{ mt: 1}}>3254</Typography>

              </Stack>



            </Stack>



            <Stack >
              <img src={group} style={{ width: 250, height: 250 }} />
            </Stack>

          </Stack>





          {/* <ReportAreaChart /> */}
        </MainCard>
      </Grid>







      <Grid size={{ xs: 12, md: 3.5, lg: 4 }}>
        <Grid container alignItems="center" justifyContent="space-between">

          <Grid />
        </Grid>

        <MainCard sx={{ mt: 2 }} content={false}>
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




              <Stack style={{ flexDirection: 'row', gap: 13, marginTop: 30, alignItems: 'center',  }}>
                <img src={Rect2} style={{ width: 5, height: 60 }} />
                <Stack >

                  <Typography variant='h3'>Word Study Meeting</Typography>
                  <Typography variant='h4' sx={{ mt: 1, ml: 1, color: '#B1B8C8' }}>02:00 PM - 03:00 PM</Typography>
                </Stack>

              </Stack>






              <Stack style={{ flexDirection: 'row', gap: 13, marginTop: 35, alignItems: 'center',  }}>
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





          {/* <ReportAreaChart /> */}
        </MainCard>
      </Grid>







      <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <SaleReportCard />
      </Grid>

      {/* 
<Stack style={{flexDirection:'row', justifyContent:'center', gap:10}}>



        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid />
        </Grid>

        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid>


        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid />
        </Grid>
        
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid>

      </Stack> */}



    </Grid>
  );
}
