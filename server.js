const express = require("express");
const arg = process.argv;
const app = express();
const pichu = require("./routes/pokedex.json");


app.get("/", (req, res) => {
    return res.json(pichu);
});

app.get("/api/pokemon/", (req, res) => {
    return res.json(pichu);
});

app.get("/pokemon/:id", (req, res) => {
    const pokeball = pichu.find((c) => c.id == parseInt(req.params.id));
    if (!pokeball)
        return res.status(404).send("This pokemon doesn't exist");
    

    res.send(pokeball);
})

app.listen(arg[2], function() {
  console.log(
    "Server is listening on http://localhost:" + arg[2]
  );
});