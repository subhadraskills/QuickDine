import {Router } from "express";
import {protect} from "../middlewares/auth.js";
import { cancelMyBooking, createBooking, getMyBooking } from "../controllers/bookingController.js";

const bookingRouter= Router();

bookingRouter.post("/", protect, createBooking)
bookingRouter.post("/my", protect, getMyBooking)
bookingRouter.post("/:id/cancel", protect, cancelMyBooking)

export default bookingRouter;
