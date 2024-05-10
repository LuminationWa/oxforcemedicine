import mongoose, { Schema } from "mongoose";

const statusSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Status = mongoose.models.Status || mongoose.model("Selection", statusSchema);

export default Status;