let farms = [];

let nextId = 1;

const createFarm = (farmData) => {
  const farm = {
    id: nextId++,
    farmerName: farmData.farmerName,
    farmName: farmData.farmName,
    location: farmData.location,
    soilType: farmData.soilType,
    area: farmData.area,
    createdAt: new Date()
  };

  farms.push(farm);

  return farm;
};

const getAllFarms = () => {
  return farms;
};

const getFarmById = (id) => {
  return farms.find(farm => farm.id === Number(id));
};

module.exports = {
  createFarm,
  getAllFarms,
  getFarmById
};