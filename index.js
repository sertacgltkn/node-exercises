const express = require ("express")
const app = express()

app.use("/products/:id", function(req, res) {
  res.send("Product details " + req.params.id)
})

app.use("/products", function(req, res) {
  res.send("Products")
})

app.use("/", function(req, res) {
  res.send("Home")
})



app.listen(3000, () => {
  console.log("Server is running on port 3000")
})