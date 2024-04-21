const Route=require("express").Router()
const controller=require('../controllers/userController')
const isAuth = require("../middlewares/authMiddleware")

Route.post("/add",controller.add)
Route.post("/registre",controller.registre)
Route.post('/login',controller.login)
Route.get('/me',isAuth,controller.me)
module.exports=Route