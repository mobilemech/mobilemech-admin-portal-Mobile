import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Switch,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import { Close, CheckCircle } from "@mui/icons-material";

import { useNavigate } from 'react-router-dom';

const StartStreamModal = ({ open, onClose }) => {
  const [storeBroadcasts, setStoreBroadcasts] = useState(true);
  const [goLiveNotification, setGoLiveNotification] = useState(true);
    const navigate = useNavigate();




















  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 3,
          padding: 4,
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: "600px",
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          textAlign: "center",
          pb: 1,
          position: "relative",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
        <Typography fontWeight="bold" fontSize={22}>
          Start Live Stream
        </Typography>
        <Typography fontSize={14} color="text.secondary">
          Almost there!
        </Typography>
      </DialogTitle>

      {/* Content */}
      <DialogContent
        dividers={false}
        sx={{
          border: "none",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          mt: 3,
        }}
      >
        {/* Store Broadcasts */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize={16} fontWeight={500}>
            Store Live Broadcasts
          </Typography>
          <Switch
            checked={storeBroadcasts}
            onChange={(e) => setStoreBroadcasts(e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#2B04DB",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#2B04DB",
              },
            }}
          />
        </Box>

        {/* Go Live Notification */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize={16} fontWeight={500}>
            Go Live Notification
          </Typography>
          <Switch
            checked={goLiveNotification}
            onChange={(e) => setGoLiveNotification(e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#2B04DB",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#2B04DB",
              },
            }}
          />
        </Box>

        {/* Info Banner */}
        {goLiveNotification && (
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#F3F0FF",
              color: "#2B04DB",
              display: "flex",
              alignItems: "center",
              gap: 1,
              p: 1.5,
              borderRadius: 2,
              fontSize: 14,
            }}
          >
            <CheckCircle fontSize="small" />
            All your members will receive a notification to join in!
          </Paper>
        )}
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ justifyContent: "center", pt: 2 }}>
        <Button
       
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#2B04DB",
            borderRadius: "30px",
            textTransform: "none",
            px: 6,
            py: 1.5,
            fontSize: 16,
            "&:hover": { bgcolor: "#4a25d6" },
          }}
          onClick={() => {
            onClose();
           navigate("/dashboard/AllStreams")
          }}
        >
          Start Live Stream
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StartStreamModal;
