import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import router from "../routes/router.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(router);
app.use(express.static(join(__dirname, 'public')))

app.listen(3000);
