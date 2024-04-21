const restaurant = require("../models/restaurantSchema")


const restaurantController={
    addRestaurant:async(req,res)=>{
        const {name,city,governrate,image,num}=req.body
        const newrestaurant=await restaurant.create({name:name,city:city,governrate:governrate,image:image,num:num})
        if(!newrestaurant)
        res.status(400).json({message:"restaurant creation failed"}) 
        res.status(200).json({message:"restaurant created successfully "})
     
    },
    getRestaurant:async(req,res)=>{
        const rest=await restaurant.find()
        res.status(200).send(rest)

    },
    deleteRestaurant: async (req, res) => {
        try {
          
          const deleteRest = await restaurant.findByIdAndDelete(req.params.id);
      
          if (!deleteRest) {
            return res.status(400).json({ message: "Restaurant not found" });
          }
      
          return res.status(200).json({ message: "Restaurant deleted successfully" });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
        }
    
    },
    updateRestaurant: async(req, res) => {
      try { 
        console.log("Update request body:", req.body);
        console.log("Restaurant ID to update:", req.params.id);
          const updatedRestaurant = await restaurant.findByIdAndUpdate( req.params.id , { $set: { ...req.body } },{ new: true })
          if (!updatedRestaurant ) {
              return res.status(404).json({ msg: "restaurant not found" })
          }
          res.json(updatedRestaurant)
      } catch (error) {
          console.log(error)
          res.status(500).json({ error: "error" })

      }
  },  
  
  RechercheRestaurant:async(req, res)=>{
    const { city} = req.body;
        if (city=="tous"){
          const restaurant=await  restaurant.find()
          res.status(200).send(restaurant)

        }
    
        const body = {};
        if (city) {
          body.city = { $regex: city, $options: 'i' };
        }
   
    
        const resturants = await restaurant.find(body);
        
      
        if(!resturants)
        res.status(500).json({ message: "An error occurred" });
        res.json(resturants);
      },
    
      getRestaurantById: async (req, res) => {
        try {
          const restaurantDetails = await restaurant.findById(req.params.id);
          if (!restaurantDetails) {
            return res.status(404).json({ message: 'Restaurant not found' });
          }
          res.status(200).json(restaurantDetails);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      },   

}
module.exports =restaurantController