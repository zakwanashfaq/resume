import Express from "express";
import data from "./data.json" assert { type: "json" };

const PORT = process.env.PORT || 5000;
const app = Express();

app.get("/api", (req, res) => {
    return res.json(data)
})


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));