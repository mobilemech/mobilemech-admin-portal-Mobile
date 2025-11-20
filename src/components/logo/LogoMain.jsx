// material-ui
import image from "./mm.png";
import Box from '@mui/material/Box';

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain() {
  return (
    <Box
      sx={{
        width: '100%',      
        mt: 8,              
        display: 'flex',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start'      
      }}
    >
      <img src={image} alt="logo" style={{ display: 'block' }} />
    </Box>
  );
}
