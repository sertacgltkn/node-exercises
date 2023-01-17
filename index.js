const express = require ("express")
const app = express()

app.set("view engine","ejs")

const products = [
  {id: 1, name: "iphone 14", price: 30000},
  {id: 2, name: "iphone 15", price: 40000},
  {id: 3, name: "iphone 16", price: 50000}
]

app.use("/products/:id", function(req, res) {
  res.render("product-details")
})

app.use("/products", function(req, res) {
  res.render("Products", {
    products: products
  })
})

app.use("/", function(req, res) {
  res.render("index")
})



app.listen(3000, () => {
  console.log("Server is running on port 3000")
})