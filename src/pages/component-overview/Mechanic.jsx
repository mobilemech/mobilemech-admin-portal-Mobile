
// Mechanic.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
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
  Avatar,
  Typography,
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



const createMechanic = (id) => {
  const sampleNames = [
    "Adeola James", "John Doe", "Sarah Olu", "Michael Aden", "Emily Chika",
    "David Okoro", "Grace Nnaji", "Paul Eze", "Ruth Ibe", "Samuel Kalu",
    "Mary Afolabi", "Joseph Uche", "Linda Aina", "Peter Obi", "Ngozi Eze",
    "Ifeanyi Mba", "Blessing Ire", "Tunde Bakare", "Aisha Bello", "Chidi Nwosu",
    "Yvonne Ojo", "Femi Ade", "Tom Johnson", "Adaobi Oke", "Nnamdi Eze",
    "Sade Funke", "Kemi Ajayi", "Ibrahim Musa", "Hannah Peters",
    "Chris Amadi", "Kola Aina", "Joy Okonkwo", "Mark Chuks", "Lilian Ayo",
    "Victor Nkem", "Esther Omot", "Olaoluwa Taiwo", "Tina Emeka", "Bimbo Salami",
  ];

  // Random avatar pool
  const avatars = [
    "https://randomuser.me/api/portraits/men/11.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/women/32.jpg",
    "https://randomuser.me/api/portraits/men/44.jpg",
    "https://randomuser.me/api/portraits/women/45.jpg",
    "https://randomuser.me/api/portraits/men/53.jpg",
    "https://randomuser.me/api/portraits/women/54.jpg",
    "https://randomuser.me/api/portraits/men/62.jpg",
    "https://randomuser.me/api/portraits/women/63.jpg",
    "https://randomuser.me/api/portraits/men/71.jpg",
    "https://randomuser.me/api/portraits/women/72.jpg",
    "https://randomuser.me/api/portraits/men/83.jpg",
    "https://randomuser.me/api/portraits/women/84.jpg",
    "https://randomuser.me/api/portraits/men/91.jpg",
    "https://randomuser.me/api/portraits/women/92.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
    "https://randomuser.me/api/portraits/women/6.jpg",
    "https://randomuser.me/api/portraits/men/7.jpg",
    "https://randomuser.me/api/portraits/women/8.jpg",
  ];

  const name = sampleNames[id % sampleNames.length];
  const email = `${name.toLowerCase().replace(/\s+/g, ".")}@gmail.com`;
  const phone = `0902${Math.floor(100000 + (id * 37) % 900000)}`;
  const status = id % 5 === 0 ? "Inactive" : "Active";

  return {
    id,
    name,
    email,
    phone,
    status,
    role: "Mechanic",
    avatar: avatars[id % avatars.length],
  };
};



const MECHANICS = Array.from({ length: 40 }, (_, i) => createMechanic(i + 1));

export default function Mechanic() {

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const zoom = useMemo(() => {
    if (width <= 768) return 0.55;
    if (width <= 1200) return 0.8;
    if (width <= 1600) return 0.5;
    return 0.7;
  }, [width]);

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








  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 15;


  //  FILTERING

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return MECHANICS.filter((m) => {
      if (statusFilter !== "All" && m.status !== statusFilter) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.phone.toLowerCase().includes(q)
      );
    });
  }, [query, statusFilter]);


  //  PAGINATION

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages]);

  const paged = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, page]);





  //  HANDLERS

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <Box sx={{ width: "100%", px: 3, py: 1 }}>


      <Typography variant="h2" sx={{ fontWeight: 800 }}>
        Mechanics
      </Typography>







      {/* Top Controls */}
      <Grid container spacing={2} alignItems="center" sx={{ mb: 3, mt: 3 }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<AddIcon style={{ fontSize: 30 }} />}
            sx={{ fontSize: 20, py: 1, px: 10, bgcolor: "#F97316", "&:hover": { bgcolor: "#ea7512" } }}
          >
            ADD
          </Button>

          <TextField
            placeholder="Search name, email or phone"
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
                //   bgcolor: "#F5F5F5",
                borderRadius: 4,
                height: 60,
                fontSize: 18,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "0.5px solid #c2c2c2ff",
                },
                "&:hover": {
                  //   bgcolor: "#EFEFEF", 
                },
                "&.Mui-focused": {
                  // bgcolor: "#EFEFEF",
                  boxShadow: "none",
                },
              },
            }}
          />



        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: { xs: "flex-start", md: "flex-end" },
          }}
        >
          <Select
            size="small"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
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
            <MenuItem value="All">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </Grid>



      </Grid>

      {/* TABLE */}
      <Paper elevation={0} sx={{ borderRadius: 2 }}>
        <TableContainer sx={{ overflowX: "auto" }}>
          <Table size="small" sx={{ minWidth: 900 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>NAME</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>EMAIL</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>PHONE</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>STATUS</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>ROLE</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 16 }}>
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paged.map((m) => (
                <TableRow key={m.id} hover>
                  <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={m.avatar} sx={{ width: 60, height: 60 }} />

                    <Typography sx={{ fontWeight: 600, fontSize: 18 }}>{m.name}</Typography>
                  </TableCell>

                  <TableCell sx={{ fontSize: 18 }}>{m.email}</TableCell>

                  <TableCell sx={{ fontSize: 18 }}>{m.phone}</TableCell>

                  <TableCell>
                    {m.status === "Active" ? (
                      <Chip
                        label="Active"
                        size="large"
                        sx={{ bgcolor: "#FFF7ED", color: "#E87809", fontWeight: 700, fontSize: 17 }}
                      />
                    ) : (
                      <Chip
                        label="Inactive"
                        size="large"
                        sx={{ bgcolor: "#F3F4F6", color: "#6B7280", fontWeight: 700 }}
                      />
                    )}
                  </TableCell>

                  <TableCell sx={{ fontSize: 18 }}>{m.role}</TableCell>

                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton size="small">
                        <Visibility fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton size="small">
                        <Edit fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton size="small">
                        <Delete fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}

              {paged.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                    <Typography sx={{ fontSize: 18 }}>No mechanics found.</Typography>
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
            borderTop: "1px solid rgba(0,0,0,0.08)",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="h4" color="text.secondary">
            Showing {filtered.length === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + 1} –{" "}
            {Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton size="large" disabled={page === 1} onClick={handlePrev}>
              <ChevronLeft style={{ fontSize: 30, color: 'black' }} />
            </IconButton>

            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>{page}</Typography>

            <IconButton size="small" disabled={page === totalPages} onClick={handleNext}>
              <ChevronRight style={{ fontSize: 30, color: 'black' }} />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}









