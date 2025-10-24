
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
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    Switch,
    Checkbox,
    FormGroup,
} from "@mui/material";
import { Close, CloudUpload, Add as AddIcon, Label, } from "@mui/icons-material";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';






const tagColors = [
    { bg: "#E6E4FA", color: "#2B04DB" }, // Purple
    { bg: "#E8F5E9", color: "#2E7D32" }, // Green
    { bg: "#FFF3E0", color: "#EF6C00" }, // Orange
    { bg: "#E3F2FD", color: "#1565C0" }, // Blue
    { bg: "#FCE4EC", color: "#AD1457" }, // Pink
];

// Modal style
const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 800,
    maxHeight: 1100,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    overflow: "auto",
};

const NewStudyModal = ({ open, onClose }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [tags, setTags] = useState(['Favorite', 'Check', 'Leave']);
    const [formData, setFormData] = useState({
        title: "Faith that moves mountains",
        scripture: "Hebrews",
        category: "Faith",
        description: "",
        tags: [],
        dateTime: "",
        // RSVP & Visibility fields
        groupAudience: "All members",
        recurringOption: "Weekly",
        rsvpRequired: "RSVP Required",
        reminderNotification: "24hrs before",
        status: "Publish",
        visibility: "Open to all",
        // Resources fields
        noteToParticipants: "Please read chapter 1 before the session",
        allowComments: true,
    });
    const [newTag, setNewTag] = useState("");

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleInputChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    const handleSwitchChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.checked });
    };

    const handleAddTag = () => {
        if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
            setFormData({
                ...formData,
                tags: [...formData.tags, newTag.trim()],
            });
            setNewTag("");
        }
    };

    const handleDeleteTag = (tagToDelete) => () => {
        setFormData({
            ...formData,
            tags: formData.tags.filter((tag) => tag !== tagToDelete),
        });
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleAddTag();
        }
    };

    const handleNext = () => {
        setActiveTab(activeTab + 1);
    };

    const handleBack = () => {
        setActiveTab(activeTab - 1);
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
                                    width: 48,
                                    height: 48,
                                    borderRadius: 10,
                                    background: 'blue',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                }}
                            >
                                <CalendarMonthIcon fontSize="medium" />
                            </Box>
                            <Box>


                                <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#1a1a1a' }}>
                                    New Study Session
                                </Typography>
                                <Typography variant="h4" sx={{ color: '#666', fontSize: '1.2rem' }}>
                                    Schedule a study, invite your church, and share resource
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
                        <Tab
                            label="General"
                            sx={{
                                textTransform: 'none',
                                fontWeight: activeTab === 0 ? 600 : 400,
                                color: activeTab === 0 ? 'primary.main' : 'text.secondary',
                                     fontSize: '1.5rem', 
                            }}
                        />
                        <Tab
                            label="RSVP & Visibility"
                            sx={{
                                textTransform: 'none',
                                fontWeight: activeTab === 1 ? 600 : 400,
                                color: activeTab === 1 ? 'primary.main' : 'text.secondary',
                                     fontSize: '1.5rem', 
                            }}
                        />
                        <Tab
                            label="Resources"
                            sx={{
                                textTransform: 'none',
                                fontWeight: activeTab === 2 ? 600 : 400,
                                color: activeTab === 2 ? 'primary.main' : 'text.secondary',
                                     fontSize: '1.5rem', 
                            }}
                        />
                    </Tabs>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3 }}>
                    {activeTab === 0 && (
                        <Stack spacing={3}>
                            {/* Study Title & Scripture Reference */}
                            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                                <TextField
                                    fullWidth
                                    label="Study title"
                                    value={formData.title}
                                    onChange={handleInputChange("title")}


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
                                    label="Scripture Reference"
                                    value={formData.scripture}
                                    onChange={handleInputChange("scripture")}


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

                            {/* Category & Date Time */}
                            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                                <FormControl fullWidth>
                                    <InputLabel>Category</InputLabel>
                                    <Select
                                        value={formData.category}
                                        label="Category"
                                        onChange={handleInputChange("category")}
                                        sx={{
                                            height: 60,
                                            '& .MuiSelect-select': {
                                                paddingTop: '16px',
                                                paddingBottom: '16px',
                                            }
                                        }}
                                    >
                                        <MenuItem value="Faith">Faith</MenuItem>
                                        <MenuItem value="Grace">Grace</MenuItem>
                                        <MenuItem value="Salvation">Salvation</MenuItem>
                                        <MenuItem value="Family">Family</MenuItem>
                                        <MenuItem value="Prosperity">Prosperity</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    fullWidth
                                    label="Study Date & Time"
                                    placeholder="Select Muslim date & time"
                                    value={formData.dateTime}
                                    onChange={handleInputChange("dateTime")}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            height: 60,
                                        }
                                    }}
                                />
                            </Stack>

                            {/* Description */}
                            <TextField
                                multiline
                                rows={4}
                                label="Description"
                                placeholder="Describe what the study is about"
                                value={formData.description}
                                onChange={handleInputChange("description")}
                            />

                            {/* Tags */}

                            <Box mb={4}>
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <Label sx={{ color: "#2B04DB" }} />
                                    <Typography fontSize={15} fontWeight="500">
                                        Tags
                                    </Typography>
                                </Box>
                                <Box display="flex" flexWrap="wrap" gap={1.5}>
                                    {tags.map((tag, index) => {
                                        const color = tagColors[index % tagColors.length];
                                        return (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                onDelete={() => handleDeleteTag(tag)}
                                                sx={{
                                                    bgcolor: color.bg,
                                                    color: color.color,
                                                    fontWeight: "bold",
                                                    fontSize: 14,
                                                }}
                                            />
                                        );
                                    })}
                                    <Button size="small" variant="text" sx={{ color: "#2B04DB" }}>
                                        + Add Tags
                                    </Button>
                                </Box>
                            </Box>


                            {/* Study Session Thumbnail */}
                            <Box >

                                <Box mb={4}>
                                    <Box display="flex" alignItems="center" gap={1} mb={1} sx={{ mt: 3 }}>
                                        <CloudUpload sx={{ color: "#2B04DB" }} />
                                        <Typography fontSize={18} fontWeight="800">
                                            Stream Thumbnail
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
                                    <Typography variant="h4" display="block" mt={1}>
                                        We only support JPEG, JPG, or PNG files. 1 mb max.
                                    </Typography>
                                </Box>


                            </Box>

                            {/* Upload Study Resources */}
                            <Box>
                                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                                    Upload Study resources
                                </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{ mb: 2 }}>
                                    Drag and drop file to upload your stream
                                </Typography>
                                <Paper
                                    variant="outlined"
                                    sx={{
                                        p: 4,
                                        textAlign: "center",
                                        border: "2px dashed",
                                        borderColor: "divider",
                                        cursor: "pointer",
                                        "&:hover": {
                                            borderColor: "primary.main",
                                            bgcolor: "action.hover",
                                        },
                                    }}
                                >
                                    <CloudUpload sx={{ fontSize: 48, color: "text.secondary", mb: 2 }} />
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                                        Choose a file or drag & drop it here.
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        MP3, MP4 - Up to 2gb
                                    </Typography>





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
                                        startIcon={<CloudUpload />}
                                    >
                                        Browse File
                                    </Button>


                                </Paper>
                            </Box>

                            {/* Action Buttons */}
                            <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 2 }}>
                                <Box
                                    sx={{
                                        justifyContent: "flex-end",
                                        px: 4,
                                        py: 3,
                                        borderTop: "none",

                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: "30px",
                                            textTransform: "none",
                                            px: 5,
                                            py: 1.5,
                                            fontSize: 16,
                                            mr: 1,
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
                                        onClick={handleNext}
                                        sx={{
                                            backgroundColor: "#120aa4ff",
                                            fontWeight: 600,
                                            textTransform: "none",
                                            px: 8,
                                            py: 1.2,
                                            borderRadius: "30px",
                                            fontSize: "1rem",
                                            "&:hover": { backgroundColor: "#4338CA" },
                                        }}
                                    >
                                        Next
                                    </Button>


                                </Box>
                            </Stack>
                        </Stack>
                    )}

                    {activeTab === 1 && (
                        <Stack spacing={4}>
                            {/* Group Audience & Recurring option */}
                            <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                                <FormControl fullWidth>
                                    <InputLabel>Group Audience</InputLabel>
                                    <Select
                                        value={formData.groupAudience}
                                        label="Group Audience"
                                        onChange={handleInputChange("groupAudience")}
                                        sx={{
                                            height: 60,
                                            '& .MuiSelect-select': {
                                                paddingTop: '16px',
                                                paddingBottom: '16px',
                                            }
                                        }}
                                    >
                                        <MenuItem value="All members">All members</MenuItem>
                                        <MenuItem value="Youth Ministry">Youth Ministry</MenuItem>
                                        <MenuItem value="Men's Group">Men's Group</MenuItem>
                                        <MenuItem value="Women's Group">Women's Group</MenuItem>
                                        <MenuItem value="New Converts">New Converts</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel>Recurring option</InputLabel>
                                    <Select
                                        value={formData.recurringOption}
                                        label="Recurring option"
                                        onChange={handleInputChange("recurringOption")}
                                        sx={{
                                            height: 60,
                                            '& .MuiSelect-select': {
                                                paddingTop: '16px',
                                                paddingBottom: '16px',
                                            }
                                        }}
                                    >
                                        <MenuItem value="Weekly">Weekly</MenuItem>
                                        <MenuItem value="Bi-weekly">Bi-weekly</MenuItem>
                                        <MenuItem value="Monthly">Monthly</MenuItem>
                                        <MenuItem value="One-time">One-time</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            {/* RSVP & Reminder notification */}
                            <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                                <FormControl fullWidth>
                                    <InputLabel>RSVP</InputLabel>
                                    <Select
                                        value={formData.rsvpRequired}
                                        label="RSVP"
                                        onChange={handleInputChange("rsvpRequired")}
                                        sx={{
                                            height: 60,
                                            '& .MuiSelect-select': {
                                                paddingTop: '16px',
                                                paddingBottom: '16px',
                                            }
                                        }}
                                    >
                                        <MenuItem value="RSVP Required">RSVP Required</MenuItem>
                                        <MenuItem value="RSVP Optional">RSVP Optional</MenuItem>
                                        <MenuItem value="No RSVP">No RSVP</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel>Reminder notification</InputLabel>
                                    <Select
                                        value={formData.reminderNotification}
                                        label="Reminder notification"
                                        onChange={handleInputChange("reminderNotification")}
                                        sx={{
                                            height: 60,
                                            '& .MuiSelect-select': {
                                                paddingTop: '16px',
                                                paddingBottom: '16px',
                                            }
                                        }}
                                    >
                                        <MenuItem value="24hrs before">24hrs before</MenuItem>
                                        <MenuItem value="1 hour before">1 hour before</MenuItem>
                                        <MenuItem value="30 minutes before">30 minutes before</MenuItem>
                                        <MenuItem value="No reminder">No reminder</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            {/* Status & Visibility */}
                            <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                                <FormControl fullWidth>
                                    <InputLabel>Status</InputLabel>
                                    <Select
                                        value={formData.status}
                                        label="Status"
                                        onChange={handleInputChange("status")}
                                        sx={{
                                            height: 60,
                                            '& .MuiSelect-select': {
                                                paddingTop: '16px',
                                                paddingBottom: '16px',
                                            }
                                        }}
                                    >
                                        <MenuItem value="Publish">Publish</MenuItem>
                                        <MenuItem value="Draft">Draft</MenuItem>
                                        <MenuItem value="Private">Private</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel>Visibility</InputLabel>
                                    <Select
                                        value={formData.visibility}
                                        label="Visibility"
                                        onChange={handleInputChange("visibility")}
                                        sx={{
                                            height: 60,
                                            '& .MuiSelect-select': {
                                                paddingTop: '16px',
                                                paddingBottom: '16px',
                                            }
                                        }}
                                    >
                                        <MenuItem value="Open to all">Open to all</MenuItem>
                                        <MenuItem value="Members only">Members only</MenuItem>
                                        <MenuItem value="Invite only">Invite only</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            {/* Action Buttons */}
                            <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 2 }}>

                                <Box
                                    sx={{
                                        justifyContent: "flex-end",
                                        px: 4,
                                        py: 3,
                                        borderTop: "none",

                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: "30px",
                                            textTransform: "none",
                                            px: 5,
                                            py: 1.5,
                                            fontSize: 16,
                                            mr: 1,
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
                                        onClick={handleNext}
                                        sx={{
                                            backgroundColor: "#120aa4ff",
                                            fontWeight: 600,
                                            textTransform: "none",
                                            px: 8,
                                            py: 1.2,
                                            borderRadius: "30px",
                                            fontSize: "1rem",
                                            "&:hover": { backgroundColor: "#4338CA" },
                                        }}
                                    >
                                        Next
                                    </Button>


                                </Box>

                            </Stack>
                        </Stack>
                    )}

                    {activeTab === 2 && (
                        <Stack spacing={4}>
                            {/* Note to Participants */}
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                    Note to Participants
                                </Typography>
                                <TextField
                                    multiline
                                    rows={4}
                                    fullWidth
                                    placeholder="Please read chapter 1 before the session"
                                    value={formData.noteToParticipants}
                                    onChange={handleInputChange("noteToParticipants")}
                                />
                            </Box>

                            {/* Upload Study Resources */}
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                    Upload Study resources
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Drag and drop file to upload your stream
                                </Typography>
                                <Paper
                                    variant="outlined"
                                    sx={{
                                        p: 4,
                                        textAlign: "center",
                                        border: "2px dashed",
                                        borderColor: "divider",
                                        cursor: "pointer",
                                        "&:hover": {
                                            borderColor: "primary.main",
                                            bgcolor: "action.hover",
                                        },
                                    }}
                                >
                                    <CloudUpload sx={{ fontSize: 48, color: "text.secondary", mb: 2 }} />
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                                        Choose a file or drag & drop it here.
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        MP3, MP4 - Up to 2gb
                                    </Typography>
                                    <Button variant="outlined" startIcon={<CloudUpload />}>
                                        Browse File
                                    </Button>
                                </Paper>
                            </Box>

                            {/* Allow Comments & Discussions */}
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                    Allow Comments & Discussions
                                </Typography>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={formData.allowComments}
                                                onChange={handleSwitchChange("allowComments")}
                                                // color="primary"
                                                sx={{ color: '#1c0098ff' }}
                                            />
                                        }

                                    />
                                </FormGroup>

                            </Box>

                            {/* Action Buttons */}
                            <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 2 }}>
                                <Box
                                    sx={{
                                        justifyContent: "flex-end",
                                        px: 4,
                                        py: 3,
                                        borderTop: "none",

                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: "30px",
                                            textTransform: "none",
                                            px: 5,
                                            py: 1.5,
                                            fontSize: 16,
                                            mr: 1,
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
                                        //  onClick={onNext}
                                        sx={{
                                            backgroundColor: "#120aa4ff",
                                            fontWeight: 600,
                                            textTransform: "none",
                                            px: 8,
                                            py: 1.2,
                                            borderRadius: "30px",
                                            fontSize: "1rem",
                                            "&:hover": { backgroundColor: "#4338CA" },
                                        }}
                                    >
                                        +  Create Study
                                    </Button>


                                </Box>
                            </Stack>
                        </Stack>
                    )}
                </Box>
            </Box>
        </Modal>
    );
};

export default NewStudyModal;