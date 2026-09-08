const farmModel = require("../models/farmModel");

const createFarm = (farmData) => {
  return farmModel.createFarm(farmData);
};

const getAllFarms = () => {
  return farmModel.getAllFarms();
};

const getFarmById = (id) => {
  return farmModel.getFarmById(id);
};

module.exports = {
  createFarm,
  getAllFarms,
  getFarmById
};