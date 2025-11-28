
import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  Chip,
  Avatar,
} from "@mui/material";

import {
  Add as AddIcon,
  Search as SearchIcon,
  Visibility,
  Edit,
  Delete,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

import ServicesModal from "./Modals/ServicesModal";



const SERVICE_TITLES = [
  "Brake Pad Replacement",
  "Oil Change",
  "AC Repair",
  "Battery Replacement",
  "Wheel Alignment",
  "Brake Fluid Flush",
  "Engine Diagnostics",
  "Spark Plug Replacement",
  "Transmission Check",
  "Tire Rotation",
  "Brake Disc Replacement",
  "Clutch Adjustment",
  "Suspension Check",
  "Filter Replacement",
  "Coolant Flush",
  "Electrical Diagnostics",
  "Fuel System Cleaning",
  "Radiator Repair",
  "Exhaust Repair",
  "Inspection & Tune-up",
];

const CATEGORIES = ["Mechanical", "Electrical", "Routine", "Inspection"];

const createService = (i) => {
  const title = SERVICE_TITLES[i % SERVICE_TITLES.length];
  const category = CATEGORIES[i % CATEGORIES.length];
  const price = (15000 + (i * 250) % 20000).toLocaleString();
  const lastUpdated = ["June 24", "June 20", "May 10", "May 25"][(i + 2) % 4];
  return {
    id: i + 1,
    title,
    category,
    price,
    lastUpdated,
  };
};

const SERVICES = Array.from({ length: 60 }, (_, i) => createService(i));

export default function Services() {

  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  
    const [selectedUser, setSelectedUser] = useState(null);
     const [openModal, setOpenModal] = useState(false);
  
  const handleView = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };
  












  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const zoom = useMemo(() => {
    if (width <= 768) return 0.55; // mobile
    if (width <= 1200) return 0.8; // tablet / small laptop
    if (width <= 1600) return 0.5; // medium desktops
    return 0.7; // large desktops
  }, [width]);

  useEffect(() => {
    const body = document.body;
    body.style.zoom = "";
    if ("zoom" in body.style) {
      body.style.zoom = zoom;
    } else {
      // fallback for browsers without zoom
      body.style.transform = `scale(${zoom})`;
      body.style.transformOrigin = "top center";
      body.style.width = `${(100 / zoom).toFixed(2)}%`;
      body.style.margin = "0 auto";
    }
 
  }, [zoom]);

  // Search / filter / pagination
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 15;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      if (categoryFilter !== "All" && s.category !== categoryFilter) return false;
      if (!q) return true;
      return (
        s.title.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.price.toString().toLowerCase().includes(q)
      );
    });
  }, [query, categoryFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const paged = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, page]);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <Box sx={{ width: "100%", px: 3, py: 2 }}>
      {/* Page header */}
      <Grid container alignItems="center" spacing={2}>



        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Service Management
          </Typography>
          <Typography variant="h3" color="text.secondary" sx={{ mt: 0.5 }}>
            Manage available services, pricing and categories.
          </Typography>
        </Grid>


      </Grid>




      {/* Controls: search and filter */}
      <Grid container spacing={2} sx={{ mt: 3, mb: 1 }} alignItems="center">
        <Button
          variant="contained"
          startIcon={<AddIcon style={{ fontSize: 30 }} />}
          sx={{ fontSize: 20, py: 1, px: 10, bgcolor: "#F97316", "&:hover": { bgcolor: "#ea7512" } }}
        >
          ADD
        </Button>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: 450,
                lg: 550,
                xl: 650,
              },
            }}
          >
            <TextField
              placeholder="Search service name, category or price"
              fullWidth
              variant="outlined"
              size="medium"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 4,
                  height: 60,
                  fontSize: 18,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "0.5px solid #c2c2c2ff",
                  },
                },
              }}
            />
          </Box>



   
     
         <ServicesModal
     open={openModal}
     onClose={() => setOpenModal(false)}
     service={selectedUser}
   />
    










        </Grid>

        <Grid item xs={12} md={4} sx={{ display: "flex", gap: 2, justifyContent: { xs: "flex-start", md: "flex-end" } }}>

          <Select
            size="small"
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setPage(1);
            }}
            sx={{
              width: { xs: "100%", sm: 240, md: 280 },
              fontSize: 18,
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiSelect-select": {
                padding: "12px 16px",
              },
              boxShadow: "0px 1px 3px rgba(0,0,0,0.15)",
              "&:hover": {
                boxShadow: "0px 2px 6px rgba(0,0,0,0.18)",
              },
            }}
          >
            <MenuItem value="All">All Categories</MenuItem>
            {CATEGORIES.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>























      {/* Table */}
      <Paper elevation={0} sx={{ mt: 2, borderRadius: 2 }}>
        <TableContainer sx={{ overflowX: "auto" }}>
          <Table size="small" sx={{ minWidth: 900 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>SERVICE TYPE</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>CATEGORY</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>CURRENT PRICE</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>LAST UPDATED</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 16 }}>
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paged.map((s) => (
                <TableRow key={s.id} hover>
                  <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar sx={{ bgcolor: "#FFEFD5", color: "#92400E" }}>
                      {s.title
                        .split(" ")
                        .slice(0, 2)
                        .map((p) => p[0])
                        .join("")}
                    </Avatar>
                    <Typography sx={{ fontWeight: 600, fontSize: 16 }}>{s.title}</Typography>
                  </TableCell>

                  <TableCell sx={{ fontSize: 18 }}>
                    <Chip size="small" label={s.category} sx={{ bgcolor: "transparent", fontSize: 18  }} />
                  </TableCell>

                  <TableCell sx={{ fontSize: 18 }}>₦ {s.price}</TableCell>

                  <TableCell sx={{ fontSize: 18 }}>{s.lastUpdated}</TableCell>

                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton size="small"  onClick={()=>handleView(s)}>
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton size="small">
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton size="small">
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}

              {paged.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                    <Typography>No services found.</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination footer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2,
            borderTop: "1px solid rgba(0,0,0,0.06)",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography color="text.secondary" variant="h4">
            Showing {filtered.length === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + 1} –{" "}
            {Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton size="large" disabled={page === 1} onClick={handlePrev}>
              <ChevronLeft sx={{ fontSize: 50 }} />
            </IconButton>

            <Typography sx={{ fontWeight: 700 }}>{page}</Typography>

            <IconButton size="large" disabled={page === totalPages} onClick={handleNext}>
              <ChevronRight sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
