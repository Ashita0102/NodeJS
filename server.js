const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Please enter email and password"
        });
    }

    res.json({
        success: true,
        message: `Welcome back! Login successful for ${email}`
    });
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.json({
            success: false,
            message: "Please fill all fields"
        });
    }

    console.log("Contact:", { name, email, message });

    res.json({
        success: true,
        message: "Your message has been sent successfully!"
    });
});

app.post("/feedback", (req, res) => {
    const { name, rating, feedback } = req.body;

    if (!name || !rating || !feedback) {
        return res.json({
            success: false,
            message: "Please complete the feedback form"
        });
    }

    console.log("Feedback:", { name, rating, feedback });

    res.json({
        success: true,
        message: "Thank you for your valuable feedback!"
    });
});

app.listen(PORT, () => {
    console.log(`Hospital website running at http://localhost:${PORT}`);
});