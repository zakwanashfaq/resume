import Express from "express";

const PORT = 5600;
const app = Express();

app.get("/api", (req, res) => {
    return res.json({message: "Api Init"})
})


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));