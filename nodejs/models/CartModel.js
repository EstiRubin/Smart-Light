import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
        _id: Number,
        nameOfProduct : String, 
        watt : [String],
        images : [String],
        colors : [String],
        lightColors : [String],
        categoryID : [Number],
        IP: Number,
        DIM: String,
        beamAngle: String,
        tags: [String]
    },
  ],
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("carts", cartSchema);
