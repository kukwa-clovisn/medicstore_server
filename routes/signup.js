const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  return res.status(201).json(req.body);
});

module.exports = router;
