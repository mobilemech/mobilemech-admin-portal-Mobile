import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Chip from '@mui/material/Chip';
import GoogleIcon from '@mui/icons-material/Google';
import vector from "./Vector.png"


// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

import AppleIcon from '@mui/icons-material/Apple';

// ============================|| JWT - REGISTER ||============================ //

export default function AuthRegister() {
  const navigate = useNavigate()
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);


  const  Go = ()=>{
    navigate('CreatePassword')
  }











  return (
    <>
    
          <form >
            <Grid container spacing={2.2}>
             
          
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="company-signup" style={{fontSize:10}}>Your Church Name</InputLabel>
                  <OutlinedInput
                    id="company-signup"
                    name="company"
                    placeholder="Enter your Church name"
                  />
                </Stack>
             
              </Grid>



              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="email-signup" style={{fontSize:10}}>Official Email Address</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="email-login"
                    type="email"
                    name="email"
                    placeholder="Enter your church’s email address"
                  />
                </Stack>
             
              </Grid>



                 
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="email-signup" style={{fontSize:10}}>Official Phone number</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="email-login"
                    type="email"
                    name="email"
                    placeholder="Enter your official number"
                  />
                </Stack>
             
              </Grid>



             



              <Grid size={12}>
               <Grid sx={{ mt: -1 }} size={12}>
                
                <Stack direction="row" sx={{ gap: 2, alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="#2B04DB"
                        size="small"
                      />
                    }
                    label={<Typography variant="h6" color="#2C2C31">I agree to terms & conditions</Typography>}
                  />
                  {/* <Link variant="h6" component={RouterLink} to="#" color="text.primary">
                    Forgot Password?
                  </Link> */}
                </Stack>

              </Grid>
              </Grid>
           
              <Grid size={12}>
                <AnimateButton>
                  <Button fullWidth size="large" variant="contained"  style={{backgroundColor:'#2B04DB', borderRadius:'30px'}} onClick={Go}>
                    Create Account
                  </Button>
                </AnimateButton>
                    <Stack sx={{ mt:2, alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>

                  <Typography variant='h6' color='#7D7F81' >or</Typography>
                  </Stack>  

                    <Stack style={{flexDirection:'row', marginTop:5, justifyContent:'center', alignItems:'center', gap:15}}>
                    <Button  size="small" variant="outlined"  style={{borderRadius:'30px', gap:10, fontSize:10, borderColor:'gray', color:'gray'}} >
                  <img src={vector} style={{width:15, height:15}} alt="google"/>  Continue with Google
                  </Button>

                        <Button  size="small" variant="outlined"  style={{borderRadius:'30px', gap:10, fontSize:10, borderColor:'gray', color:'gray'}} >
                          <AppleIcon  style={{width:15, height:15}}/>  Continue with Apple
                  </Button>

                    </Stack>
                
              </Grid>


             









            </Grid>
          </form>
   
    </>
  );
}
