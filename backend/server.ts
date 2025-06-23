import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//mongoose schema for contact form

interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const contactSchema = new mongoose.Schema<IContactForm>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true }
});

const Contact = mongoose.model<IContactForm>("Contact", contactSchema); // ✅ New model


app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contactEntry = new Contact({ name, email, subject, message }); // ✅ Use Contact model
    await contactEntry.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({ error: "Failed to save contact form data" });
  }
});

// Mongoose schema and model
interface IForm {
  name: string;
  email: string;
  phone: string;
  location: string;
  rating: number;
  message: string;
}

const formSchema = new mongoose.Schema<IForm>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  message: { type: String, required: true }
});

const Form = mongoose.model<IForm>("Form", formSchema);


// ✅ Avoid strict typing here!
app.post("/api/saveForm", async (req, res) => {
  try {
    const { name, email, phone, location, rating, message } = req.body;

    const form = new Form({ name, email, phone, location, rating, message });
    await form.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ error: "Failed to save form data" });
  }
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
