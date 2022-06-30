const express = require ("express");
const { restart } = require("nodemon");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server already http://localhost:${3000}`);
});

app.get("/car", (req, res) => {
    res.status(200).send({
        car: "Toyota",
        type: "Avanza"
    })
});

app.post("/car/:id", (req, res) => {
    const { id } = req.params;
    const { type } = req.body;

    if (!type) {
        res.status(418).send({ message: "choose the appropriate model!"})
    }

    res.send({
        car: `Toyota with model ${type} and ID of ${id}`, 
    });
});