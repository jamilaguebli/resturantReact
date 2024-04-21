const restaurantController = require("../controllers/restaurantController")
const isAdmin =require("../middlewares/adminMiddlewares")
const Route=require("express").Router()

Route.post("/addRestaurant",restaurantController.addRestaurant)
Route.get('/getRestaurant',restaurantController.getRestaurant)
Route.delete("/deleteRestaurant/:id",restaurantController.deleteRestaurant)
Route.put("/updateRestaurant/:id",isAdmin,restaurantController.updateRestaurant)
Route.post("/RechercheRestaurant",isAdmin,restaurantController.RechercheRestaurant)
Route.get('/getRestaurant/:id',isAdmin,restaurantController.getRestaurantById);
module.exports=Route