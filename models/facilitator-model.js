import mongoose from "mongoose";

const FacilitatorSchema =  new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    nationalId: {
        type: String,
        required: true,
        unique: true,
        length: 16,
    },
    gender: {
        type: String,
        required: true,
        enum: {
            values: ['Male', 'Female'],
            message:'Gender must be either Male or Female'
        }
    }
}, {
    timestamps: true,
});

const FacilitatorModel = mongoose.model('facilitator', FacilitatorSchema)

export default FacilitatorModel;