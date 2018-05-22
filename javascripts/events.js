const data = require('./data');
const dom = require('./dom');

jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const filterLocations = (e) => {
  $('.btn').on('click', () => {
    $('#locateMe .location-card').show();
    const button = $(e.target).html();
    if (button === 'Morning') {
      $('#locateMe').not('.Morning').toggle();
    } else if (button === 'Afternoon') {
      $('#locateMe .location-card').not('.Afternoon').toggle();
    } else if (button === 'Evening') {
      $('#locateMe .location-card').not('.Evening').toggle();
    } else if (button === 'After-Dark') {
      $('#locateMe .location-card').not('.After-Dark').toggle();
    }
  });
};

const letsSearch = () => {
  $('#search').keypress((event) => {
    if (event.which === 13) {
      const userInput = $('#search').val();
      $(`#locateMe .location-card:not(:icontains(${userInput}))`).hide();
    }
  });
};

const getButtons = () => {
  $('.getUm').on('click', (e) => {
    const exData = data.getExes();
    const locationData = data.getLocations();
    const currentId = (e.target.id * 1);
    exData.forEach((ex) => {
      if (ex.id === currentId) {
        dom.singleEx(ex);

        const exLocations = [];
        // exLocations
        ex.locationNombre.forEach((nombre) => {
          locationData.forEach((location) => {
            if (nombre === location.locationId) {
              exLocations.push(location);
              dom.singleLocal(exLocations);
              backButton();
              filterLocations();
              letsSearch();
            }
          });
        });
      };
    });
  });
};

const backButton = () => {
  $('#back-btn').on('click', () => {
    data.getAllData().then(() => {
      const exData = data.getExes();
      const locationData = data.getLocations();
      dom.showEx(exData);
      dom.showLocal(locationData, exData);
      getButtons();
    });
  });
};

module.exports = {
  filterLocations,
  letsSearch,
  getButtons,
};
