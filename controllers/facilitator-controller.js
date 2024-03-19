import FacilitatorModel from "../models/facilitator-model.js";

const facilitatorController = {
  createNewFacilitator: async (req, res) => {
    try {
      const newfacilitator = await FacilitatorModel.create(req.body);
      res.status(201).json({
        message: "Facilitator added successfully👍",
        facilitator: newfacilitator,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  getAllFacilitators: async (req, res) => {
    try {
      const getFacilitator = await FacilitatorModel.find();
      res.status(200).json({
        message: "All facilitators retrieved💯",
        facilitator: getFacilitator,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  getFacilitatorById: async (req, res) => {
    try {
      const retrievedFacilitator = await FacilitatorModel.findById(
        req.params.id
      );
      if (!retrievedFacilitator) {
        return res.status(404).json({
          message: "Facilitator not found😢",
        });
      }
      res.status(200).json(retrievedFacilitator);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  getFacilitatorByEmail: async (req, res) => {
    try {
      const retrievedFacilitator = await FacilitatorModel.findOne({
        email: req.params.email,
      });
      if (!retrievedFacilitator) {
        return res.status(404).json({
          message: "Facilitator not found😢",
        });
      }
      res.status(200).json(retrievedFacilitator);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  updateFacilitator: async (req, res) => {
    try {
      const updatedfacilitator = await FacilitatorModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedfacilitator) {
        return res.status(404).json({
          message: "Facilitator not found😢",
        });
      }
      res.status(200).json(updatedfacilitator);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  deleteFacilitator: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedfacilitator = await FacilitatorModel.findByIdAndDelete(id);
      if (!deletedfacilitator) {
        return res.status(404).json({
          message: "Facilitator not found😢",
        });
      }
      res.status(200).json({
        message: "Facilitor deleted successfully👍",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};

export default facilitatorController;
