const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const burgers = { burgers: data };
    console.log(burgers);
    res.render("index", burgers);
    //res.json(burgers);
  });
});

router.post("/", (req, res) => {
  burger.insertOne(req.body.burger_name, () => {
    res.status(200).json({ success: true, message: "burger added!" });
  });
});

router.put("/:id", (req, res) => {
  burger.updateOne(req.params.id, () => {
    res.status(200).json({ success: true, message: "devoured status updated!" });
  });
});

module.exports = router;
