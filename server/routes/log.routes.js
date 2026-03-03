import express from "express";
import {
  createLog,
  getAllLogs,
  getLogById,
  deleteLog,
} from "../controllers/log.controller.js";

import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// POST /api/logs
router.post("/", protect, createLog);

// GET /api/logs
router.get("/", protect, getAllLogs);

// GET /api/logs/:id
router.get("/:id", protect, getLogById);

// DELETE /api/logs/:id
router.delete("/:id", protect, deleteLog);

export default router;