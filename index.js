import express from "express"
// import axios from "axios"

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs");
  });
  
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/projects", (req, res) => {
  res.render("projects.ejs");
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})

