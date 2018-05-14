jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

// const filterMawning = () => {
//   $('.timeThatExUsuallyGoes').not('.morning').closest('.location').hide();
//   $('.timeThatExUsuallyGoes').filter('.morning').closest('.location').show();
// };

// const filterEvening = () => {
//   $('.timeThatExUsuallyGoes').not('.evening').closest('.location').hide();
//   $('.timeThatExUsuallyGoes').filter('.evening').closest('.location').show();
// };

// const filterAfternoon = () => {
//   $('.timeThatExUsuallyGoes').not('.afternoon').closest('.location').hide();
//   $('.timeThatExUsuallyGoes').filter('.afternoon').closest('.location').show();
// };

// const filterNight = () => {
//   $('.timeThatExUsuallyGoes').not('.after-dark').closest('.location').hide();
//   $('.timeThatExUsuallyGoes').filter('.after-dark').closest('.location').show();
// };

// const allClicks = () => {
//   $('#mawning-button').click(filterMawning);
//   $('evening-button').click(filterEvening);
//   $('afternoon-button').click(filterAfternoon);
//   $('after-dark-button').click(filterNight);
// };
const filterLocations = (e) => {
  const button = $(e.target).html();
  $('#location-div .location-card').show();
  if (button === 'Morning') {
    $('#location-div .location-card').not('.morning').toggle();
  } else if (button === 'Afternoon') {
    $('#location-div .location-card').not('.afternoon').toggle();
  } else if (button === 'Evening') {
    $('#location-div .location-card').not('.evening').toggle();
  } else if (button === 'After Dark') {
    $('#location-div .location-card').not('.after-dark').toggle();
  } else {
    $('#location-div .location-card').show();
  };
};

const searchBar = (e) => {
  if (e.which === 13) {
    const userInput = $(e.target).val();
    $(`#location-div .location-card:not(:icontains(${userInput}))`).hide();
    $(e.target).val('');
  };
};

const bindEvents = () => {
  $('.btn').on('click', filterLocations);
  $('#search').keypress(searchBar);
};

// const categorize = () => {
//   $('#search-input').keypress(function (e) {
//     const find = $('#search-input').val();
//     if (e.which === 13) {
//       $(`#locations .location:not(:icontains(${find}))`).hide();
//     };
//   });
// };

module.exports = bindEvents;
