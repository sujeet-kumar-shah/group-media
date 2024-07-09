const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Set 'views' directory for any views
app.set("views", path.join(__dirname, "public"));

// Set view engine as EJS
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route for login
app.get("/login", (req, res) => {
    res.render("login");
});

// Route for signup
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Route for dashboard
app.get("/dashboard", (req, res) => {
    res.render("dashbord");
});

// Route for handling login POST request (example)
app.post("/login", (req, res) => {
    // Handle login logic
    // On success:
    res.redirect("/dashbord");
});

// Route for handling signup POST request (example)
app.post("/signup", (req, res) => {
    // Handle signup logic
    // On success:
    res.redirect("/dashbord");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});
// Other routes...
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
