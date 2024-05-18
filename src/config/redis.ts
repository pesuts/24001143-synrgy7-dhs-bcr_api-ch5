import { createClient } from "redis";

const client = createClient({
  url: "redis://127.0.0.1:6379",
  socket: {
    connectTimeout: 5000,
  },
});

client.connect().catch((err) => console.log(err))

export default client;