import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { Subscriber } from "../types/type";

interface SubscriberCardProps {
  subscriber: Subscriber;
}

const SubscriberCard: React.FC<SubscriberCardProps> = ({ subscriber }) => {
  const { email, FIRST_NAME, LAST_NAME, status } = subscriber;

  return (
    <Card
      sx={{
        width: 250,
        boxShadow: 3,
        borderRadius: 2,
        padding: 10,
        marginTop: 10,
      }}
    >
      <CardContent>
        <Avatar sx={{ width: 56, height: 56, marginBottom: 2 }}>
          {FIRST_NAME?.charAt(0) || "?"}
        </Avatar>
        <Typography variant="h6">
          {FIRST_NAME} {LAST_NAME}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {email}
        </Typography>
        <Typography
          variant="body2"
          color={status === "subscribed" ? "green" : "red"}
        >
          {status.toUpperCase()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SubscriberCard;
