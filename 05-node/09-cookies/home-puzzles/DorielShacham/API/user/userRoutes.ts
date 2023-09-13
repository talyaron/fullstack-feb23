
import {addUser,logIn,getLoggedInUser,logOut,allUsers,deleteUser,updateUser,getUserDetails} from "./userCont";
import express from "express";
import { isAdmin } from "./userMiddleware";

const router = express.Router();
export default router

router
.post("/add-user", addUser)
.post("/log-in", logIn)
.get("/get-log-in-user", getLoggedInUser)
.post("/log-out",logOut)
.get("/get-all-users",isAdmin ,allUsers) 
.put("/update-user", updateUser) // Use a PUT request to update a user
.delete("/delete-user", deleteUser) // Use a DELETE request to delete a user
.get("/get-user-details", getUserDetails);

