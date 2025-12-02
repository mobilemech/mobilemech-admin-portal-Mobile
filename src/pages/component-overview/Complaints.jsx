
import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Button,
  Chip,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import ComplaintDetailsModal from "./Modals/ComplaintDetailsModal"

const STATUS_OPTIONS = ["All", "Resolved", "Pending"];

// ------------------------ MOCK DATA ------------------------
const generateMockData = () => {
  const names = ["Tolu M.", "Femi K.", "Sarah O.", "John B.", "Musa A."];
  const mechanics = ["M. Yusuf", "A. Bello", "K. Danjuma", "R. Hakeem", "S. Umar"];
  const issues = [
    "Mechanic didn’t show up",
    "Overcharged for service",
    "Service was delayed",
    "Incorrect diagnosis",
    "Poor communication",
  ];

  const data = [];
  for (let i = 1; i <= 60; i++) {
    data.push({
      complaintId: `CMP-${1700 + i}`,
      carOwner: names[i % names.length],
      mechanic: mechanics[i % mechanics.length],
      issue: issues[i % issues.length],
      jobId: `JOB-${2600 + i}`,
      date: `June ${((i % 28) + 1).toString()}`,
      status: i % 2 === 0 ? "Resolved" : "Pending",
    });
  }
  return data;
};

const complaintsData = generateMockData();

export default function Complaint() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;




    const [selectedComplaint, setSelectedComplaint] = useState(null);
     const [openModal, setOpenModal] = useState(false);
  
  const handleView = (complaint) => {
    setSelectedComplaint(complaint);
    setOpenModal(true);

    console.log(complaint)
  };
  
  



    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

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
















  // ------------------------ FILTERING & SEARCH ------------------------
  const filteredData = useMemo(() => {
    return complaintsData.filter((item) => {
      const matchesQuery =
        item.complaintId.toLowerCase().includes(query.toLowerCase()) ||
        item.carOwner.toLowerCase().includes(query.toLowerCase()) ||
        item.mechanic.toLowerCase().includes(query.toLowerCase()) ||
        item.issue.toLowerCase().includes(query.toLowerCase()) ||
        item.jobId.toLowerCase().includes(query.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ? true : item.status === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [query, statusFilter]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, page]);

  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
  

      {/* ---------------- SEARCH & FILTER ---------------- */}
      <Box
        sx={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap",
          alignItems: "center",
          mb: 3,
        }}
      >
        {/* Search */}
        <TextField
          placeholder="Search complaint, mechanic, car owner or job ID"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          sx={{
            width: { xs: "100%", md: "480px", lg: "550px" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: 3,
              height: 55,
            },
          }}
        />

    
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
            <MenuItem value="All">All Categories</MenuItem>
             {STATUS_OPTIONS.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
          </Select>




              {/* ---------------- BUTTONS ---------------- */}
      <Box sx={{ display: "flex", gap: 2,  }}>
        <Button variant="outlined" sx={{ borderRadius: "25px", px: 5,py:1.1, fontSize:16, color:'black', borderColor:'#d46800', "&:hover": { backgroundColor: "#d46800", color:'white', borderColor:'#d46800' }, }}>
          Request Allocation
        </Button>
        <Button variant="outlined" sx={{ borderRadius: "25px", px: 5, py:1.1, fontSize:16, color:'black', borderColor:'#d46800',    "&:hover": { backgroundColor: "#d46800", color:'white', borderColor:'#d46800' }, }}>
          Service Pricing
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "25px",
            px: 5,
            py:1.1,
            fontSize:16,
            backgroundColor: "#EA7400",
            "&:hover": { backgroundColor: "#d46800" },
          }}
        >
          Issue Resolution
        </Button>
      </Box>
      </Box>






      
      
        
            <ComplaintDetailsModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        complaint={selectedComplaint}
      />
       









      {/* ---------------- TABLE ---------------- */}
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Complaint ID</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Car Owner</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Mechanic</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Issue</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Job ID</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Action</TableCell>
            </TableRow>
          </TableHead>

  

          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.complaintId}>
                <TableCell sx={{ fontSize: 18 }}>{row.complaintId}</TableCell>
                <TableCell         sx={{ fontSize: 18 }}>{row.carOwner}</TableCell>
                <TableCell         sx={{ fontSize: 18}}>{row.mechanic}</TableCell>
                <TableCell         sx={{ fontSize: 18 }}>{row.issue}</TableCell>
                <TableCell         sx={{ fontSize: 18 }}>{row.jobId}</TableCell>
                <TableCell         sx={{ fontSize: 18 }}>{row.date}</TableCell>

                <TableCell>
                  <Chip
                    label={row.status}
                    sx={{
                      backgroundColor:
                        row.status === "Resolved" ? "#CCF2D3" : "#FFF3CD",
                      color:
                        row.status === "Resolved" ? "#1D7A33" : "#B38700",
                      fontWeight: 600,
                      fontSize:18

                    }}
                  />
                </TableCell>

                <TableCell>
                  <Button
                  onClick={()=>handleView(row)}
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#EA7400",
                      "&:hover": { backgroundColor: "#d46800" },
                      borderRadius: 2,
                      textTransform: "none",
                    }}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {paginatedData.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center" sx={{ py: 5 }}>
                  No complaints found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ---------------- PAGINATION ---------------- */}
   <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
  <Pagination
    count={Math.ceil(filteredData.length / rowsPerPage)}
    page={page}
    onChange={(_, value) => setPage(value)}
    shape="rounded"
    sx={{
      "& .MuiPaginationItem-root": {
        fontSize: "1.4rem",   
        minWidth: "42px",
        height: "42px",
      },
      "& .MuiPaginationItem-icon": {
        fontSize: "1.9rem",    
      }
    }}
  />
</Box>

    </Box>
  );
}

