
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
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PolicyIcon from '@mui/icons-material/Policy';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';


import donationImg from "./images/donation.png"





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





export default function Merchandise() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );


  const [itinerary] = useState([
    { id: 1, title: "8 Pending Orders", time: " Pending Orders", duration: "30 mins", image: Rect2 },
    { id: 2, title: "12 Shippedorders", time: "shipped orders", duration: "15 mins", image: Rect1 },
    { id: 3, title: "42 fulfilled orders", time: "fulfilled orders", duration: "15 mins", image: Rect2 },

  ]);








  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const zoom = useMemo(() => {
  //   return width <= 768 ? 0.55 : 0.5;
  // }, [width]);



    const zoom = useMemo(() => {
    if (width <= 768) return 0.55;       // Mobile
    if (width <= 1200) return 0.8;      // Tablets / small laptops
    if (width <= 1600) return 0.5;     // Medium desktops
    return 0.7;                         // Large desktops
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
  const ordersFulfilled = 62;
  const bestseller = 'Faith Hoodie';
  const totalSales = '$350.20';
  const pendingOrder = 9;






  const mockRows = [
    { id: 1, name: 'Holy Shirt', order: 107, Status: 'stock in', Price: '$20' },
    { id: 2, name: 'Holy Shirt', order: 40, Status: 'stock in', Price: '$10' },
    { id: 3, name: 'Holy Shirt', order: 86, Status: 'stock out', Price: '$25' },
    { id: 4, name: 'Holy Shirt', order: 52, Status: 'stock in', Price: '$9' },
    { id: 5, name: 'Holy Shirt', order: 63, Status: 'stock in', Price: '$20' },
    { id: 6, name: 'Holy Shirt', order: 78, Status: 'stock out', Price: '$10' },
    { id: 7, name: 'Holy Shirt', order: 91, Status: 'stock out', Price: '$11' },
    { id: 8, name: 'Holy Shirt', order: 35, Status: 'stock out', Price: '$20' },
    { id: 9, name: 'Holy Shirt', order: 120, Status: 'stock out', Price: '$80' },
    { id: 10, name: 'Holy Shirt', order: 200, Status: 'stock out', Price: '$200' },
  ];

  const columns = [
    {
      field: 'avatar',
      headerName: 'Prod Id',
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Avatar
          alt={params.row.name}
          src={`https://i.pravatar.cc/150?u=${params.row.Price}`}
          sx={{ width: 42, height: 42 }}
        />
      ),
    },
    { field: 'name', headerName: 'Product Name', flex: 1, sortable: true },
    { field: 'order', headerName: 'Total Order', flex: 1.3, sortable: true },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <span style={{ color: params.value === "stock in" ? "green" : "red", fontWeight: 600 }}>
          {params.value}
        </span>
      ),
    },
    { field: 'Price', headerName: 'Price', flex: 0.9, sortable: true },
  ];







  return (
    <Box sx={{ px: 3, py: 3, width: "100%" }}>
      {/* Subtitle */}
      <Typography
        variant="h4"
        sx={{ color: "black", mb: 1.5, fontSize: 20 }}
      >
        Add, Manage and track sales of your church products
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
          Merchandize store
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
                Orders Fulfilled
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {ordersFulfilled}
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
                Best Seller
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {bestseller}
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
                Total Sales
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 24 }}>
                {totalSales}
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
                Pending Order
              </Typography>
              <Typography sx={{ fontWeight: 800, mt: 0.5, fontSize: 22 }}>
                {pendingOrder}
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
                Best Selling Product
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
                      <Typography variant='h4'>New</Typography>
                    </Stack>
                    <Typography variant='h4' sx={{ mt: 1 }}>3000</Typography>

                  </Stack>




                  <Stack style={{ marginTop: 60 }}>
                    <Stack style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                      <FiberManualRecordIcon style={{ color: '#FF6B6B' }} />
                      <Typography variant='h4'>Pending</Typography>
                    </Stack>
                    <Typography variant='h4' sx={{ mt: 1, }}>254</Typography>

                  </Stack>





                  <Stack style={{ marginTop: 90 }}>
                    <Stack style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                      <FiberManualRecordIcon style={{ color: '#FFAC20' }} />
                      <Typography variant='h4'>Delivered</Typography>
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
                  title: "Manage Product",
                  desc: "Manage all your Merchandize",
                  gradient: "linear-gradient(to bottom, #7838F4, #2B04DB)",

                  icon: image
                }, {
                  title: "Manage Orders",
                  desc: "Manage all customer orders",
                  gradient: "linear-gradient(to bottom, #FF6773, #FE8B6E)",
                  icon: <CalendarMonthIcon sx={{ width: 40, height: 40 }} />
                }, {
                  title: "Store Settings",
                  desc: "storefront customization settings",
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
                    // onClick={
                    //   card.title === "Add New" ? () => setOpenModal(true) :
                    //     card.title === "Donation Types" ? () => setOpenModal2(true) :
                    //       undefined
                    // }
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
                      color: '#FE8B6E',
                      bg: '#FFF1F1',
                      icon: <ShoppingBagIcon sx={{ width: 40, height: 40 }} />,
                      title: '15 new Orders',
                      subtitle: 'View RSVPs'
                    },
                    {
                      color: '#2B04DB',
                      bg: '#F1F2FF',
                      icon: <PolicyIcon sx={{ width: 40, height: 40 }} />,
                      title: '2 new issues',
                      subtitle: 'report order issues'
                    },
                    {
                      color: '#CC6002',
                      bg: '#FFF9EB',
                      icon: <LocalShippingIcon sx={{ width: 40, height: 40 }} />,
                      title: '4 new orders delivered',
                      subtitle: 'View order details'
                    },
                    {
                      color: '#5EC4B3',
                      bg: '#F2FBF9',
                      icon: <LocalFloristIcon sx={{ width: 40, height: 40 }} />,
                      title: '20 new items added',
                      subtitle: 'View new products'
                    },


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
              </Paper>
            </Grid>








          </Stack>
        </Box>















      </Box>
    </Box>
  );
}








































