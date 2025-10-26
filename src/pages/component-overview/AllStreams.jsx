
import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Chip,
  Divider,
  Avatar,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Badge,
  Stack,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  Fullscreen,
  Timer,
  Chat,
  Send,
  Favorite,
  MoreHoriz,
} from "@mui/icons-material";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BarChartIcon from "@mui/icons-material/BarChart";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Rect1 from "./Rect1.png";
import Rect2 from "./Rect2.png";

const source =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60";
const source1 =
  "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=400&auto=format&fit=crop&q=60";
const source2 =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60";

export default function AllStreams() {
  const PRIMARY = "#5B2DFB";
  const CARD_BG = "#FFFFFF";
  const [isPlaying, setIsPlaying] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [scale, setScale] = useState(1);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const videoRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "Janet",
      text: "I'm glad to be here! hey! hallelujah",
      time: "1:35 PM",
      img: source1,
    },
    {
      id: 2,
      author: "Aubrey",
      text: "I'm so glad you are connected to the livestream chat ✨",
      time: "11:31 AM",
      img: source2,
    },
    {
      id: 3,
      author: "Prayer",
      text: "Prayer Focus: Healing and restoration for all families.",
      time: "11:31 AM",
      img: source,
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef(null);

  const [donation] = useState(230);
  const [requests, setRequests] = useState([
    { id: 1, title: "Live Testimony Request", name: "Blessing Ola", status: "new" },
    { id: 2, title: "Live Testimony Request", name: "Blessing Ola", status: "new" },
    { id: 3, title: "Offering Request", name: "Mary", status: "reviewed" },
  ]);
  const [itinerary] = useState([
    { id: 1, title: "Word Session", time: "02:00 PM", duration: "30 mins", image: Rect1 },
    { id: 2, title: "Testimony", time: "02:30 PM", duration: "15 mins", image: Rect2 },
    { id: 3, title: "Offering/Donations", time: "02:45 PM", duration: "15 mins", image: Rect1 },
    { id: 4, title: "Testimony", time: "03:00 PM", duration: "15 mins", image: Rect2 },
  ]);

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  const handleFullscreen = () => {
    const vid = videoRef.current;
    if (vid?.requestFullscreen) vid.requestFullscreen();
  };

  useEffect(() => {
    const t = setInterval(() => setTimer((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const formatTimer = (s) => {
    const hh = String(Math.floor(s / 3600)).padStart(2, "0");
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    setMessages((m) => [
      ...m,
      {
        id: Date.now(),
        author: "You",
        text: chatInput.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setChatInput("");
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const zoom = useMemo(() => (width <= 768 ? 0.55 : 0.5), [width]);
  useEffect(() => {
    const body = document.body;
    body.style.zoom = "";
    if ("zoom" in body.style) {
      body.style.zoom = zoom;
    } else {
      body.style.transform = `scale(${zoom})`;
      body.style.transformOrigin = "top center";
      body.style.width = `${(100 / zoom).toFixed(2)}%`;
      body.style.margin = "0 auto";
    }
  }, [zoom]);

  const leftBubbleSx = (bg = "#F3F4F6") => ({
    position: "relative",
    p: 1.25,
    bgcolor: bg,
    borderRadius: 1.5,
    "&::after": {
      content: '""',
      position: "absolute",
      left: -8,
      top: 10,
      borderTop: "8px solid transparent",
      borderBottom: "8px solid transparent",
      borderRight: `8px solid ${bg}`,
    },
  });
  const rightBubbleSx = (bg = PRIMARY) => ({
    position: "relative",
    p: 1.25,
    bgcolor: bg,
    borderRadius: 1.5,
    color: "#fff",
    "&::after": {
      content: '""',
      position: "absolute",
      right: -8,
      top: 10,
      borderTop: "8px solid transparent",
      borderBottom: "8px solid transparent",
      borderLeft: `8px solid ${bg}`,
    },
  });

  return (
    <Box sx={{ minHeight: "100vh", py: 6, display: "flex", justifyContent: "center" }}>

      <Box sx={{ transform: `scale(${scale})`, transformOrigin: "top center", width: "100%" }}>


        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
            p: 1,
            bgcolor: "#F1F2FF",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: { xs: 16, md: 18 } }}>
            Faith that moves Mountains
          </Typography>
          <Box sx={{ ml: "auto", display: "flex", gap: 1, alignItems: "center" }}>
            <Chip
              icon={<Timer sx={{ color: "#9B1C1C" }} />}
              label={formatTimer(timer)}
              sx={{ bgcolor: "#FFF1F0", color: "#9B1C1C", px: 1, fontWeight: 700 }}
            />
            <Button
              sx={{
                bgcolor: "#EEF2FF",
                color: PRIMARY,
                textTransform: "none",
                fontWeight: 700,
                borderRadius: "12px",
                px: 1.5,
              }}
            >
              End
            </Button>
          </Box>
        </Box>

        {/* Main content: 60% left + 40% right */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
          {/* Left side - Video + Cards */}
          <Box sx={{ flex: { md: "0 0 60%" }, width: "100%" }}>
            <Paper sx={{ borderRadius: 2.5, overflow: "hidden", bgcolor: "#FAFAFF", mb: 3 }}>
              <Box sx={{ width: "100%", height: { xs: 260, md: 440 }, position: "relative" }}>
                <video
                  ref={videoRef}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                />
                <Box sx={{ position: "absolute", right: 14, bottom: 12 }}>
                  <Paper sx={{ bgcolor: "rgba(0,0,0,0.55)", color: "#fff", px: 1, py: "6px", borderRadius: 1 }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 600 }}>Grace A</Typography>
                  </Paper>
                </Box>
              </Box>

              {/* Controls */}
              <Box sx={{ display: "flex", justifyContent: "space-around", p: 2, bgcolor: CARD_BG }}>
                <IconButton
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    color: micOn ? "#7F75FF" : "",
                    bgcolor: "#CECEFF",
                  }}
                  onClick={() => {
                    setMicOn((m) => !m);
                    if (videoRef.current) videoRef.current.muted = !micOn;
                  }}
                >
                  {micOn ? <Mic /> : <MicOff color="error" />}
                </IconButton>
                <IconButton
                  sx={{ width: 50, height: 50, borderRadius: 2, color: camOn ? "#7F75FF" : "", bgcolor: "#CECEFF" }}
                  onClick={() => {
                    setCamOn((c) => !c);
                    if (videoRef.current) videoRef.current.style.display = camOn ? "none" : "block";
                  }}
                >
                  {camOn ? <Videocam /> : <VideocamOff color="error" />}
                </IconButton>
                <IconButton
                  disableRipple
                  onClick={() => setIsPlaying((p) => !p)}
                  sx={{ width: 180, height: 58, borderRadius: 3, bgcolor: PRIMARY, color: "white" }}
                >
                  {isPlaying ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
                </IconButton>
                <IconButton sx={{ bgcolor: "#CECEFF", color: "#7F75FF" }} onClick={handleFullscreen}>
                  <Fullscreen />
                </IconButton>
                <IconButton sx={{ bgcolor: "#CECEFF", color: "#7F75FF" }}>
                  <BorderColorIcon />
                </IconButton>
                <IconButton sx={{ bgcolor: "#CECEFF", color: "#7F75FF" }}>
                  <Chat />
                </IconButton>
                <IconButton
                  sx={{ width: 50, height: 50, borderRadius: 2, bgcolor: "#CECEFF" }}
                  onClick={() => setRecording((r) => !r)}
                >
                  <Badge color={recording ? "error" : "default"} variant="dot">
                    <MoreHoriz />
                  </Badge>
                </IconButton>
              </Box>
            </Paper>

            {/* Bottom Cards (Overview + Itinerary) */}
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
              {/* Overview */}
              <Paper sx={{ p: 3, borderRadius: 2 }}>
                <Typography sx={{ fontWeight: 800, mb: 2 }}>Overview</Typography>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    background: "linear-gradient(to bottom, #CC6002, #FFB532)",
                    mb: 2,
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="h4" color="#FFFFFF">
                        Announcement
                      </Typography>
                      <Typography variant="h5" color="#E5E5FF">
                        Inform your congregation
                      </Typography>
                    </Box>
                    <Stack alignItems="center">
                      <MoreHorizIcon sx={{ color: "black" }} />
                      <Stack
                        sx={{
                          gap: 0.5,
                          color: "#CC6002",
                          height: 65,
                          width: 65,
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          background: "#F1F2FF",
                        }}
                      >
                        <MarkUnreadChatAltIcon sx={{ width: 40, height: 40 }} />
                      </Stack>
                    </Stack>
                  </Stack>
                </Paper>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Paper sx={{ p: 2, display: "flex", alignItems: "center", gap: 3, borderRadius: 2 }}>
                    <BarChartIcon sx={{ color: "#4318FF", background: "#F1F2FF", borderRadius: "50%", p: 1, width: 50, height: 50 }} />
                    <Box>
                      <Typography variant="h4" color="text.secondary">
                        Donation reviewed
                      </Typography>
                      <Typography sx={{ fontWeight: 800, fontSize: 20 }}>${donation}</Typography>
                    </Box>
                  </Paper>
                  <Paper sx={{ p: 2, display: "flex", alignItems: "center", gap: 3, borderRadius: 2 }}>
                    <BarChartIcon sx={{ color: "white", background: "#4318FF", borderRadius: "50%", p: 1, width: 50, height: 50 }} />
                    <Box>
                      <Typography variant="h4" color="text.secondary">
                        Number of Donors
                      </Typography>
                      <Typography sx={{ fontWeight: 800, fontSize: 20 }}>27</Typography>
                    </Box>
                  </Paper>
                </Box>
              </Paper>

              {/* Itinerary */}
              <Paper sx={{ p: 3, borderRadius: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: 800 }}>Event Itinerary</Typography>
                  <Button size="small" sx={{ textTransform: "none" }}>
                    Today ▾
                  </Button>
                </Box>
                <List sx={{ mt: 1 }}>
                  {itinerary.map((it) => (
                    <ListItem key={it.id} disableGutters sx={{ py: 1, gap: 2 }}>
                      <img src={it.image} alt={it.title} />
                      <ListItemText
                        primary={<Typography sx={{ fontWeight: 800, fontSize: 17 }}>{it.title}</Typography>}
                        secondary={
                          <Typography variant="h5" color="text.secondary">
                            {`${it.time} • ${it.duration}`}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>
          </Box>

          {/* Right side - Chat + Requests */}
          <Box sx={{ flex: { md: "0 0 40%" }, width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Chat */}
            <Paper sx={{ p: 2.25, borderRadius: 2.5, flex: 1, display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Box sx={{ display: "flex" }}>
                  <Avatar src={source} />
                  <Avatar src={source1} />
                  <Avatar src={source2} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800 }}>
                    Live Chat{" "}
                    <Typography component="span" sx={{ fontWeight: 600, color: "#6B7280" }}>
                      (120)
                    </Typography>
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    Join the conversation and worship together in real time
                  </Typography>
                </Box>
                <MoreHorizIcon sx={{ width: 40, height: 40, cursor: "pointer" }} />
              </Box>
              <Divider sx={{ mb: 1 }} />
              <Box sx={{ flex: 1, overflowY: "auto", pr: 0.5 }}>
                {messages.map((m) => {
                  const isYou = m.author === "You";
                  const bubbleSx = isYou ? rightBubbleSx(PRIMARY) : leftBubbleSx("#F3F4F6");
                  return (
                    <Box
                      key={m.id}
                      sx={{ display: "flex", flexDirection: isYou ? "row-reverse" : "row", gap: 1.25, mb: 2 }}
                    >
                      {!isYou && <Avatar src={m.img} alt={m.author} />}
                      <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: isYou ? PRIMARY : "#000" }}>
                          {m.author}
                        </Typography>
                        <Box sx={bubbleSx}>
                          <Typography variant="h5">{m.text}</Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary">
                          {m.time}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
                <div ref={chatEndRef} />
              </Box>
              <Divider sx={{ my: 1 }} />
              <TextField
                fullWidth
                size="small"
                placeholder="Write a message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                sx={{
                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton color="primary" onClick={sendMessage}>
                        <Send />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

            </Paper>

            {/* Requests */}
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography sx={{ fontWeight: 800, mb: 1 }}>Requests</Typography>
              <List sx={{ p: 0 }}>
                {requests.map((req) => (
                  <ListItem key={req.id} disableGutters>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontWeight: 800, fontSize: 17, color: 'black' }}>{req.title}</Typography>
                      }
                      secondary={<Typography variant="h5">{req.name}</Typography>}
                    />
                    <ListItemSecondaryAction>
                      <Chip
                        label={req.status}
                        sx={{
                          bgcolor: req.status === "new" ? "#FFF1F0" : "#EEF2FF",
                          color: req.status === "new" ? "#9B1C1C" : PRIMARY,
                          fontWeight: 600,
                          textTransform: "capitalize",
                        }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}








