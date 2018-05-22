const data = require('./data');
const dom = require('./dom');
const events = require('./events');

const initializer = () => {
  data.getAllData().then(() => {
    const exData = data.getExes();
    const locationData = data.getLocations();
    dom.showEx(exData);
    dom.showLocal(locationData, exData);
    events.getButtons();
  });
};

module.exports = initializer;
