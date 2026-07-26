import { Router } from "express";
import { approveRestaurant, getAdminStats, getAllRestaurants } from "../controllers/adminContoller.js";


const adminRouter= Router()

adminRouter.get("/restaurants", getAllRestaurants)
adminRouter.put("/restaurants/:id/approve", approveRestaurant)
adminRouter.get("/stats", getAdminStats)

export default adminRouter