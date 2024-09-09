import express from "express";
import {
  deleteTask,
  getTask,
  insertTask,
  UpdateTask,
} from "../models/taskModels/taskSchema.js";
const router = express.Router();

// router.all("/", (req, res, next) => {
//   // do your code
//   //   res.json({
//   //     status: "suceess",
//   //     message: "Response from all",
//   //   });
//   next();
// });

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await insertTask(req.body);
    result?._id
      ? // do your code
        res.json({
          status: "suceess",
          message: "Sucessfully the task is added",
        })
      : res.json({
          status: "error",
          message: "Unable to add the task",
        });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res, next) => {
  // do your code
  try {
    const tasks = await getTask();
    res.json({
      status: "suceess",
      message: "Get the posted task",
      tasks,
    });
  } catch (error) {
    const tasks = await getTask();
    res.json({
      status: "error",
      message: error.message,
      tasks,
    });
  }
});

router.patch("/", async (req, res, next) => {
  // do your code
  try {
    const { _id, ...rest } = req.body;
    console.log(req.body);
    const result = await UpdateTask(_id, rest, { new: true });
    console.log(result);
    result?._id
      ? res.json({
          status: "suceess",
          message: "Update has been done sucessfully",
        })
      : res.json({
          status: "suceess",
          message: "unable to update",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", async (req, res, next) => {
  // do your code
  try {
    // const { _id } = req.params;
    const result = await deleteTask(req.body);
    console.log(result);
    result?.deletedCount
      ? res.json({
          status: "suceess",
          message: "Response from Delete",
          result,
        })
      : res.json({
          status: "error",
          message: "Unable to delete",
          result,
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
