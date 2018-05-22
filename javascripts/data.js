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

// let exesData = [];
// let locationsData = [];

// const exJSON = () => {
//   return new Promise((resolve, reject) => {
//     $.get('../db/ex.json')
//       .done((data) => {
//         resolve(data.exes);
//       })
//       .fail((error) => {
//         reject('oops!', error);
//       });
//   });
// };

// const locationJSON = () => {
//   return new Promise((resolve, reject) => {
//     $.get('../db/locations.json')
//       .done((data) => {
//         resolve(data.locations);
//       })
//       .fail((error) => {
//         reject('oops!', error);
//       });
//   });
// };

// const getAllData = () => {
//   return Promise.all([exJSON(), locationJSON(),])
//     .then((results) => {
//       exesData = results[0];
//       locationsData = results[1];
//     })
//     .catch((err) => {
//       console.error('Oops there was an error', err);
//     });
// };

// const getExes = () => {
//   return exesData;
// };

// const getLocations = () => {
//   return locationsData;
// };

// module.exports = {
//   getAllData,
//   getExes,
//   getLocations,
// };
