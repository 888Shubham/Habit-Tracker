import express from "express";
import HabitController from "../controllers/habits.controller.js";

//create an instance of habitController
const habitController = new HabitController();

//Creating Router
const habitRouter = express.Router();

//Routes
habitRouter.get('/', (req, res)=>{
    habitController.getHomePage(req, res)
});

habitRouter.get('/list', (req, res)=>{
    habitController.getHabitList(req, res)
});
habitRouter.get('/record/:id', (req, res)=>{
    habitController.getRecordPage(req, res)
});
habitRouter.get('/add-habit', (req, res)=>{
    habitController.getAddHabitPage(req, res);
});
habitRouter.get('/change-status/:id', (req, res)=>{
    habitController.changeStatus(req, res)
});
habitRouter.post('/add-habit',(req, res)=>{
    habitController.addHabit(req, res)
});
export default habitRouter;
