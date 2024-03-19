import express from "express"
import FacilitatorController from "../controllers/facilitator-controller.js"
const routes= express.Router();


routes.post("/facilitator/add",FacilitatorController.createNewFacilitator);
routes.get("/facilitator/list",FacilitatorController.getAllFacilitators);
routes.get("/facilitator/:id",FacilitatorController.getFacilitatorById);
routes.get("/facilitator/email/:email",FacilitatorController.getFacilitatorByEmail);
routes.put("/facilitator/:id",FacilitatorController.updateFacilitator);
routes.delete("/facilitator/:id",FacilitatorController.deleteFacilitator);

export default routes;