const path = require("path")
const express = require("express")
const hbs = require("hbs")

const app = express()
const port = process.env.PORT || 3000
const mapKey = process.env.mapKey

//Definie paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) =>{
  res.render("index", {
    title: "Etusivu",
    link_active_kotisivu: "active"
  })
})

app.get("/hinnasto", (req, res) =>{
  res.render("hinnasto", {
    title: "Hinnasto",
    link_active_hinnasto: "active"
  })
})

app.get("/yhteystiedot", (req, res) =>{
  res.render("yhteystiedot", {
    title: "Yhteystiedot",
    link_active_yhteystiedot: "active",
    mapKey: mapKey
  })
})

app.listen(port, () => {
  console.log("Server is up on port " + port)
})
