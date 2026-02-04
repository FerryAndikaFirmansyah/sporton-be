import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || "5001";
const MONGO_URI = process.env.MONGO_URI || "no-mongo-uri";

mongoose
  .connect(MONGO_URI, {
    family: 4, // Force IPv4 (avoids IPv6 handshake issues)
    authSource: "admin", // Explicitly tell it where to look for the user
    retryWrites: true,
  })
  .then(() => {
    console.log("connected to mongodb");
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("eror to connect"));
