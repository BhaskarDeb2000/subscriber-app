import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubscribeList from "./pages/SubscriberList";
import AddSubscriber from "./pages/AddSubscriber";
import { AuthProvider, useAuth } from "./contexts/AuthContext"; // Import useAuth
import Navbar from "./Components/NavBar";

// A wrapper component to conditionally render Navbar
const AppWithNavbar: React.FC = () => {
  const { isLoggedIn } = useAuth(); // Get the isLoggedIn state from context

  return (
    <Router>
      {/* Only render Navbar if the user is logged in */}
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<SubscribeList />} />
        <Route path="/createSubscriber" element={<AddSubscriber />} />
      </Routes>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppWithNavbar /> {/* Wrap everything inside AppWithNavbar */}
    </AuthProvider>
  );
};

export default App;
