import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    hour: {
      type: Number,
      required: true,
      min: 1,
      max: [100, "Hey Boss too much Hour"],
    },
    type: {
      type: String,
      default: "entry",
      enum: ["entry", "bad"],
    },
  },
  {
    timestamps: true,
  }
);
const TaskCollection = mongoose.model("Task", taskSchema);

export const insertTask = (taskobj) => {
  return TaskCollection(taskobj).save();
};
export const getTask = () => {
  return TaskCollection.find();
};
export const UpdateTask = (id, rest) => {
  return TaskCollection.findByIdAndUpdate(id, rest);
};
export const deleteTask = (ids) => {
  return TaskCollection.deleteMany({ _id: { $in: ids } });
};
