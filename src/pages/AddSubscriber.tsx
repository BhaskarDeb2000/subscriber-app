import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

const API_URL = "https://core.unelmamail.com/api/v1/subscribers";
const API_TOKEN = import.meta.env.VITE_DEFAULT_API_TOKEN as string;
const LIST_UID = import.meta.env.VITE_DEFAULT_LIST_UID as string;

const AddSubscriber: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError("");

    try {
      const response = await axios.post(API_URL, {
        api_token: API_TOKEN,
        list_uid: LIST_UID,
        EMAIL: email,
        FIRST_NAME: firstName,
        LAST_NAME: lastName,
      });

      if (response.status === 200) {
        setSuccess(true);
        setEmail("");
        setFirstName("");
        setLastName("");
      }
    } catch (err) {
      console.log(err);
      setError("Failed to add subscriber. Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: 400,
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" mb={2}>
        Add Subscriber
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Add Subscriber"}
        </Button>
      </form>

      {success && (
        <Alert severity="success" sx={{ marginTop: 2 }}>
          Subscriber added successfully!
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default AddSubscriber;
