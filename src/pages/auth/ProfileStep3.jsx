import React, { useState, useRef } from "react";
import {
    Box,
    Typography,
    Button,
    TextField,
    Stack,


} from "@mui/material";
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import background from "./images/plainbg.png";
import logo from "./images/logo1.png";

import Base1 from "./images/Base5.png"
import Base2 from "./images/Base7.png"
import Base3 from "./images/Base8.png"
import Base4 from "./images/Base4.png"


import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";






const ProfileStep3 = () => {

    const navigate = useNavigate()
    const fileInputRef = useRef(null);
    const fileInputRef2 = useRef(null);
    const fileInputRef3 = useRef(null);
    const [fileName, setFileName] = useState('');
    const [fileName2, setFileName2] = useState('');
    const [fileName3, setFileName3] = useState('');

    const [Id, setID] = useState('');






    const handleChangeID = (event) => {
        setID(event.target.value);
    };





    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            // You can also handle the file upload logic here
            console.log('Selected file:', file);
        } else {
            setFileName('');
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Trigger click on hidden file input
    };





    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName2(file.name);
            // You can also handle the file upload logic here
            console.log('Selected file:', file);
        } else {
            setFileName2('');
        }
    };

    const handleButtonClick2 = () => {
        fileInputRef2.current.click(); // Trigger click on hidden file input
    };







    const handleFileChange3 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName3(file.name);
            // You can also handle the file upload logic here
            console.log('Selected file:', file);
        } else {
            setFileName3('');
        }
    };

    const handleButtonClick3 = () => {
        fileInputRef3.current.click(); // Trigger click on hidden file input
    };




    const Next = () => {
    navigate('/Authentication/ProfileStep4')
    }

























    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* Left Panel */}
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    p: { xs: 3, md: 5 },
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Logo */}
                <Box sx={{ zIndex: 1 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontSize: { xs: "14px", md: "18px" },
                        }}
                    >
                        <img src={logo} alt="logo" height={24} /> Worsship
                    </Typography>
                </Box>

                {/* Tagline */}
                <Box sx={{ mt: { xs: 3, md: 10 }, zIndex: 1 }}>
                    <Typography
                        sx={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: { xs: 12, sm: 14, md: 16 },
                        }}
                    >
                        Hi! House of the Rock Lagos Nigeria
                    </Typography>
                    <Typography
                        sx={{
                            color: "#fff",
                            mt: 1,
                            fontSize: { xs: 10, sm: 12, md: 13 },
                        }}
                    >
                        Join the conversation, and grow in faith.
                    </Typography>
                </Box>

                {/* Stacked Images */}
                <Stack
                    spacing={2}
                    sx={{
                        mt: { xs: 4, md: 8 },
                        alignItems: { xs: "center", md: "flex-start" },
                    }}
                >
                    <img src={Base1} alt="" style={{ maxWidth: "70%", height: "auto" }} />
                    <img src={Base2} alt="" style={{ maxWidth: "70%", height: "auto" }} />
                    <img src={Base3} alt="" style={{ maxWidth: "70%", height: "auto" }} />
                    <img src={Base4} alt="" style={{ maxWidth: "70%", height: "auto" }} />
                </Stack>
            </Box>

            {/* Right Panel */}
            <Box
                sx={{
                  //  width: { xs: "100%", md: "50%" },
                             width: { xs: "96%", md: "50%" },
                           p: { xs: 3, md: 6 },
                           display: "flex",
                           flex:1,
                           flexDirection: "column",
                           justifyContent: "center",
                         //  backgroundColor: "#fff",
                         alignItems:'center'
                }}
            >
                <Box sx={{ maxWidth: 400, mx: "auto", width: "100%" }}>

                    <Typography sx={{ position: 'absolute', right: 20, top: 10, color: { sm: 'white', xs: 'white', md: 'black' } }}>3 of 4</Typography>


                    {/* Title */}
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            mb: 1,
                            textAlign: "center",
                            fontSize: 17,
                            color: "#111",
                        }}
                    >
                        Upload Verification Documents
                    </Typography>

                    <Typography
                        sx={{
                            color: "#666",
                            fontSize: 12,
                            textAlign: "center",
                            mb: 3,
                            lineHeight: 1.5,
                        }}
                    >
                        These help speed up verification and add credibility to your church’s profile. Don’t worry — you can skip and add them later.
                    </Typography>


                    {/* Form Fields */}
                    <Stack spacing={1}>


                        <form >
                            <Grid container spacing={2}>


                                <Grid size={12} sx={{ mt: 1 }}>
                                    <Stack sx={{ gap: 1 }}>
                                        <InputLabel htmlFor="reg-cert" sx={{ fontSize: 10 }}>
                                            Organization Registration Certificate
                                        </InputLabel>

                                        <TextField
                                            id="reg-cert"
                                            placeholder="Upload Registration Certificate"
                                            variant="outlined"
                                            fullWidth
                                            value={fileName}
                                            InputProps={{
                                                readOnly: true,
                                                sx: {
                                                    height: 35,
                                                    fontSize: "12px",
                                                    backgroundColor: "#F9FAFB",
                                                    borderRadius: "10px",
                                                    "& input::placeholder": {
                                                        fontSize: "10px",
                                                        color: "#9e9e9e",
                                                        opacity: 1,
                                                    },
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "#E0E0E0",
                                                    },
                                                },
                                                endAdornment: (
                                                    <>
                                                        <input
                                                            type="file"
                                                            ref={fileInputRef}
                                                            onChange={handleFileChange}
                                                            style={{ display: "none" }}
                                                        />
                                                        <Button
                                                            component="span"
                                                            onClick={handleButtonClick}
                                                            sx={{
                                                                color: "#2B04DB",
                                                                backgroundColor: "#F1F2FF",
                                                                fontSize: "10px",
                                                                borderRadius: "3px",
                                                                // px: 1,
                                                                mr: -1.5,
                                                                textTransform: "none",
                                                                height: "34px",
                                                            }}
                                                        >
                                                            Upload
                                                        </Button>
                                                    </>
                                                ),
                                            }}
                                        />
                                    </Stack>
                                </Grid>














                                <Grid size={12} sx={{ mt: 1 }}>
                                    <Stack sx={{ gap: 1 }}>
                                        <InputLabel htmlFor="reg-cert" sx={{ fontSize: 10 }}>
                                            Official Logo
                                        </InputLabel>

                                        <TextField
                                            id="reg-cert"
                                            placeholder="Upload Logo"
                                            variant="outlined"
                                            fullWidth
                                            value={fileName2}
                                            InputProps={{
                                                readOnly: true,
                                                sx: {
                                                    height: 35,
                                                    fontSize: "12px",
                                                    backgroundColor: "#F9FAFB",
                                                    borderRadius: "10px",
                                                    "& input::placeholder": {
                                                        fontSize: "10px",
                                                        color: "#9e9e9e",
                                                        opacity: 1,
                                                    },
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "#E0E0E0",
                                                    },
                                                },
                                                endAdornment: (
                                                    <>
                                                        <input
                                                            type="file"
                                                            ref={fileInputRef2}
                                                            onChange={handleFileChange2}
                                                            style={{ display: "none" }}
                                                        />
                                                        <Button
                                                            component="span"
                                                            onClick={handleButtonClick2}
                                                            sx={{
                                                                color: "#2B04DB",
                                                                backgroundColor: "#F1F2FF",
                                                                fontSize: "10px",
                                                                borderRadius: "3px",
                                                                // px: 1,
                                                                mr: -1.5,
                                                                textTransform: "none",
                                                                height: "34px",
                                                            }}
                                                        >
                                                            Upload
                                                        </Button>
                                                    </>
                                                ),
                                            }}
                                        />
                                    </Stack>
                                </Grid>





                                <Grid size={12}>
                                    <InputLabel htmlFor="company-signup" style={{ fontSize: 10 }}>Primary Contact Identification type</InputLabel>
                                    <FormControl
                                        fullWidth

                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "5px",
                                                background: "#F9FAFB",
                                                height: "37px",
                                            },
                                        }}

                                    >

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={Id}
                                            label="Id"
                                            onChange={handleChangeID}
                                        >
                                            <MenuItem value={10}>option1</MenuItem>
                                            <MenuItem value={20}>option2</MenuItem>
                                            <MenuItem value={30}>option3</MenuItem>
                                            <MenuItem value={30}>option4</MenuItem>
                                            <MenuItem value={30}>option5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>















                                <Grid size={12}>
                                    <Stack sx={{ gap: 1 }}>
                                        <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}> Identification Number</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            name="email"
                                            placeholder="Enter Identification number"
                                            sx={{
                                                height: 35,

                                                "& input::placeholder": {
                                                    color: "#9e9e9e",
                                                    fontSize: "10px",
                                                    fontWeight: 400,
                                                    opacity: 1,
                                                },

                                                borderRadius: "10px",
                                                backgroundColor: "#F9FAFB",
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#E0E0E0",
                                                },



                                            }}
                                        />
                                    </Stack>

                                </Grid>



                                <Grid size={12} sx={{ mt: 1 }}>
                                    <Stack sx={{ gap: 1 }}>
                                        <InputLabel htmlFor="reg-cert" sx={{ fontSize: 10 }}>
                                            Primary Contact ID
                                        </InputLabel>

                                        <TextField
                                            id="reg-cert"
                                            placeholder="Upload Identification"
                                            variant="outlined"
                                            fullWidth
                                            value={fileName3}
                                            InputProps={{
                                                readOnly: true,
                                                sx: {
                                                    height: 35,
                                                    fontSize: "12px",
                                                    backgroundColor: "#F9FAFB",
                                                    borderRadius: "10px",
                                                    "& input::placeholder": {
                                                        fontSize: "10px",
                                                        color: "#9e9e9e",
                                                        opacity: 1,
                                                    },
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "#E0E0E0",
                                                    },
                                                },
                                                endAdornment: (
                                                    <>
                                                        <input
                                                            type="file"
                                                            ref={fileInputRef3}
                                                            onChange={handleFileChange3}
                                                            style={{ display: "none" }}
                                                        />
                                                        <Button
                                                            component="span"
                                                            onClick={handleButtonClick3}
                                                            sx={{
                                                                color: "#2B04DB",
                                                                backgroundColor: "#F1F2FF",
                                                                fontSize: "10px",
                                                                borderRadius: "3px",
                                                                // px: 1,
                                                                mr: -1.5,
                                                                textTransform: "none",
                                                                height: "34px",
                                                            }}
                                                        >
                                                            Upload
                                                        </Button>
                                                    </>
                                                ),
                                            }}
                                        />
                                    </Stack>
                                </Grid>




























                                <Stack style={{ flexDirection: 'row', margin: '0px auto', gap: 20, marginTop: 5 }}>


                                    <Grid size={12}>

                                        <Button size="large" variant="contained" style={{ backgroundColor: '#E5E5FF', color: '#2B04DB', whiteSpace: 'nowrap', width: 150, fontSize: 7, borderRadius: '30px' }}>
                                            Save and Resume Later
                                        </Button>

                                    </Grid>


                                    <Grid size={12}>

                                        <Button size="large" variant="contained" style={{ backgroundColor: '#2B04DB', fontSize: 7, borderRadius: '30px' }} onClick={Next}>
                                            Submit for Verification
                                        </Button>

                                    </Grid>

                                </Stack>















                            </Grid>
                        </form>





                    </Stack>

                </Box>
            </Box>
        </Box>
    );
};

export default ProfileStep3;
