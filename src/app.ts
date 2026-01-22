import "dotenv/config";
import express from "express";
import userRoutes from "./routes/user.router";

const app = express();

app.use(express.json());
app.use(userRoutes);

console.log(process.env.DATABASE_URL)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});