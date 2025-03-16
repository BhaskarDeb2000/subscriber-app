import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, CircularProgress, Typography } from "@mui/material";
import SubscriberCard from "../Components/SubscriberCard";
import { Subscriber } from "../types/type";

const API_URL = "https://core.unelmamail.com/api/v1/subscribers";
const API_TOKEN = import.meta.env.VITE_DEFAULT_API_TOKEN as string;
const LIST_UID = import.meta.env.VITE_DEFAULT_LIST_UID as string;

const SubscriberList: React.FC = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get<Subscriber[]>(API_URL, {
          params: {
            api_token: API_TOKEN,
            list_uid: LIST_UID,
            per_page: 20,
            page: 1,
          },
        });
        setSubscribers(response.data);
      } catch (error) {
        console.log(error);

        setError("Error fetching subscribers");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
      {subscribers.map((subscriber) => (
        <SubscriberCard key={subscriber.id} subscriber={subscriber} />
      ))}
    </Box>
  );
};

export default SubscriberList;
