import background from './images/background.png';
import logo from "./images/logo1.png"
import { useNavigate } from 'react-router-dom';

// SelectPlatform.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Stack,
   Button,
} from '@mui/material';
import ChurchIcon from '@mui/icons-material/Church';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const cardOptions = [
  {
    title: 'Church',
    description:
      'Set up your account to manage events, community, and giving - all in one place',
    icon: <ChurchIcon />,
    key: 'church',
    icon2: <ArrowForwardIcon />
  },
  {
    title: 'Christian Producer',
    description: 'For creators sharing faith-based content through podcasts.',
    icon: <PersonOutlineIcon />,
    key: 'producer',
    icon2: <ArrowForwardIcon />
  },
  {
    title: 'Christian Interdenominational group',
    description:
      'Great for Christian fellowships, ministries, or cross-church initiatives.',
    icon: <GroupsIcon />,
    key: 'group',
    icon2: <ArrowForwardIcon />
  },
];

const OnBoard = () => {
  const [selectedKey, setSelectedKey] = useState('');
  const navigate = useNavigate();





  const Go = (key) => {
    setSelectedKey(key);
    // setTimeout(() => {
    //   navigate("/Authentication");
    // }, 1000);
  };
















  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {/* Left Panel */}
      <Box
        sx={{
          flex: 1, // take available space
          position: 'relative',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 4,
          py: 5,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(14, 0, 85, 0.6)',
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              mb: 2,
            }}
          >
            <img src={logo} alt="Logo" height={24} /> Worsship
          </Typography>

          <Box sx={{ mt: 'auto' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>
              Welcome to Worsship
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#fff' }}>
              Discover . Connect . Worship
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          flex: 1, // take remaining space
          p: { xs: 3, md: 5 },
          backgroundColor: '#fff',
          display: 'flex',
         // justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Inner container */}
        <Box
          sx={{
            width: '100%',
            maxWidth:{xs:360, md:450}, 
            mx: 'auto',
           // textAlign: 'center',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', mb: 1 }}>
            Join The Worsship Family!
          </Typography>
          <Typography sx={{ color: '#666', mb: 3, fontSize: 15,  maxWidth:{xs:310, md:450}, }}>
            Let’s get started by telling us which kind of faith platform you’re setting up.
          </Typography>

          {/* Option Boxes */}
          <Stack spacing={2} >
            {cardOptions.map((card) => {
              const isSelected = selectedKey === card.key;
              return (
                <Box
                  key={card.key}
                  onClick={() => Go(card.key)}
                  sx={{
                    width: '100%',
                    maxWidth:{xs:320, md:450},
                    borderRadius: 3,
                    border: isSelected ? '2px solid #5B2EFF' : '1px solid #E0E0E0',
                    cursor: 'pointer',
                    transition: '0.2s',
                    '&:hover': { boxShadow: 3 },
                    backgroundColor: isSelected ? '#F6F1FF' : 'white',
                    px: 3,
                    py: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    justifyContent:'center'
                
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: isSelected ? '#5B2EFF' : '#F3F3F3',
                      color: isSelected ? '#fff' : '#333',
                    }}
                  >
                    {card.icon}
                  </Avatar>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '0.6rem' }}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.6rem', color: '#92939E' }}>
                        {card.description}
                      </Typography>
                    </Box>

                    <Avatar
                      sx={{
                        bgcolor: isSelected ? '#F6F1FF' : 'white',
                        color: isSelected ? '#5B2EFF' : '#333',
                      }}
                    >
                      {card.icon2}
                    </Avatar>
                  </Box>
                </Box>
              );
            })}



        {selectedKey && 
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>

      
  <Button
    onClick={() => navigate("/Authentication")}
    sx={{
      bgcolor: "#2B04DB",
      color: "#fff",
      textTransform: "none",
      py: 1,
      mt: 1,
      borderRadius: 30,
      fontWeight: "bold",
      fontSize: 14,
      px: 5, 
      maxWidth: { xs: "200px", sm: "250px" }, 
      width: "100%",
      "&:hover": { bgcolor: "#4a25d6", color: "white" },
    }}
  >
    Proceed <ArrowForwardIcon style={{ marginLeft: "12px", fontSize: 20 }} />
  </Button>
      </Box>
  }




          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default OnBoard;
