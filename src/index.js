import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import router from "../routes/router.js";

const PORT = process.env.PORT || 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(router);
app.use(express.static(join(__dirname, 'public')))
// Add a 404 error page.
app.use((req, res)=>{
  res.status(404).render('404', {title: 'Error 404'});
});

app.listen(PORT);

