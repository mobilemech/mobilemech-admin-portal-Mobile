
import React from "react";
import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    Grid,
    IconButton,
    Modal,
    Typography,
    Paper,
    Stack,
    Tooltip,
    TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


  const image = 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNvbWV8ZW58MHx8MHx8fDA%3D'





export default function ComplaintDetailsModal({ open, onClose,  complaint }) {
    if (!complaint) return null;

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    width: "95%",
                    maxWidth: 1000,
                    mx: "auto",
                    my: 5,
                    bgcolor: "white",
                    borderRadius: 3,
                    p: 3,
                    maxHeight: "170vh",
                    overflowY: "auto",
                }}
            >
                {/* HEADER */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                        Complaint Details
                    </Typography>

                    <Box display="flex" alignItems="center" gap={1}>


                        {/*                         
                        <Button
                            variant="contained"

                            sx={{
                                backgroundColor: "#0ab308ff",
                                fontWeight: 600,
                                textTransform: "none",
                                px: 8,
                                py: 1.2,
                                borderRadius: "30px",
                                fontSize: "1.2rem",
                                "&:hover": { backgroundColor: "#0be407ff" },
                            }}
                        >
                            Activate
                        </Button> */}




                        <Button
                            variant="contained"

                            sx={{
                                backgroundColor: "red",
                                fontWeight: 600,
                                textTransform: "none",
                                px: 8,
                                py: 1.2,
                                borderRadius: "30px",
                                fontSize: "1.2rem",
                                "&:hover": { backgroundColor: "#e40707ff" },
                            }}
                        >
                           Delete Complaint 
                        </Button>





                        <IconButton onClick={onClose}>
                            <CloseIcon style={{ fontSize: 40 }} />
                        </IconButton>
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* USER INFO */}
                <Grid spacing={3} >

                    <Grid xs={12} md={4}>
                        <Box textAlign="center">
                            <Avatar
                                src={image}
                                sx={{ width: 140, height: 140, mx: "auto" }}
                            />
{/* 
                               <Avatar
                                src={mechanic.avatar}
                                sx={{ width: 140, height: 140, mx: "auto" }}
                            /> */}


{/* 
                               <Avatar
                                            sx={{
                                              bgcolor: "#FFEFD5",
                                              color: "#92400E",
                                              width: 140,
                                              height: 140,
                                              mx: "auto",
                                            }}
                                          >
                                            {complaint.title
                                              .split(" ")
                                              .slice(0, 2)
                                              .map((p) => p[0])
                                              .join("")}
                                          </Avatar> */}





                            <Typography variant="h3" fontWeight={700} mt={2}>
                                {complaint.issue}
                            </Typography>
                            <Typography variant="h4" color="text.secondary" sx={{mt:1}}>{complaint.jobId}</Typography>
                            {/* <Typography variant="h4" color="text.secondary">📍 Lagos, Nigeria</Typography> */}
                            {/* <Typography variant="h4" color="text.secondary">⭐ 4.8 (216 Reviews)</Typography> */}
                        </Box>
                    </Grid>



                    <Grid sx={{ mt: 2 }} >
                        <Paper sx={{ p: 2, borderRadius: 2, backgroundColor: '#FEF2EA' }}>
                            <Grid spacing={2}>

                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="h4" fontWeight={700} >Complaint Id : </Typography>
                                    <Typography variant="h5">{complaint.complaintId}</Typography>
                                </Grid>

                                
                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt:2 }}>
                                    <Typography variant="h4" fontWeight={700} >Job Id : </Typography>
                                    <Typography variant="h5" fontWeight={700}>{complaint.jobId}</Typography>
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Issue : </Typography>
                                    <Typography variant="h5" fontWeight={700}>{complaint.issue}</Typography>
                                </Grid>


                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Complaint Status : </Typography>
                                   <Chip
                                                      label={complaint.status}
                                                      sx={{
                                                        backgroundColor:
                                                          complaint.status === "Resolved" ? "#CCF2D3" : "#FFF3CD",
                                                        color:
                                                          complaint.status === "Resolved" ? "#1D7A33" : "#B38700",
                                                        fontWeight: 600,
                                                        fontSize:16
                                  
                                                      }}
                                                    />
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Mechanic Involved : </Typography>
                                    <Typography variant="h4">{complaint.mechanic}</Typography>
                                </Grid>


                                 <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Car Owner Involved : </Typography>
                                    <Typography variant="h4">{complaint.carOwner}</Typography>
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Reported  Date : </Typography>
                                    <Typography variant="h5">{complaint.date}</Typography>
                                </Grid>



                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>




 <Typography variant="h4" mt={4} fontWeight={700}>
                    Admin Notes
                </Typography>
        <Box sx={{mt:2}}> 
              
          
                           <TextField

  placeholder="Enter complaint details..."
  multiline
  minRows={4}
  maxRows={8}
  fullWidth
  variant="outlined"
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      padding: 1,
      borderColor:'#B38700'
      
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "1.2rem",
      lineHeight: 1.7,
      
    },
  }}
/>

        </Box>
    



         <Box sx={{display:'flex', justifyContent:'center', gap:5, mt:5}}>


                 <Button variant="outlined" sx={{ borderRadius: "25px", fontWeight:500, px: 10, py:1.1, fontSize:20, color:'black', borderColor:'#d46800',    "&:hover": { backgroundColor: "#f9f7f7ff", color:'#d46800', borderColor:'#d46800' }, }}>
                         Dismiss
                       </Button>




                         <Button
                                  variant="contained"
                                  sx={{ borderRadius: "25px", fontSize: 20, py: 1, px: 10, bgcolor: "#F97316", "&:hover": { bgcolor: "#ea7512" } }}
                                >
                                  Resolve
                                </Button>
         </Box>






             



            </Box>
        </Modal>
    );
}
