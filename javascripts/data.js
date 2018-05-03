const loadEx = require('./ex');
const loadLocations = require('./locations');
const showAll = require('./Dom');

const whenExLoad = (data) => {
  $('#exPast').append(showAll.showEx(data.ex));
  console.log(data);
};

const whenLocationsLoad = (data) => {
  $('#locateMe').append(showAll.showLocal(data.locations));
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
