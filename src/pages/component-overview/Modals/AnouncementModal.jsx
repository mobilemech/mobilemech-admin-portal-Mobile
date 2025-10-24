import React, { useState } from "react";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Tabs,
    Tab,
    Paper,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Card,
    CardContent,
} from "@mui/material";
import { Close, CloudUpload } from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Polygon1 from "../Polygon1.png";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

// Modal style
const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 800,
    maxHeight: 950,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    overflow: "auto",
};





const options = [
    {
        image: Polygon1,
        title: "Church",
        description:
            "I confirm thisannouncement represents an official church communication and that I am authorized to create this announcement on Worsship.",
        id: 1,
        icon: CheckBoxIcon,
    },
];








const AnnouncementModal = ({ open, onClose }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [clicked, setClicked] = useState(null);
    const [formData, setFormData] = useState({
        // General tab
        announcementTitle: "Faith that moves mountains",
        entitledCommunity: "Entire Church Community",
        announcementCategory: "Event",
        dateTime: "",
        announcementDetails: "",
        pinToTop: "yes",
        visibilityDuration: "7 days",
        // Confirmation tab
        confirmation: false,
    });

    const handleClick = (id) => setClicked(id);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleInputChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    const handleCheckboxChange = (event) => {
        setFormData({ ...formData, confirmation: event.target.checked });
    };

    const handleNext = () => {
        setActiveTab(activeTab + 1);
    };

    const handleBack = () => {
        setActiveTab(activeTab - 1);
    };

    const tabs = ["General", "Confirmation"];

    const renderContent = () => {
        switch (activeTab) {
            case 0: // General Tab
                return (
                    <Stack spacing={4}>
                        {/* Announcement Title & Entitled Community */}
                        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                            <TextField
                                fullWidth
                                label="Announcement Title"
                                value={formData.announcementTitle}
                                onChange={handleInputChange("announcementTitle")}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        // backgroundColor: '#f8f9fa',
                                        height: '60px',
                                        py: 2,
                                    },
                                }}

                            />
                            <TextField
                                fullWidth
                                label="Entitled Church Community"
                                value={formData.entitledCommunity}
                                onChange={handleInputChange("entitledCommunity")}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        // backgroundColor: '#f8f9fa',
                                        height: '60px',
                                        py: 2,
                                    },
                                }}


                            />
                        </Stack>

                        {/* Announcement Category & Date Time */}
                        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                            <FormControl fullWidth>
                                <InputLabel>Announcement Category</InputLabel>
                                <Select
                                    value={formData.announcementCategory}
                                    label="Announcement Category"
                                    onChange={handleInputChange("announcementCategory")}
                                    sx={{
                                        height: 60,
                                        '& .MuiSelect-select': {
                                            paddingTop: '16px',
                                            paddingBottom: '16px',
                                        }
                                    }}
                                >
                                    <MenuItem value="Event">Event</MenuItem>
                                    <MenuItem value="News">News</MenuItem>
                                    <MenuItem value="Update">Update</MenuItem>
                                    <MenuItem value="Urgent">Urgent</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                fullWidth
                                label="Select Dublin date & time"
                                value={formData.dateTime}
                                onChange={handleInputChange("dateTime")}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: 60,
                                    }
                                }}
                            />
                        </Stack>

                        {/* Announcement Details */}
                        <Box>
                            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, fontSize: "1.1rem" }}>
                                Announcement Details
                            </Typography>
                            <TextField
                                multiline
                                rows={4}
                                fullWidth
                                placeholder="Describe what the Event is about"
                                value={formData.announcementDetails}
                                onChange={handleInputChange("announcementDetails")}
                            />
                        </Box>

                        {/* Attach Media */}



                        {/* Group Cover Photo */}
                        <Box mb={4} mt={5}>
                            <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <CloudUpload sx={{ color: "#2B04DB" }} />
                                <Typography fontSize={15} fontWeight="500">
                                    Attach Media
                                </Typography>
                            </Box>
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{
                                    textTransform: "none",
                                    borderRadius: "25px",
                                    px: 4,
                                    py: 1.5,
                                    fontSize: 16,
                                    borderColor: "#2B04DB",
                                    color: "#2B04DB",
                                    "&:hover": { borderColor: "#2B04DB", bgcolor: "#f5f5f5" },
                                }}
                                startIcon={<CloudUpload />}
                            >
                                Upload
                                <input type="file" hidden accept="image/png, image/jpeg" />
                            </Button>
                            <Typography variant="caption" display="block" mt={1} sx={{ fontSize: 17 }}>
                                We only support JPEG, JPG, or PNG files. 1 mb max.
                            </Typography>
                        </Box>











                        {/* Pin to Top & Visibility Duration */}
                        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                            <FormControl fullWidth>
                                <InputLabel>Pin to Top</InputLabel>
                                <Select
                                    value={formData.pinToTop}
                                    label="Pin to Top"
                                    onChange={handleInputChange("pinToTop")}
                                    sx={{
                                        height: 60,
                                        '& .MuiSelect-select': {
                                            paddingTop: '16px',
                                            paddingBottom: '16px',
                                        }
                                    }}
                                >
                                    <MenuItem value="yes">Yes (Pin to community feed)</MenuItem>
                                    <MenuItem value="no">No</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Visibility Duration</InputLabel>
                                <Select
                                    value={formData.visibilityDuration}
                                    label="Visibility Duration"
                                    onChange={handleInputChange("visibilityDuration")}
                                    sx={{
                                        height: 60,
                                        '& .MuiSelect-select': {
                                            paddingTop: '16px',
                                            paddingBottom: '16px',
                                        }
                                    }}
                                >
                                    <MenuItem value="7 days">7 days</MenuItem>
                                    <MenuItem value="14 days">14 days</MenuItem>
                                    <MenuItem value="30 days">30 days</MenuItem>
                                    <MenuItem value="Permanent">Permanent</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                );

            case 1: // Confirmation Tab
                return (
                    <Stack spacing={4}>
                        {/* Confirmation Text */}



                        <Box>
                            <Stack spacing={3}>
                                {options.map((item) => (
                                    <Card
                                        key={item.id}
                                        onClick={() => handleClick(item.id)}
                                        sx={{
                                            border: "1px solid",
                                            borderColor: clicked === item.id ? "#2B04DB" : "grey.300",
                                            backgroundColor: clicked === item.id ? "#f4f4ff" : "white",
                                            borderRadius: 2,
                                            cursor: "pointer",
                                            boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                                            transition: "0.3s ease",
                                        }}
                                    >
                                        <CardContent
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                gap: 2,
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <Typography sx={{ fontSize: 20, flex: 1, color: "black" }}>
                                                {item.description}
                                            </Typography>

                                            <Box sx={{ position: "relative" }}>
                                                <img
                                                    src={item.image}
                                                    alt="Polygon"
                                                    style={{ width: 40, height: 40 }}
                                                />
                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        top: 10,
                                                        left: 10,
                                                        color: "#2B04DB",
                                                    }}
                                                >
                                                    <item.icon
                                                        style={{
                                                            width: 20,
                                                            height: 20,
                                                            color: item.title === "Church" ? "white" : "#2B04DB",
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}


                            </Stack>
                        </Box>

                    </Stack>
                );

            default:
                return null;
        }
    };

    const renderActionButtons = () => {
        const isLastTab = activeTab === tabs.length - 1;

        return (
            <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 2 }}>
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: "30px",
                        textTransform: "none",
                        px: 5,
                        py: 1.5,
                        fontSize: 16,
                        backgroundColor: "#9088eeff",
                        border: 'none',
                        color: "white",
                        "&:hover": { backgroundColor: "#9d95f0ff", color: 'white' },
                    }}
                >
                    Save as Draft
                </Button>



                <Button
                    variant="contained"
                    onClick={isLastTab ? onClose : handleNext}

                    sx={{
                        backgroundColor: "#4F46E5",
                        fontWeight: 600,
                        textTransform: "none",
                        px: 8,
                        py: 1.2,
                        borderRadius: "30px",
                        fontSize: "1rem",
                        "&:hover": { backgroundColor: "#4338CA" },

                    }}
                >
                    {isLastTab ? "+ Create Announcement" : "Continue"}
                </Button>









            </Stack>
        );
    };














    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                {/* Header */}
                <Box sx={{ p: 3, borderBottom: 1, borderColor: "divider" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Box display="flex" alignItems="center" gap={2}>
                            <Box
                                sx={{
                                    bgcolor: "#2B04DB",
                                    color: "white",
                                    p: 1.5,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <CalendarMonthIcon fontSize="medium" />
                            </Box>
                            <Box>
                                <Typography fontWeight="bold" fontSize={22}>
                                    New Group
                                </Typography>
                                <Typography fontSize={17} color="text.secondary">
                                    Create A New Group
                                </Typography>
                            </Box>
                        </Box>
                        <IconButton onClick={onClose} size="small">
                            <Close />
                        </IconButton>
                    </Stack>
                </Box>

                {/* Tabs */}
                <Box sx={{ borderBottom: 1, borderColor: "divider", px: 3 }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'none',
                            },
                        }}
                    >
                        {tabs.map((tab, index) => (
                            <Tab
                                key={index}
                                label={tab}
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: activeTab === index ? 600 : 400,
                                    color: activeTab === index ? 'primary.main' : 'text.secondary',
                                    fontSize: '1.1rem',
                                }}
                            />
                        ))}
                    </Tabs>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3 }}>
                    {renderContent()}
                    {renderActionButtons()}
                </Box>
            </Box>
        </Modal>
    );
};

// Simple Announcement Card that triggers the modal
const AnnouncementCard = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Card
            sx={{
                cursor: 'pointer',
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                '&:hover': {
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                }
            }}
            onClick={() => setModalOpen(true)}
        >
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Create New Announcement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Click to create a new church announcement
                </Typography>
            </CardContent>

            <AnnouncementModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </Card>
    );
};

export { AnnouncementModal, AnnouncementCard };