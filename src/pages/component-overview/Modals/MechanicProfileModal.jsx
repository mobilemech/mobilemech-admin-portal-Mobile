
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
    Tooltip
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  Visibility,

} from "@mui/icons-material";







export default function MechanicProfileModal({ open, onClose, mechanic }) {
    if (!mechanic) return null;

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
                        Profile
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
                            Disable user
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
                                src={mechanic.avatar}
                                sx={{ width: 140, height: 140, mx: "auto" }}
                            />
                            <Typography variant="h3" fontWeight={700} mt={2}>
                                {mechanic.name}
                            </Typography>
                            <Typography variant="h4" color="text.secondary">{mechanic.email}</Typography>
                            <Typography variant="h4" color="text.secondary">📍 Lagos, Nigeria</Typography>
                            <Typography variant="h4" color="text.secondary">⭐ 4.8 (216 Reviews)</Typography>
                        </Box>
                    </Grid>



                    <Grid sx={{ mt: 2 }} >
                        <Paper sx={{ p: 2, borderRadius: 2, backgroundColor: '#FEF2EA' }}>
                            <Grid spacing={2}>

                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="h4" fontWeight={700} >User ID : </Typography>
                                    <Typography variant="h5">MCH-{mechanic.id}</Typography>
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Phone Number : </Typography>
                                    <Typography variant="h5">{mechanic.phone}</Typography>
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Verification Status : </Typography>
                                    <Chip
                                        label="Verified"
                                        color="success"
                                        size="large"

                                        sx={{ mt: 1, fontSize: 17 }}
                                    />
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Status : </Typography>
                                    <Chip
                                        label={mechanic.status}
                                        size="large"
                                        color={mechanic.status === "Active" ? "success" : "default"}
                                        sx={{ mt: 1, fontSize: 17 }}
                                    />
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Role : </Typography>
                                    <Typography variant="h4">Mechanic</Typography>
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Registered Date : </Typography>
                                    <Typography variant="h5">Feb 14, 2024</Typography>
                                </Grid>



                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                                    <Typography variant="h4" fontWeight={700}>Specialization : </Typography>
                                    <Typography variant="h4">Engine Repair, Break System, General Servicing</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>










                {/* JOB HISTORY */}
                <Typography variant="h3" mt={4} fontWeight={700}>
                    Job History
                </Typography>
                <Paper sx={{ mt: 2, p: 2, borderRadius: 2 }}>

                 {/* HEADER ROW */}
<Box
  display="flex"
  justifyContent="space-between"
  py={1.5}
  sx={{ fontWeight: 700, color: "#555" }}
>
  <Typography variant="h4" sx={{ width: "15%" }}>JOB ID</Typography>
  <Typography variant="h4" sx={{ width: "20%" }}>Client Name</Typography>
  <Typography variant="h4" sx={{ width: "20%" }}>Car Type</Typography>
  <Typography variant="h4" sx={{ width: "20%" }}>Date</Typography>
  <Typography variant="h4" sx={{ width: "10%", textAlign: "center" }}>Action</Typography>
  <Typography variant="h4" sx={{ width: "15%", textAlign: "center" }}>Status</Typography>
</Box>

<Divider />

{/* JOB ROWS */}
{[1, 2, 3, 4].map((job) => (
  <Box
    key={job}
    display="flex"
    alignItems="center"
    py={1.5}
    borderBottom="1px solid #eee"
  >
    <Typography variant="h5" sx={{ width: "15%" }}>JOB-00{job}</Typography>
    <Typography variant="h5" sx={{ width: "20%" }}>Tolu Martins</Typography>
    <Typography variant="h5" sx={{ width: "20%" }}>Toyota Corolla</Typography>
    <Typography variant="h5" sx={{ width: "20%" }}>May 10, 2025</Typography>

    <Box sx={{ width: "10%", display: "flex", justifyContent: "center" }}>
      <Tooltip title="View">
        <IconButton size="small">
          <Visibility fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>

    <Box sx={{ width: "15%", display: "flex", justifyContent: "center" }}>
      <Chip
        label={job % 2 === 0 ? "Completed" : "In Progress"}
        color={job % 2 === 0 ? "success" : "warning"}
        size="large"
      />
    </Box>
  </Box>
))}


                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                        <Box
                            sx={{
                                justifyContent: "flex-end",
                                px: 4,
                                py: 3,
                                borderTop: "none",

                            }}
                        >

                            <Button
                                variant="contained"
                                //  onClick={() => setTab(1)}
                                sx={{
                                    backgroundColor: "#F17A28",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    px: 8,
                                    py: 1.2,
                                    borderRadius: "30px",
                                    fontSize: "1.2rem",
                                    "&:hover": { backgroundColor: "#f09151ff" },
                                }}
                            >
                                View All
                            </Button>


                        </Box>
                    </Stack>

                </Paper>




            </Box>
        </Modal>
    );
}
