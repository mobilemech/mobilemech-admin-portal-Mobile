import PropTypes from 'prop-types';
// material-ui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

// assets
// import RiseOutlined from '@ant-design/icons/RiseOutlined';
// import FallOutlined from '@ant-design/icons/FallOutlined';



const iconSX = { fontSize: '0.75rem', color: 'inherit', marginLeft: 0, marginRight: 0 };

export default function AnalyticEcommerce({ color = 'primary',  title, Icon, count, percentage, isLoss, extra }) {
  return (





   
  <MainCard contentSX={{ pl: 2.25,pt:4 }} sx={{ background: title === 'Sermons'? 'linear-gradient(to  bottom, #7838F4, #2B04DB)' : "",          borderRadius:'30px', height:'135px', cursor:'pointer', boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.1)" }}>

<Stack style={{flexDirection:'row', alignItems:'center',  display:'flex', gap:20}}>
  {Icon ? 
      <Stack sx={{ gap: 0.5, color:title === 'Donations' ? '#2B04DB' : 'white',               height:65, width:65, alignItems:'center', justifyContent:'center', borderRadius:'50%',  background: title === 'Donations'? 'linear-gradient(to  bottom, #F1F2FF, #F1F2FF)' : 'linear-gradient(to  bottom, #7838F4, #2B04DB)',   }}>
        {Icon}
      </Stack>: ""}



         <Stack sx={{ gap: 0.5 }}>
        <Typography variant="h5" color={title === 'Sermons' ? '#E9EDF7' : 'gray'}>
          {title}
        </Typography>
        <Grid container alignItems="center">

          <Grid sx={{display:'flex', flexDirection:'row'}}>
            <Typography variant="h3" color={title === 'Sermons' ? '#FFFFFF' : 'black'}>
              {count}
            </Typography>
          </Grid>
        
        </Grid>
      </Stack>

      </Stack>
    
    </MainCard>
  );
}

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.string
};
