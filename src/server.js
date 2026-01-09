import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
const allowedOrigins = [
  "http://localhost:3000",
  "https://users-client-nu.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
const PORT = process.env.PORT || 5000;

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
