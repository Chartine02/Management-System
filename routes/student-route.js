import express from "express"
import studentController from "../controllers/student-controller.js"
const route= express.Router();


route.post("/student/add",studentController.createNewStudent);
route.get("/student/list",studentController.getAllStudents)
route.get("/student/:id",studentController.getStudentById)
route.get("/student/email/:email",studentController.getStudentByEmail)
route.put("/student/:id",studentController.updateStudent);
route.delete("/student/:id",studentController.deleteStudent)

export default route;