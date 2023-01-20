import { Router } from "express";

const route = Router();
// Create an asnwer to any path URL.
route.get("/", (req, res) => {
  res.render(`index`, {title: 'Home'});
});
route.get("/about", (req, res) => {
  res.render(`about`, {title: 'About this page'});
});
route.get("/contact", (req, res) => {
  res.render(`contact`, {title: 'Contact form'});
});

export default route;
