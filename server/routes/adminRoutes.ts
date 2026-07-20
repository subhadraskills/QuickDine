import { Router } from "express";
import { approveRestaurant, getAdminStats, getAllRestaurants } from "../controllers/adminContoller.js";


const adminRouter= Router()

adminRouter.get("/restaurant", getAllRestaurants)
adminRouter.put("/restaurants/:id/approve", approveRestaurant)
adminRouter.get("/stats", getAdminStats)

export default adminRouter