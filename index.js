const express = require ("express")
const app = express()

app.set("view engine","ejs")

app.use("/products/:id", function(req, res) {
  res.render("product-details")
})

app.use("/products", function(req, res) {
  res.render("Products")
})

app.use("/", function(req, res) {
  res.render("index")
})



app.listen(3000, () => {
  console.log("Server is running on port 3000")
})