import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import { Actors, MovieInformation, Movies, Navbar, Profile } from "./index";


const app = () => {
  
  return (
    <Box sx={{
      display: 'flex',
      height: '100%',
      backgroundColor: 'pink'
    }}>
      <CssBaseline />
      
      <Navbar />
      <main className="content">
        <div className="toolbar"></div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </Box>
  );
};

export default app;
