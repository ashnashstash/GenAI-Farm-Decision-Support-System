const farmService = require("../services/farmService");

const createFarm = (req, res) => {
  try {
    const {
      farmerName,
      farmName,
      location,
      soilType,
      area
    } = req.body;

    if (!farmerName || !farmName || !location) {
      return res.status(400).json({
        success: false,
        message: "farmerName, farmName and location are required"
      });
    }

    const farm = farmService.createFarm({
      farmerName,
      farmName,
      location,
      soilType,
      area
    });

    res.status(201).json({
      success: true,
      message: "Farm created successfully",
      farm
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create farm",
      error: error.message
    });
  }
};

const getAllFarms = (req, res) => {
  try {
    const farms = farmService.getAllFarms();

    res.status(200).json({
      success: true,
      count: farms.length,
      farms
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch farms",
      error: error.message
    });
  }
};

const getFarmById = (req, res) => {
  try {
    const farm = farmService.getFarmById(req.params.id);

    if (!farm) {
      return res.status(404).json({
        success: false,
        message: "Farm not found"
      });
    }

    res.status(200).json({
      success: true,
      farm
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch farm",
      error: error.message
    });
  }
};

module.exports = {
  createFarm,
  getAllFarms,
  getFarmById
};