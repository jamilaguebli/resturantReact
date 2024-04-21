const express = require('express')
const app = express()
require("dotenv").config()
const port=process.env.Port
const Connect=require('./helpers/dbConnect')
const userRoute=require('../backend/routes/userRoute')
const cors=require('cors')
const restaurantRoute=require('../backend/routes/restaurantRoute')

app.use(cors())
app.use(express.json())

app.use('/users',userRoute)
app.use('/resturants',restaurantRoute)
 Connect()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))