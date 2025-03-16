import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Import useAuth to access the context

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth(); // Access the handleLogout function from context

  // Handle Logout using context
  const handleLogoutClick = () => {
    handleLogout(); // Call the logout function from context
    navigate("/"); // Redirect to the login page (SignIn)
  };

  // Navigate to Create New Subcriber Page
  const handleCreateSubscriber = () => {
    navigate("/createSubscriber"); // Navigate to create new Subcriber page
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          onClick={() => navigate("/home")}
        >
          Unelmamail Subcriber List
        </Typography>
        <Box>
          <Button
            color="inherit"
            onClick={handleCreateSubscriber}
            sx={{ marginRight: 2 }}
          >
            Create New Subscriber
          </Button>
          <Button color="inherit" onClick={handleLogoutClick}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
