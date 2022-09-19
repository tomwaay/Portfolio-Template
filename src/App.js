import React from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MusicPlayer from "./music/MusicPlayer";
import MovieDetail from "./pages/MovieDetail";
//router
import { Routes, Route, useLocation } from "react-router-dom";
//global style
import GlobalStyle from "./components/GlobalStyle";
//anim
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/musicplayer" exact element={<MusicPlayer />} />
          <Route path="/work/:id" exact element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
