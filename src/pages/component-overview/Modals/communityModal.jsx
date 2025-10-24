

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
  Switch,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,

} from "@mui/material";
import { Close, CloudUpload, Add, Label, } from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Polygon1 from "../Polygon1.png";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


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
      "I confirm this group represents an official ministry or fellowship in our church and that I am authorized to create this church on Worsship.",
    id: 1,
    icon: CheckBoxIcon,
  },
];


const NewGroupModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tags, setTags] = useState(["English", "HDTV", "Logic"]);
  const [clicked, setClicked] = useState(null);
  const [formData, setFormData] = useState({
    // General tab fields
    groupName: "Faith that moves mountains",
    groupLeader: "Pastor Kante Ajayi",
    groupCategory: "Faith",
    membershipType: "Open (Anyone can join)",
    tags: [],
    groupDescription: "",
    // Privacy and Permissions fields
    visibility: "Public",
    postingRules: "Everyone can post",
    groupPermissions: {
      allowPosts: true,
      prayerRequests: true,
      groupEvents: true,
      shareMedia: true,
    },
    // Confirmation field
    confirmation: false,
  });
  const [newTag, setNewTag] = useState("");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSwitchChange = (field) => (event) => {
    setFormData({
      ...formData,
      groupPermissions: {
        ...formData.groupPermissions,
        [field]: event.target.checked
      }
    });
  };
  const handleClick = (id) => setClicked(id);


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
            <Tab
              label="General"
              sx={{
                textTransform: 'none',
                fontWeight: activeTab === 0 ? 600 : 400,
                color: activeTab === 0 ? 'primary.main' : 'text.secondary',
                fontSize: '1.2rem',
              }}
            />
            <Tab
              label="Privacy and Permissions"
              sx={{
                textTransform: 'none',
                fontWeight: activeTab === 1 ? 600 : 400,
                color: activeTab === 1 ? 'primary.main' : 'text.secondary',
                fontSize: '1.2rem',
              }}
            />
            <Tab
              label="Confirmation"
              sx={{
                textTransform: 'none',
                fontWeight: activeTab === 2 ? 600 : 400,
                color: activeTab === 2 ? 'primary.main' : 'text.secondary',
                fontSize: '1.2rem',
              }}
            />
          </Tabs>
        </Box>

        {/* Content */}
        <Box sx={{ p: 3 }}>
          {activeTab === 0 && (
            <Stack spacing={3}>
              {/* Group Name & Assign Group Leader */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  fullWidth
                  label="Group Name"
                  value={formData.groupName}
                  onChange={handleInputChange("groupName")}
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
                  label="Assign Group Leader"
                  value={formData.groupLeader}
                  onChange={handleInputChange("groupLeader")}
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

              {/* Group Category & Membership Type */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <FormControl fullWidth>
                  <InputLabel>Group Category</InputLabel>
                  <Select
                    value={formData.groupCategory}
                    label="Group Category"
                    onChange={handleInputChange("groupCategory")}
                    sx={{
                      height: 60,
                      '& .MuiSelect-select': {
                        paddingTop: '16px',
                        paddingBottom: '16px',
                      }
                    }}
                  >
                    <MenuItem value="Faith">Faith</MenuItem>
                    <MenuItem value="Prayer">Prayer</MenuItem>
                    <MenuItem value="Worship">Worship</MenuItem>
                    <MenuItem value="Youth">Youth</MenuItem>
                    <MenuItem value="Family">Family</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Membership Type</InputLabel>
                  <Select
                    value={formData.membershipType}
                    label="Membership Type"
                    onChange={handleInputChange("membershipType")}
                    sx={{
                      height: 60,
                      '& .MuiSelect-select': {
                        paddingTop: '16px',
                        paddingBottom: '16px',
                      }
                    }}
                  >
                    <MenuItem value="Open (Anyone can join)">Open (Anyone can join)</MenuItem>
                    <MenuItem value="Closed (Approval required)">Closed (Approval required)</MenuItem>
                    <MenuItem value="Private (Invite only)">Private (Invite only)</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

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

              {/* Group Cover Photo */}
              <Box mb={4} mt={5}>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <CloudUpload sx={{ color: "#2B04DB" }} />
                  <Typography fontSize={15} fontWeight="500">
                    Group Cover Photo
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

              {/* Group Description */}
              <Box>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                  Group Description
                </Typography>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  placeholder="Describes what the group is about"
                  value={formData.groupDescription}
                  onChange={handleInputChange("groupDescription")}
                />
              </Box>

              {/* Action Buttons */}
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
                  onClick={handleNext}
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
                  + Next
                </Button>



              </Stack>
            </Stack>
          )}

          {activeTab === 1 && (
            <Stack spacing={4}>
              {/* Visibility & Posting Rules */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
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
                    <MenuItem value="Public">Public</MenuItem>
                    <MenuItem value="Private">Private</MenuItem>
                    <MenuItem value="Hidden">Hidden</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Posting Rules</InputLabel>
                  <Select
                    value={formData.postingRules}
                    label="Posting Rules"
                    onChange={handleInputChange("postingRules")}
                    sx={{
                      height: 60,
                      '& .MuiSelect-select': {
                        paddingTop: '16px',
                        paddingBottom: '16px',
                      }
                    }}
                  >
                    <MenuItem value="Everyone can post">Everyone can post</MenuItem>
                    <MenuItem value="Only leaders can post">Only leaders can post</MenuItem>
                    <MenuItem value="Approved members only">Approved members only</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* Group Permissions */}
              <Box>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                  Group Permission
                </Typography>
                <Stack spacing={2}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.groupPermissions.allowPosts}
                          onChange={handleSwitchChange("allowPosts")}
                          color="primary"
                        />
                      }
                      label="Allow posts & Discussions"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.groupPermissions.prayerRequests}
                          onChange={handleSwitchChange("prayerRequests")}
                          color="primary"
                        />
                      }
                      label="Prayer requests Board"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.groupPermissions.groupEvents}
                          onChange={handleSwitchChange("groupEvents")}
                          color="primary"
                        />
                      }
                      label="Group Event & RSVP"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.groupPermissions.shareMedia}
                          onChange={handleSwitchChange("shareMedia")}
                          color="primary"
                        />
                      }
                      label="Share Media/Resources"
                    />
                  </FormGroup>
                </Stack>
              </Box>

              {/* Action Buttons */}
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
                  onClick={handleNext}
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
                  + Next
                </Button>
              </Stack>
            </Stack>
          )}

          {activeTab === 2 && (
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

              {/* Action Buttons */}
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
                  +  Create Group
                </Button>


              </Stack>
            </Stack>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default NewGroupModal;