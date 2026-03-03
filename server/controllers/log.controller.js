import Log from "../models/log.model.js";
import axios from "axios";

// POST /api/logs
export const createLog = async (req, res) => {
  try {
    const { message } = req.body;

    const log = await Log.create({
      user: req.user._id,
      message,
    });

    // Send to n8n
    await axios.post(
      process.env.N8N_WEBHOOK_URL || "http://n8n:5678/webhook/autoflow-ai/log",
      {
        user: req.user.email,
        message,
      }
    );

    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/logs
export const getAllLogs = async (req, res) => {
  const logs = await Log.find().populate("user", "name email");
  res.json(logs);
};

// GET /api/logs/:id
export const getLogById = async (req, res) => {
  const log = await Log.findById(req.params.id);
  res.json(log);
};

// DELETE /api/logs/:id
export const deleteLog = async (req, res) => {
  await Log.findByIdAndDelete(req.params.id);
  res.json({ message: "Log deleted" });
};