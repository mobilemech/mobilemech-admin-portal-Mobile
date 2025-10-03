
import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Grid,
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
  OutlinedInput
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
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BarChartIcon from '@mui/icons-material/BarChart';
import Rect1 from "./Rect1.png"
import Rect2 from "./Rect2.png"
import BorderColorIcon from '@mui/icons-material/BorderColor';


const source = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww'
const source1 = 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww'
const source2 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww'




export default function AllStreams() {
  const PRIMARY = "#5B2DFB"; 
  const BG_DARK = "#0b0420"; 
  const CARD_BG = "#FFFFFF";
  const SOFT_BG = "#F7F8FB";


  // controls & state
  const [isPlaying, setIsPlaying] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [recording, setRecording] = useState(false);


  

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };












  // chat & messages
  const [messages, setMessages] = useState([
    { id: 1, author: "Janet", text: "I'm glad to be here! hey! hallelujah", time: "1:35 PM", img:source1 },
    { id: 2, author: "Aubrey", text: "I'm so glad you are connected to the livestream chat ✨", time: "11:31 AM", img:source2 },
    { id: 3, author: "Prayer", text: "Prayer Focus: Healing and restoration for all families.", time: "11:31 AM", img:source  },
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef(null);

  // other panels
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
    { id: 4, title: "Testimony", time: "02:30 PM", duration: "15 mins", image: Rect2 }
  ]);

  // timer
  const [timer, setTimer] = useState(0);
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
      { id: Date.now(), author: "You", text: chatInput.trim(), time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
    ]);
    setChatInput("");
  };

  const handleReview = (id) => {
    setRequests((rs) => rs.map((r) => (r.id === id ? { ...r, status: "reviewed" } : r)));
  };

  // // ---- Zoom / scale logic (applied to inner content container) ----
  const [scale, setScale] = useState(1);

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  // ✅ Track window size (responsive)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Run once on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Decide zoom level based on width
  const zoom = useMemo(() => {
    return width <= 768 ? 0.55 : 0.50;
  }, [width]);

  // ✅ Apply zoom (with cross-browser fallback)
  useEffect(() => {
    const body = document.body;

    // Clear old styles
    body.style.zoom = "";
    body.style.transform = "";
    body.style.transformOrigin = "";
    body.style.width = "";

    if ("zoom" in body.style) {
      // ✅ Chrome / Edge (native zoom support)
      body.style.zoom = zoom;
    } else {
      // ✅ Firefox / Safari fallback
      body.style.transform = `scale(${zoom})`;
      body.style.transformOrigin = "top center";
      body.style.width = `${(100 / zoom).toFixed(2)}%`; // prevent layout shrink to left
      body.style.margin = "0 auto";
    }
  }, [zoom]);










  // small helper for bubble tails
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
      width: 0,
      height: 0,
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
      width: 0,
      height: 0,
      borderTop: "8px solid transparent",
      borderBottom: "8px solid transparent",
      borderLeft: `8px solid ${bg}`,
    },
  });

  return (

    <Box>




      <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", py: 6, }}>

        <Box
          sx={{
            // width: `${Math.round(1400 / scale)}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
        >

          {/* Top header area (rounded inner item with timer + end + health) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 3,
              p: 1,
              bgcolor: '#F1F2FF',

              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: { xs: 16, md: 18 } }}>Faith that moves Mountains</Typography>


            <Box sx={{ ml: "auto", display: "flex", gap: 1, alignItems: "center" }}>
              <Chip
                icon={<Timer sx={{ color: "#9B1C1C" }} />}
                label={formatTimer(timer)}
                sx={{
                  bgcolor: "#FFF1F0",
                  color: "#9B1C1C",
                  px: 1,
                  fontWeight: 700,
                  borderRadius: "12px",
                }}
              />
              <Button sx={{ bgcolor: "#EEF2FF", color: PRIMARY, textTransform: "none", fontWeight: 700, borderRadius: "12px", px: 1.5 }}>
                End
              </Button>
              <Chip
                label={<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}><Box sx={{ width: 10, height: 10, bgcolor: "#10B981", borderRadius: 1 }} /> Stream health</Box>}
                sx={{ bgcolor: "#F0FDF4", color: "#064E3B", borderRadius: "12px", px: 1 }}
              />

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 1 }}>
                <Paper sx={{ px: 1, py: "4px", borderRadius: "12px", bgcolor: "#F3F4F6" }}>
                  <Typography sx={{ fontWeight: 700 }}>78</Typography>
                </Paper>
                <Avatar sx={{ width: 34, height: 34 }} src={source} />
              </Box>
            </Box>
          </Box>










          {/* Main white container replicating the rounded big card in screenshot */}
          <Box
            // elevation={6}
            sx={{
              px: { xs: 2, md: 1 },
              py: { xs: 2, md: 1 },
             
            }}
          >
         



            {/* Body grid: Left large area (video + bottom cards) and right chat/requests column */}
            <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>

              <Grid item xs={12} md={8} sx={{ width: { xs: 600, md: 1040 }, }} >
                {/* Video card */}
                <Paper
                  sx={{
                    borderRadius: 2.5,
                    overflow: "hidden",
                    bgcolor: "#FAFAFF",
                    mb: 3,
                  }}
                >
                  {/* the actual video area — use img placeholder, but set to cover to replicate screenshot */}
                  <Box sx={{ width: { xs: 600, md: 1040 }, height: { xs: 260, md: 440 }, position: "relative", bgcolor: "#111" }}>
                      <video ref={videoRef} style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                    {/* speaker badge bottom-right */}
                    <Box sx={{ position: "absolute", right: 14, bottom: 12 }}>
                      <Paper sx={{ bgcolor: "rgba(0,0,0,0.55)", color: "#fff", px: 1, py: "6px", borderRadius: 1 }}>
                        <Typography sx={{ fontSize: 12, fontWeight: 600 }}>Grace A</Typography>
                      </Paper>
                    </Box>
                  </Box>













                  

                  {/* video controls — centered pill bar*/}
             

                     {/* Controls */}
                 <Box sx={{ display: "flex", gap: 1, alignItems: "center", p: 2, justifyContent: "space-around", bgcolor: CARD_BG }}>
                   <IconButton sx={{ width: 50, height: 50, borderRadius: 2, color: micOn ? '#7F75FF' : "", bgcolor: "#CECEFF" }} onClick={() => {
                    setMicOn((m) => !m);
                    if (videoRef.current) videoRef.current.muted = !micOn;
                  }}>
                    {micOn ? <Mic /> : <MicOff color="error" />}
                  </IconButton>
                  <IconButton sx={{ width: 50, height: 50, borderRadius: 2, color: camOn ? '#7F75FF' : "", bgcolor: "#CECEFF" }} onClick={() => {
                    setCamOn((c) => !c);
                    if (videoRef.current) videoRef.current.style.display = camOn ? "none" : "block";
                  }}>
                    {camOn ? <Videocam /> : <VideocamOff color="error" />}
                  </IconButton>
                  <IconButton onClick={() => setIsPlaying((p) => !p)} sx={{ width: 180, height: 58, borderRadius: 3, bgcolor: PRIMARY, color: "white" }}>
                    {isPlaying ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
                  </IconButton>
                  <IconButton sx={{ bgcolor:'#CECEFF', color:'#7F75FF' }} onClick={handleFullscreen}><Fullscreen /></IconButton>
                  <IconButton sx={{bgcolor:'#CECEFF', color:'#7F75FF'}}><BorderColorIcon /></IconButton>
                  <IconButton sx={{bgcolor:'#CECEFF', color:'#7F75FF'}}><Chat /></IconButton>
                  <IconButton sx={{ width: 50, height: 50, borderRadius: 2, bgcolor:'#CECEFF' }} onClick={() => setRecording((r) => !r)}>
                    <Badge color={recording ? "error" : "default"} variant="dot"><MoreHoriz /></Badge>
                  </IconButton>
                </Box>















                  
                </Paper>

                {/* Bottom cards row (Overview + Itinerary) */}
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ fontWeight: 800 }}>Overview</Typography>
                        <Button size="small" sx={{ textTransform: "none" }}>View All</Button>
                      </Box>

                      <Box sx={{ width: { xs: 600, md: 480, } }}>
                        <Paper sx={{ width: { xs: 570, md: 480, }, p: 2, borderRadius: 2, background: 'linear-gradient(to  bottom, #CC6002, #FFB532)', }} elevation={0}>
                          <Stack style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>

                            <Stack sx={{ gap: 0.5 }}>
                              <Typography variant="h4" color='#FFFFFF'>
                                Announcement
                              </Typography>
                              <Grid container alignItems="center">
                                <Grid>
                                  <Typography variant="h5" color='#E5E5FF'>
                                    Inform your congregration
                                  </Typography>
                                </Grid>

                              </Grid>
                            </Stack>

                            <Stack sx={{ color: 'white' }} >
                              <MoreHorizIcon sx={{ width: 40, height: 40, }} />

                              <Stack sx={{ gap: 0.5, color: '#CC6002', height: 65, width: 65, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#F1F2FF', }}>
                                <MarkUnreadChatAltIcon sx={{ width: 40, height: 40 }} />
                              </Stack>

                            </Stack>

                          </Stack>

                        </Paper>

                        {/* Icon={<BarChartIcon sx={{ width: 40, height: 40 }}  */}

                        <Box sx={{ gap: 2, mt: 2, width: { xs: 565, md: 480, }, }}>
                          <Paper sx={{ flex: 1, p: 2, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 5 }}>
                            <BarChartIcon sx={{ color: '#4318FF', padding: 1, backgroundColor: '#F1F2FF', width: 40, height: 40, borderRadius: '50%' }} />
                            <Box>
                              <Typography variant="subtitle2" color="text.secondary">Donation reviewed</Typography>
                              <Typography sx={{ fontWeight: 800, fontSize: 20 }}>${donation}</Typography>

                            </Box>

                          </Paper>

                          <Paper sx={{ flex: 1, p: 2, borderRadius: 2, mt: 2, display: 'flex', alignItems: 'center', gap: 5 }}>

                            <BarChartIcon sx={{ color: 'white', padding: 1, backgroundColor: '#4318FF', width: 40, height: 40, borderRadius: '50%' }} />
                            <Box>

                              <Typography variant="subtitle2" color="text.secondary">Number of Donors</Typography>
                              <Typography sx={{ fontWeight: 800, fontSize: 20 }}>27</Typography>

                            </Box>

                          </Paper>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6} sx={{ width: { xs: 600, md: 480 } }}>
                    <Paper sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ fontWeight: 800 }}>Event Itinerary</Typography>
                        <Button size="small" sx={{ textTransform: "none" }}>Today ▾</Button>
                      </Box>

                      <List sx={{ mt: 1 }}>
                        {itinerary.map((it) => (
                          <ListItem key={it.id} disableGutters sx={{ py: 1, gap: 2 }}>
                            <img src={it.image} />
                            <ListItemText
                              primary={<Typography sx={{ fontWeight: 700 }}>{it.title}</Typography>}
                              secondary={<Typography variant="body2" color="text.secondary">{`${it.time} • ${it.duration}`}</Typography>} />
                          </ListItem>
                        ))}
                      </List>

                      <Box textAlign="right">
                        <Button size="small" sx={{ textTransform: "none" }}>View all lined up Activities →</Button>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>





              {/* Right column: chat + requests */}
              <Grid item xs={12} md={4} sx={{ width: { xs: 600, md: 900 } }} >
                {/* Chat card */}
                <Paper sx={{ p: 2.25, borderRadius: 2.5, height: "64vh", display: "flex", flexDirection: "column" }} elevation={2}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>

                       <Box sx={{ display: "flex", }}>
                      <Avatar src={source} sx={{ width: 36, height: 36, }} />
                      <Avatar src={source1}sx={{ width: 36, height: 36,  }} />
                      <Avatar src={source2} sx={{ width: 36, height: 36 }} />
                    </Box>





                    <Box>
                      <Typography sx={{ fontWeight: 800 }}>Live Chat <Typography component="span" sx={{ fontWeight: 600, color: "#6B7280" }}> (120)</Typography></Typography>
                      <Typography variant="body2" color="text.secondary">Join the conversation and worship together in real time</Typography>
                    </Box>


                    <MoreHorizIcon sx={{ width: 40, height: 40, cursor:'pointer' }} />

                 
                  </Box>

                  <Divider sx={{ mb: 1 }} />

                  <Box sx={{ flex: 1, overflowY: "auto", pr: 0.5 }}>
                    {messages.map((m) => {
                      if (m.system) {
                        return (
                          <Box key={m.id} sx={{ textAlign: "center", my: 1 }}>
                            <Paper elevation={0} sx={{ display: "inline-block", p: "8px 12px", bgcolor: "#EEF2FF", borderRadius: 2 }}>
                              <Typography variant="caption" sx={{ color: PRIMARY, fontWeight: 700}}>{m.text}</Typography>
                              <Typography variant="caption" sx={{ display: "block", color: "text.secondary", mt: 0.5 }}>{m.time}</Typography>
                            </Paper>
                          </Box>
                        );
                      }

                      const isYou = m.author === "You";
                      const leftBg = "#F3F4F6";
                      const rightBg = PRIMARY;

                      return (
                        <Box key={m.id} sx={{ display: "flex", flexDirection: isYou ? "row-reverse" : "row", gap: 1.25, mb: 2 }}>
                          <Avatar src={m.img} sx={{ width: 36, height: 36 }} />
                          {/* <Avatar sx={{ width: 34, height: 34, bgcolor: isYou ? PRIMARY : "#E5E7EB", color: isYou ? "#fff" : "#111827", fontSize: 14 }}>
                            {m.img} 
                          </Avatar> */}

                          <Box sx={{ maxWidth: "100%" }}>
                            <Typography variant="caption" color="text.secondary" sx={{fontWeight:700}}>{m.author} • {m.time}</Typography>

                            <Paper
                              elevation={0}
                              sx={{
                                mt: 0.5,
                                display: "inline-block",
                                ...(isYou ? rightBubbleSx(rightBg) : leftBubbleSx(leftBg)),
                                maxWidth: "86%",
                              }}
                            >
                              <Typography variant="body2" sx={{ color: isYou ? "#fff" : "#111827", whiteSpace: "pre-wrap", fontSize:15 }}>{m.text}</Typography>
                            </Paper>
                          </Box>
                        </Box>
                      );
                    })}
                    <div ref={chatEndRef} />
                  </Box>


                  {/* input */}
                  <Box sx={{ display: "flex", gap: 1, mt: 1, }}>

                    <TextField
                      size="small"
                      placeholder="Start typing…"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          height: "55px",
                          borderRadius: "20px"
                        },
                        "& .MuiInputBase-input": {
                          padding: "12px"
                        }
                      }}
                      InputProps={{
                        sx: { borderRadius: 2, },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={sendMessage} sx={{ bgcolor: PRIMARY, color: "#fff", width: 44, height: 34, borderRadius: 2 }}>
                              <Send />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <IconButton sx={{ width: 44, height: 44 }}>
                      <Favorite sx={{ color: "#E11D48" }} />
                    </IconButton>
                  </Box>
                </Paper>

                {/* Requests */}
                <Paper sx={{ p: 2, borderRadius: 2, mt: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Typography sx={{ fontWeight: 800 }}>Requests</Typography>
                    <Chip label="3 New" size="small" sx={{ color: "red", fontWeight: 700 }} />
                  </Box>

                  <List dense>
                    {requests.map((r) => (
                      <ListItem key={r.id} sx={{ mb: 1, borderRadius: 1, bgcolor: "#ecf2f0ff" }}>
                        <ListItemText
                          primary={<Typography sx={{ fontWeight: 700 }}>{r.title}</Typography>}
                          secondary={<Typography variant="body2" color="text.secondary">{r.name}</Typography>}
                        />
                        <ListItemSecondaryAction sx={{ right: 8 }}>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleReview(r.id)}
                            sx={{
                              bgcolor: r.status === "reviewed" ? "#2B04DB" : "#1C534D",
                              color: r.status === "reviewed" ? "white" : "#fff",
                              textTransform: "none",
                              borderRadius: "20px",
                              px: 2,
                            }}
                          >
                            {r.status === "reviewed" ? "Reviewed" : "Review"}
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>



            </Grid>





          </Box>
        </Box>
      </Box>




    </Box>
  );
}




































