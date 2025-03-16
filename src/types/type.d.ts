export interface Subscriber {
  id: number;
  email: string;
  status: "subscribed" | "unsubscribed";
  FIRST_NAME: string;
  LAST_NAME: string;
}