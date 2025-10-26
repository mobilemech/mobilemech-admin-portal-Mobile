import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Tabs,
    Tab,
    Box,
    TextField,
    Button,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    Card,
    CardContent,
    IconButton,
    Switch
} from '@mui/material';
import { Close, CloudUpload } from '@mui/icons-material';
import Polygon1 from "../Polygon1.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChurchIcon from '@mui/icons-material/Church';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const TeamMemberModal = ({ open, onClose }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [clicked, setClicked] = useState(null);
    const [clicked2, setClicked2] = useState(null);
    const [clicked3, setClicked3] = useState(null);
    const [flow, setFlow] = useState(null); // "team" or "role"

    const [formData, setFormData] = useState({
        member: {
            name: '',
            email: '',
            password: '',
            profilePicture: null,
            accessType: 'view-edit',
            accessLevel: 'low',
            permissions: {
                manageDonation: false,
                manageLivestream: false,
                manageEvent: false,
                manageCommunity: false,
                manageMerchandise: false,
                manageBibleStudy: false
            }
        },
        role: {
            roleTitle: '',
            roleLevel: '',
            description: '',
            accessType: 'view-edit',
            postingRules: 'none',
            permissions: {
                dashboardAccess: false,
                viewChurchProfile: false,
                manageSermons: false,
                manageLivestream: false,
                manageBibleStudy: false,
                manageEvents: false,
                manageEventsAndPost: false,
                moderateTestimonies: false,
                viewDonation: false,
                manageDonation: false,
                manageMerchandise: false,
                inviteTeamMembers: false,
                editRolesPermissions: false,
                accessVerificationSettings: false
            }
        }
    });

    const options = [
        {
            image: Polygon1,
            title: "Role",
            description: "Create roles for your church team members",
            id: 1,
            icon: ChurchIcon,
        },
        {
            image: Polygon1,
            title: "Members",
            description: "Set up team members to manage events, community, merchandise, livestream...",
            id: 2,
            icon: PersonIcon,
        },
    ];

    const option2 = [
        {
            image: Polygon1,
            title: "Church",
            description: "I confirm this team member represents is an official of our organization and is authorised to represent us on Worship",
            id: 1,
            icon: PersonIcon,
        },
    ];



    const option3 = [
        {
            image: Polygon1,
            title: "Church",
            description: "I confirm this I am authorized to create this role for HOTR Organisation",
            id: 1,
            icon: PersonIcon,
        },
    ];

    const handleClick = (id, type) => {
        setClicked(id);
        setFlow(type); // "team" or "role"
    };



    const handleClick3 = (id, type) => {
        setClicked3(id);
    };

    const handleClick2 = (id, type) => {
        setClicked2(id);
    };

    const handleNext = () => {
        if (activeTab === 0) setActiveTab(1);
        else if (activeTab < 3) setActiveTab(activeTab + 1);
    };

    const handleBack = () => {
        if (activeTab === 1) setActiveTab(0);
        else if (activeTab > 1) setActiveTab(activeTab - 1);
    };

    const handleNestedChange = (flowKey, field, value) => {
        setFormData(prev => ({
            ...prev,
            [flowKey]: { ...prev[flowKey], [field]: value }
        }));
    };

    const handlePermissionChange = (flowKey, permission, value) => {
        setFormData(prev => ({
            ...prev,
            [flowKey]: {
                ...prev[flowKey],
                permissions: { ...prev[flowKey].permissions, [permission]: value }
            }
        }));
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth PaperProps={{ sx: { borderRadius: 2 } }}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e0e0e0', pb: 2 }}>
                {activeTab > 0 && (
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Box display="flex" alignItems="center" gap={2}>
                            <Box sx={{ bgcolor: "#2B04DB", color: "white", p: 1.5, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <CalendarMonthIcon fontSize="medium" />
                            </Box>
                            <Box>
                                <Typography fontWeight="bold" fontSize={22}>
                                    {flow === "role" ? "Add Role" : "Add Team Members"}
                                </Typography>
                                <Typography fontSize={17} color="text.secondary">
                                    {flow === "role" ? "Create a new role for your team" : "Add a new Team member"}
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                )}
                <IconButton onClick={onClose}><Close /></IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: 0 }}>
                {/* Tabs */}
                {activeTab > 0 && (
                    <Box sx={{ px: 3, borderBottom: '1px solid #e0e0e0' }}>
                        <Tabs
                            value={activeTab}
                            onChange={(e, val) => setActiveTab(val)}
                            centered
                            TabIndicatorProps={{ style: { display: 'none' } }}
                            sx={{
                                '& .MuiTab-root': { textTransform: 'none', fontSize: 18, fontWeight: 600, color: 'grey.600' },
                                '& .Mui-selected': { color: '#4F46E5' }
                            }}
                        >
                            <Tab label="General" value={1} />
                            <Tab label="Access and Permissions" value={2} />
                            <Tab label="Confirmation" value={3} />
                        </Tabs>
                    </Box>
                )}

                <Box sx={{ p: 3 }}>
                    {/* Pre-selection */}
                    {activeTab === 0 && (
                        <Stack spacing={3} alignItems="center" sx={{ width: "100%" }}>
                            <Typography sx={{ fontSize: 23, fontWeight: 600 }}>Add New</Typography>
                            <Typography sx={{ fontSize: 17, fontWeight: 600 }}>Add New Team members and Roles</Typography>

                            {options.map(item => (
                                <Card
                                    key={item.id}
                                    onClick={() => handleClick(item.id, item.title === "Role" ? "role" : "team")}
                                    sx={{
                                        width: "80%", maxWidth: 600, border: "1px solid",
                                        borderColor: clicked === item.id ? "#2B04DB" : "grey.300",
                                        backgroundColor: clicked === item.id ? "#f4f4ff" : "white",
                                        borderRadius: 2, cursor: "pointer",
                                        boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                                        transition: "0.3s ease"
                                    }}
                                >
                                    <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                                        <Box sx={{ position: "relative" }}>
                                            <img src={item.image} alt="Polygon" style={{ width: 40, height: 40 }} />
                                            <Box sx={{ position: "absolute", top: 10, left: 10, color: "#2B04DB" }}>
                                                <item.icon style={{ width: 20, height: 20, color: "white" }} />
                                            </Box>
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>{item.title}</Typography>
                                            <Typography sx={{ color: "text.secondary", fontSize: 15 }}>{item.description}</Typography>
                                        </Box>
                                        <ArrowForwardIcon />
                                    </CardContent>
                                </Card>
                            ))}

                            <Button variant="contained" onClick={handleNext} sx={{ backgroundColor: "#4F46E5", fontWeight: 600, textTransform: "none", px: 12, py: 1.2, borderRadius: "30px", fontSize: "1rem", "&:hover": { backgroundColor: "#4338CA" } }}>Continue</Button>
                        </Stack>
                    )}

                    {/* General Tab */}
                    {activeTab === 1 && (
                        <Box sx={{ width: "100%" }}>
                            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                                {flow === "role" ? (
                                    <>
                                        <FormControl sx={{ flex: "1 1 48%", height: 60 }}>
                                            <InputLabel>Role Title</InputLabel>
                                            <Select
                                                value={formData.role.roleTitle}
                                                onChange={(e) => handleNestedChange('role', 'roleTitle', e.target.value)}
                                                sx={{ height: 60 }}
                                            >
                                                <MenuItem value="lead-pastor">Lead Pastor</MenuItem>
                                                <MenuItem value="associate-pastor">Associate Pastor</MenuItem>
                                                <MenuItem value="worship-leader">Worship Leader</MenuItem>
                                                <MenuItem value="admin">Administrator</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl sx={{ flex: "1 1 48%", height: 60 }}>
                                            <InputLabel>Role Level</InputLabel>
                                            <Select
                                                value={formData.role.roleLevel}
                                                onChange={(e) => handleNestedChange('role', 'roleLevel', e.target.value)}
                                                sx={{ height: 60 }}
                                            >
                                                <MenuItem value="low">Low</MenuItem>
                                                <MenuItem value="medium">Medium</MenuItem>
                                                <MenuItem value="high">High</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </>
                                ) : (
                                    <>
                                        <FormControl sx={{ flex: "1 1 48%", height: 60 }}>
                                            <InputLabel>Team Member</InputLabel>
                                            <Select
                                                value={formData.member.name}
                                                onChange={(e) => handleNestedChange('member', 'name', e.target.value)}
                                                sx={{ height: 60 }}
                                            >
                                                <MenuItem value="John Doe">John Doe</MenuItem>
                                                <MenuItem value="Jane Smith">Jane Smith</MenuItem>
                                                <MenuItem value="Samuel Green">Samuel Green</MenuItem>
                                                <MenuItem value="Esther Brown">Esther Brown</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </>
                                )}
                            </Box>

                            {flow === "team" && (
                                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                                    <TextField
                                        label="Email Address"
                                        type="email"
                                        value={formData.member.email}
                                        onChange={(e) => handleNestedChange('member', 'email', e.target.value)}
                                        sx={{ flex: "1 1 48%", '& .MuiInputBase-root': { height: 60 } }}
                                    />
                                    <TextField
                                        label="Password"
                                        type="password"
                                        value={formData.member.password}
                                        onChange={(e) => handleNestedChange('member', 'password', e.target.value)}
                                        sx={{ flex: "1 1 48%", '& .MuiInputBase-root': { height: 60 } }}
                                    />
                                </Box>
                            )}

                            {flow === "team" && (
                                <Box mb={4} mt={2}>
                                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                                        <CloudUpload sx={{ color: "#2B04DB" }} />
                                        <Typography fontSize={15} fontWeight="500">Profile Picture</Typography>
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        component="label"
                                        sx={{ textTransform: "none", borderRadius: "25px", px: 4, py: 1.5, fontSize: 16, borderColor: "#2B04DB", color: "#2B04DB", "&:hover": { borderColor: "#2B04DB", bgcolor: "#f5f5f5" } }}
                                    >
                                        Upload
                                        <input type="file" hidden accept="image/png, image/jpeg" onChange={(e) => handleNestedChange('member', 'profilePicture', e.target.files[0])} />
                                    </Button>
                                    <Typography variant="caption" display="block" mt={1} sx={{ fontSize: 17 }}>We only support JPEG, JPG, or PNG files. 1 mb max.</Typography>
                                </Box>
                            )}

                            {flow === "role" && (
                                <Box sx={{ mt: 3 }}>
                                    <Typography variant="h4" gutterBottom>Description</Typography>
                                    <TextField
                                        label="Describe what the role is all about"
                                        multiline
                                        rows={4}
                                        value={formData.role.description}
                                        onChange={(e) => handleNestedChange('role', 'description', e.target.value)}
                                        fullWidth
                                        sx={{ mb: 4 }}
                                    />
                                </Box>
                            )}
                        </Box>
                    )}

                    {/* Access & Permissions Tab */}
                    {activeTab === 2 && (
                        <Box>
                            <Typography variant="h4" gutterBottom>Access and Permissions</Typography>

                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                                {flow === 'team' ? (
                                    <>
                                        <FormControl sx={{ flex: '1 1 48%' }}>
                                            <InputLabel>Access type</InputLabel>
                                            <Select
                                                value={formData.member.accessType}
                                                onChange={(e) => handleNestedChange('member', 'accessType', e.target.value)}
                                                sx={{ height: 60 }}
                                            >
                                                <MenuItem value="view-only">View Only</MenuItem>
                                                <MenuItem value="view-edit">View & Edit Access</MenuItem>
                                                <MenuItem value="admin">Admin Access</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl sx={{ flex: '1 1 48%' }}>
                                            <InputLabel>Access Level</InputLabel>
                                            <Select
                                                value={formData.member.accessLevel}
                                                onChange={(e) => handleNestedChange('member', 'accessLevel', e.target.value)}
                                                sx={{ height: 60 }}
                                            >
                                                <MenuItem value="low">Low</MenuItem>
                                                <MenuItem value="medium">Medium</MenuItem>
                                                <MenuItem value="high">High</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </>
                                ) : (
                                    <>
                                        <FormControl sx={{ flex: '1 1 48%' }}>
                                            <InputLabel>Access type</InputLabel>
                                            <Select
                                                value={formData.role.accessType}
                                                onChange={(e) => handleNestedChange('role', 'accessType', e.target.value)}
                                                sx={{ height: 60 }}
                                            >
                                                <MenuItem value="view-only">View Only</MenuItem>
                                                <MenuItem value="view-edit">View & Edit Access</MenuItem>
                                                <MenuItem value="admin">Admin Access</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl sx={{ flex: '1 1 48%' }}>
                                            <InputLabel>Posting Rules</InputLabel>
                                            <Select
                                                value={formData.role.postingRules}
                                                onChange={(e) => handleNestedChange('role', 'postingRules', e.target.value)}
                                                sx={{ height: 60 }}
                                            >
                                                <MenuItem value="none">None</MenuItem>
                                                <MenuItem value="limited">Limited</MenuItem>
                                                <MenuItem value="full">Full</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </>
                                )}
                            </Box>

                            <Typography variant="h3" fontWeight="bold" mb={1}>Feature Permissions</Typography>
                            <Stack spacing={1}>
                                {(flow === 'team'
                                    ? Object.entries(formData.member.permissions)
                                    : Object.entries(formData.role.permissions)
                                ).map(([key, value]) => (
                                    <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: 20, color: 'black' }}>
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                        </Typography>
                                        <Switch
                                            checked={value}
                                            onChange={(e) => handlePermissionChange(flow === 'team' ? 'member' : 'role', key, e.target.checked)}
                                            sx={{
                                                '& .MuiSwitch-switchBase.Mui-checked': { color: '#4F46E5' },
                                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#4F46E5' },
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    )}

                    {/* Confirmation Tab */}
                    {/* Confirmation Tab */}
                    {activeTab === 3 && (
                        <Stack spacing={3}>
                            {flow === "team"
                                ? option2.map((item) => (
                                    <Card
                                        key={item.id}
                                        onClick={() => handleClick2(item.id)}
                                        sx={{
                                            border: "1px solid",
                                            borderColor: clicked2 === item.id ? "#2B04DB" : "grey.300",
                                            backgroundColor: clicked2 === item.id ? "#f4f4ff" : "white",
                                            borderRadius: 2,
                                            cursor: "pointer",
                                            boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                                            transition: "0.3s ease",
                                        }}
                                    >
                                        <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                                            <Typography sx={{ fontSize: 20, flex: 1, color: "black" }}>
                                                {item.description}
                                            </Typography>
                                            <Box sx={{ position: "relative" }}>
                                                <img src={item.image} alt="Polygon" style={{ width: 40, height: 40 }} />
                                                <Box sx={{ position: "absolute", top: 10, left: 10, color: "#2B04DB" }}>
                                                    <item.icon style={{ width: 20, height: 20, color: "white" }} />
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))
                                : option3.map((item) => (
                                    <Card
                                        key={item.id}
                                        onClick={() => handleClick3(item.id)}
                                        sx={{
                                            border: "1px solid",
                                            borderColor: clicked3 === item.id ? "#2B04DB" : "grey.300",
                                            backgroundColor: clicked3 === item.id ? "#f4f4ff" : "white",
                                            borderRadius: 2,
                                            cursor: "pointer",
                                            boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                                            transition: "0.3s ease",
                                        }}
                                    >
                                        <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                                            <Typography sx={{ fontSize: 20, flex: 1, color: "black" }}>
                                                {item.description}
                                            </Typography>
                                            <Box sx={{ position: "relative" }}>
                                                <img src={item.image} alt="Polygon" style={{ width: 40, height: 40 }} />
                                                <Box sx={{ position: "absolute", top: 10, left: 10, color: "#2B04DB" }}>
                                                    <item.icon style={{ width: 20, height: 20, color: "white" }} />
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}

                            {flow === "role" && (
                                <Button
                                    variant="contained"
                                    sx={{ mt: 2, backgroundColor: "#4F46E5", fontWeight: 600, textTransform: "none", px: 8, py: 1.5, borderRadius: "30px", "&:hover": { backgroundColor: "#4338CA" } }}
                                    onClick={() => console.log("Create Role clicked")}
                                >
                                    Create Role
                                </Button>
                            )}
                        </Stack>
                    )}


                </Box>
            </DialogContent>

            <DialogActions sx={{ p: 3, gap: 1, borderTop: '1px solid #e0e0e0' }}>
                {activeTab > 0 && (
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button variant="outlined" sx={{ borderRadius: "30px", textTransform: "none", px: 5, py: 1.5, fontSize: 16, backgroundColor: "#cfcde4ff", border: 'none', color: '#0e06a9ff' }}>Save as Draft</Button>
                        <Button variant="contained" onClick={handleNext} sx={{ backgroundColor: "#4F46E5", fontWeight: 600, textTransform: "none", px: 8, py: 1.2, borderRadius: "30px", fontSize: "1rem", "&:hover": { backgroundColor: "#4338CA" } }}>
                            {activeTab === 3 ? (flow === "role" ? "+ Add Role" : "+ Add Team Member") : "Next"}
                        </Button>
                    </Stack>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default TeamMemberModal;

