jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const filterLocations = () => {
  $('btn').on('click', () => {
    $('#locateMe .location-card').show();
    const button = $(event.target).html();
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

module.exports = {
  filterLocations,
  letsSearch,
};
