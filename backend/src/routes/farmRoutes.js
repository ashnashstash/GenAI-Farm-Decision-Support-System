const express = require("express");

const router = express.Router();

const {
  createFarm,
  getAllFarms,
  getFarmById
} = require("../controllers/farmController");

router.post("/", createFarm);

router.get("/", getAllFarms);

router.get("/:id", getFarmById);

module.exports = router;