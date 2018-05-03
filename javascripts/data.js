const loadEx = require('./ex');
const loadLocations = require('./locations');

const whenExLoad = (data) => {
  console.log(data);
};

const whenLocationsLoad = (data) => {
  console.log(data);
};

const whenThingsFail = (error) => {
  console.error('Wrong', error);
};

const initializer = () => {
  loadEx(whenExLoad, whenThingsFail);
  loadLocations(whenLocationsLoad, whenThingsFail);
};

module.exports = initializer;
