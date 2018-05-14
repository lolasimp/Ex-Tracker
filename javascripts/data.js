const loadEx = require('./ex');
const loadLocations = require('./locations');
const showAll = require('./Dom');
const events = require('./events');

const whenLocationsLoad = (data) => {
  // $('#locateMe').append(showAll.showLocal(data.locations));
  $('#locateMe').html(showAll.showLocal(data.locations));
  events.filterLocations();
  events.letsSearch();
};

const whenExLoad = (data) => {
  $('#exPast').append(showAll.showEx(data.ex));
};

const whenThingsFail = (error) => {
  console.error('Wrong', error);
};

const initializer = () => {
  loadEx(whenExLoad, whenThingsFail);
  loadLocations(whenLocationsLoad, whenThingsFail);
};

module.exports = initializer;
