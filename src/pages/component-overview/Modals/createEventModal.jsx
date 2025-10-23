
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Chip,
  Slider,
  Typography,
  IconButton,
} from "@mui/material";
import {
  CloudUpload,
  Close,
  VolumeUp,
  Mic,
  Label,
  
} from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const tagColors = [
  { bg: "#E6E4FA", color: "#2B04DB" }, // Purple
  { bg: "#E8F5E9", color: "#2E7D32" }, // Green
  { bg: "#FFF3E0", color: "#EF6C00" }, // Orange
  { bg: "#E3F2FD", color: "#1565C0" }, // Blue
  { bg: "#FCE4EC", color: "#AD1457" }, // Pink
];

const CreateEventModal = ({ open, onClose, onNext }) => {
  const [streamTitle, setStreamTitle] = useState("Faith that moves mountains");
  const [speakerName, setSpeakerName] = useState("Pastor Grace Ajayi");
  const [category, setCategory] = useState("Faith");
  const [dateTime, setDateTime] = useState("");
  const [tags, setTags] = useState(["English", "HDTV", "Logic"]);
  const [streamVolume, setStreamVolume] = useState(50);
  const [micVolume, setMicVolume] = useState(50);
  const [description, setDescription] = useState("");

  const handleDeleteTag = (tagToDelete) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        sx: {
          borderRadius: 4,
          padding: 4,
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: "1000px",
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
              New Event
            </Typography>
            <Typography fontSize={15} color="text.secondary">
              Create New Event
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>

      {/* Content */}
      <DialogContent dividers sx={{ border: "none", fontSize: 16 }}>
        {/* Stream Title / Speaker Name */}
        <Box display="flex" gap={3} flexWrap="wrap" mb={4}>
          <TextField
            label="EventTitle"
            fullWidth
            size="medium"
            InputProps={{ sx: { fontSize: 16, height: 56 } }}
            value={streamTitle}
            onChange={(e) => setStreamTitle(e.target.value)}
          />
          <TextField
            label="Speaker Name"
            fullWidth
            size="medium"
            InputProps={{ sx: { fontSize: 16, height: 56 } }}
            value={speakerName}
            onChange={(e) => setSpeakerName(e.target.value)}
          />
        </Box>

        {/* Category / Date */}
        <Box display="flex" gap={3} flexWrap="wrap" mb={4}>
          <FormControl fullWidth size="medium">
            <InputLabel sx={{ fontSize: 16 }}>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
              sx={{ fontSize: 16, height: 56 }}
            >
              <MenuItem value="Faith">Faith</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Music">Music</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="datetime-local"
            fullWidth
            size="medium"
            label="Event Date & Time"
            InputLabelProps={{ shrink: true }}
            InputProps={{ sx: { fontSize: 16, height: 56 } }}
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </Box>




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

        {/* Thumbnail Upload */}
        <Box mb={4}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <CloudUpload sx={{ color: "#2B04DB" }} />
            <Typography fontSize={15} fontWeight="500">
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
          <Typography variant="caption" display="block" mt={1} sx={{ fontSize: 17 }}>
            We only support JPEG, JPG, or PNG files. 1 mb max.
          </Typography>
        </Box>

        {/* Description */}
        <TextField
          label="Description"
          fullWidth
          multiline
          minRows={5}
          InputProps={{ sx: { fontSize: 16, lineHeight: 1.6 } }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>

      {/* Actions */}
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
          + Create Event
        </Button>


      </DialogActions>
    </Dialog>
  );
};

export default CreateEventModal;
