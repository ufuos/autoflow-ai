import axios from "axios";

// POST /api/ai/generate
export const generateAIResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    // Example using OpenAI API
    const aiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const result = aiResponse.data.choices[0].message.content;

    // 🔥 Send log to n8n webhook (Docker service name)
    await axios.post(
      process.env.N8N_WEBHOOK_URL || "http://n8n:5678/webhook/autoflow-ai/log",
      {
        user: req.user.email,
        prompt,
        response: result,
      }
    );

    res.json({ response: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};