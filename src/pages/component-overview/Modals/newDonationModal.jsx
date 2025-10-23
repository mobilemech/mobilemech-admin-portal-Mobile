

import React, { useState, useRef } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    Typography,
    TextField,
    IconButton,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    Chip,
    Stack,
    Avatar,
    Divider,
    InputAdornment,
    Card,
    CardContent,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import {
    PhotoCamera as PhotoCameraIcon,
    Add as AddIcon,
    MoreVert as MoreVertIcon,
    Check as CheckIcon,
    Favorite as FavoriteIcon,
    Star as StarIcon,
    AccountBalance as AccountBalanceIcon,
    CreditCard as CreditCardIcon,
    Close,
} from '@mui/icons-material';

import debitCard from "../debitCard.png"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const PRIMARY_COLOR = '#2B04DB';
const PRIMARY_GRADIENT = 'linear-gradient(135deg, #7838F4 0%, #2B04DB 100%)';


export default function NewDonation({ open = false, onClose = () => { } }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    // Form state
    const [title, setTitle] = useState('Building project');
    const [goal, setGoal] = useState('50,000');
    const [currency, setCurrency] = useState('USD');
    const [tags, setTags] = useState(['Favorite', 'Check', 'Leave']);
    const [thumbnail, setThumbnail] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('card');

    const fileInputRef = useRef(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setThumbnail({ url, file });
        }
    };

    const handleRemoveThumbnail = () => {
        if (thumbnail?.url) URL.revokeObjectURL(thumbnail.url);
        setThumbnail(null);
    };

    const handleCreateEvent = () => {
        console.log('Creating donation event...');
        onClose();
    };

    const handleSaveDraft = () => {
        console.log('Saving as draft...');
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
            fullScreen={fullScreen}
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    background: '#FFFFFF',
                },
            }}
        >
            {/* Header */}

            <DialogTitle
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pb: 3,
                }}
            >
                <Box display="flex" alignItems="center" gap={2}>
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            background: PRIMARY_GRADIENT,
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
                            New Donation
                        </Typography>
                        <Typography variant="h4" sx={{ color: '#666', fontSize: '0.875rem' }}>
                            Create a new donation
                        </Typography>
                    </Box>
                </Box>
                <IconButton onClick={onClose}>
                    <Close />
                </IconButton>
            </DialogTitle>



            <DialogContent sx={{ p: 3, pt: 0 }}>
                {/* Donation Title & Goal */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3, mt: 5 }}>
                    <TextField
                        fullWidth
                        label="Donation Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Building project"
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
                        label="Donation Goal"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="50,000"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                //  backgroundColor: '#f8f9fa',
                                height: '60px',
                                py: 2,
                            },
                        }}
                    />
                </Stack>

                {/* Currency Selector & Tags */}
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ mb: 3 }}>
                    {/* Currency Selector */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a' }}>
                            Currency Selector
                        </Typography>
                        <ToggleButtonGroup
                            value={currency}
                            exclusive
                            onChange={(e, newCurrency) => newCurrency && setCurrency(newCurrency)}
                            sx={{
                                '& .MuiToggleButton-root': {
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 2,
                                    px: 3,
                                    py: 1,
                                    textTransform: 'none',
                                    '&.Mui-selected': {
                                        background: PRIMARY_GRADIENT,
                                        color: 'white',
                                        border: 'none',
                                    },
                                },
                            }}
                        >
                            <ToggleButton value="USD">USD</ToggleButton>
                            <ToggleButton value="EUR">EUR</ToggleButton>
                            <ToggleButton value="GBP">GBP</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>

                    {/* Tags */}
                    <Box sx={{ flex: 1 }}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                            <Typography variant="h4" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                                Tags
                            </Typography>
                            <Button
                                startIcon={<AddIcon />}
                                sx={{
                                    textTransform: 'none',
                                    color: PRIMARY_COLOR,
                                    fontSize: '1.2rem',
                                    fontWeight: 500,
                                }}
                            >
                                Add Tags
                            </Button>
                        </Stack>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            {tags.map((tag, index) => (
                                <Chip
                                    key={index}
                                    label={tag}
                                    size="small"
                                    sx={{
                                        borderRadius: 1,
                                        backgroundColor: '#f0f2f5',
                                        color: '#1a1a1a',
                                        fontWeight: 500,
                                        '& .MuiChip-deleteIcon': {
                                            color: '#666',
                                        },
                                    }}
                                    onDelete={() => {
                                        const newTags = [...tags];
                                        newTags.splice(index, 1);
                                        setTags(newTags);
                                    }}
                                />
                            ))}
                        </Stack>
                    </Box>
                </Stack>

                <Divider sx={{ my: 3 }} />

                {/* Thumbnail Upload & Linked Account */}
                <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} sx={{ mb: 3 }}>
                    {/* Thumbnail Upload */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a' }}>
                            Donation Thumbnail
                        </Typography>

                        {thumbnail ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box
                                    component="img"
                                    src={thumbnail.url}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 2,
                                        objectFit: 'cover',
                                    }}
                                />
                                <Button
                                    onClick={handleRemoveThumbnail}
                                    sx={{
                                        color: '#ff6b6b',
                                        textTransform: 'none',
                                        fontWeight: 500,
                                    }}
                                >
                                    Remove
                                </Button>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    border: '2px dashed #e0e0e0',
                                    borderRadius: 2,
                                    p: 3,
                                    textAlign: 'center',
                                    backgroundColor: '#fafafa',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        borderColor: PRIMARY_COLOR,
                                    },
                                }}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <PhotoCameraIcon sx={{ fontSize: 32, color: '#666', mb: 1 }} />
                                <Typography variant="h4" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5 }}>
                                    Upload
                                </Typography>
                                <Typography variant="h5" sx={{ color: '#666' }}>
                                    We only support JPEG, JPG, or PNG file. 1 mb max.
                                </Typography>
                            </Box>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            accept="image/jpeg,image/jpg,image/png"
                            style={{ display: 'none' }}
                        />
                    </Box>

                    {/* Linked Account  */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: '#1a1a1a' }}>
                            Linked Account
                        </Typography>

                        <Card
                            sx={{
                                border: '1px solid #e0e0e0',
                                borderRadius: 3,
                                backgroundColor: 'white',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                overflow: 'visible',
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                {/* Account Header */}
                                <Stack alignItems="flex-end" sx={{ mb: 3 }}>

                                    <IconButton size="small" sx={{ color: '#666' }}>
                                        <MoreVertIcon />
                                    </IconButton>
                                </Stack>

                                {/* Debit Cards */}



                                <Stack direction="row" spacing={1.5} sx={{ mb: 3, gap: 1.5 }}>

                                    <img src={debitCard} />




                                    <Stack direction="column" spacing={3} sx={{ mb: 3 }} alignItems="center">


                                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, alignItems: 'center' }}>
                                            <Typography variant="h4" sx={{ color: '#666', display: 'block' }}>
                                                Status
                                            </Typography>
                                            <Typography variant="h4" sx={{ color: '#00b894', fontWeight: 600 }}>
                                                Active
                                            </Typography>
                                        </Box>


                                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, alignItems: 'center' }}>
                                            <Typography variant="h4" sx={{ color: '#666', display: 'block' }}>
                                                Transactions:
                                            </Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
                                                1,250
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                                            <Typography variant="h4" sx={{ color: '#666', display: 'block' }}>
                                                Revenue :
                                            </Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
                                                $50,000
                                            </Typography>
                                        </Box>
                                        <Button
                                            size="small"
                                            sx={{
                                                textTransform: 'none',
                                                color: PRIMARY_COLOR,
                                                fontWeight: 500,
                                                fontSize: '1rem',
                                            }}
                                        >
                                            View Transactions
                                        </Button>
                                    </Stack>
                                </Stack>








                                {/* Action Buttons */}
                                <Stack direction="row" spacing={1.5}>
                                    <Button
                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        sx={{
                                            background: PRIMARY_GRADIENT,
                                            borderRadius: 2,
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            flex: 1,
                                            py: 1,
                                        }}
                                    >
                                        Add New Link
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: '#e0e0e0',
                                            borderRadius: 2,
                                            textTransform: 'none',
                                            fontWeight: 500,
                                            color: 'white',
                                            minWidth: '100px',
                                            py: 1,
                                            backgroundColor: 'red'
                                        }}
                                    >
                                        Deactivate
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                </Stack>

                <Divider sx={{ my: 3 }} />

                {/* Payment Method */}
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: '#1a1a1a' }}>
                        Select Payment Method
                    </Typography>
                    <ToggleButtonGroup
                        value={paymentMethod}
                        exclusive
                        onChange={(e, newMethod) => newMethod && setPaymentMethod(newMethod)}
                        sx={{
                            '& .MuiToggleButton-root': {
                                border: '1px solid #e0e0e0',
                                borderRadius: 2,
                                px: 3,
                                py: 1.5,
                                textTransform: 'none',
                                fontWeight: 500,
                                '&.Mui-selected': {
                                    background: PRIMARY_GRADIENT,
                                    color: 'white',
                                    border: 'none',
                                },
                            },
                        }}
                    >
                        <ToggleButton value="card">Pay with cards</ToggleButton>
                        <ToggleButton value="deposit">Direct Deposit</ToggleButton>
                        <ToggleButton value="transfer">Transfer</ToggleButton>
                        <ToggleButton value="crypto">Pay with crypto</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </DialogContent>

            {/* Footer Actions */}




            <DialogActions
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
                        backgroundColor: "#9088eeff",
                        border: 'none',
                        color: "white",
                        "&:hover": { backgroundColor: "#9d95f0ff", color: 'white' },
                    }}
                >
                    Save as Draft
                </Button>




                <Button
                    onClick={handleSaveDraft}
                    variant="contained"
                    sx={{
                        backgroundColor: "#4F46E5",
                        fontWeight: 600,
                        textTransform: "none",
                        px: 3,
                        py: 1.2,
                        borderRadius: "30px",
                        fontSize: "1rem",
                        "&:hover": { backgroundColor: "#4338CA" },
                    }}
                >
                    + Create Donation
                </Button>


            </DialogActions>
        </Dialog>
    );
}