const showEx = (exes) => {
  let exString = '';
  exString += `<div class="container-fluid">`;
  exString +=  `<div class="row">`;
  exString +=   `<div class="text-center">`;
  exString +=    `<img class="ex=pic" src="${exes[0].img} width="20%">`;
  exString +=   `</div>`;
  exString +=   `<div class="col-sm-4">`;
  exString +=    `<h2>Name: ${exes[0].name}</h2>`,
  exString +=    `<span>Age:${exes[0].age}</span>`;
  exString +=    `<p><h3>Flaws:</h3>${exes[0].flaws}</p>`;
  exString +=   `</div>`;
  exString +=  `</div>`;
  exString += `</div>`;
  return exString;
};

// const showLocal = (locations) => {
//   let locoString = '';
//   locoString += `<div class="container-fluid">`;
//   locoString +=  `<div class="row">`;
//   locations.forEach((location) => {
//     locoString +=  `<div class="col-md-4 col-md-4">`;
//     locoString +=    `<img class="loco-pic" src="${location.localImg}">`;
//     locoString +=     `<h2> ${location.Name}</h2>`;
//     locoString +=       `<div class='panel-body location-card'>`;
//     locoString +=      `<p>${location.locationlocationAddress}</p>`;
//     locoString +=       `<h3 class="timeThatExUsuallyGoes ${location.timeThatExUsuallyGoes}">${location.timeThatExUsuallyGoes}</h3>`;
//     locoString +=       `</div>`;
//     locoString +=  `</div>`;
//   });
//   locoString += `</div>`;
//   locoString += `</div>`;
//   return locoString;
// };

const showLocal = (locations) => {
  let locoString = '';
  locoString += `<div class="container-fluid">`;
  locoString +=  `<div class="row">`;
  locations.forEach((location) => {
    if (location.timeThatExUsuallyGoes === 'Morning') {
      locoString += `<div class="col-sm-4 location-card morning">`;
    } else if (location.timeThatExUsuallyGoes === 'Afternoon') {
      locoString += `<div class="col-sm-4 location-card afternoon">`;
    } else if (location.timeThatExUsuallyGoes === 'Evening') {
      locoString += `<div class="col-sm-4 location-card evening">`;
    } else if (location.timeThatExUsuallyGoes === 'After Dark') {
      locoString += `<div class="col-sm-4 location-card after-dark">`;
    }
    locoString +=  `<img class="loco-pic" src="${location.localImg}">`;
    locoString +=  `<h3 class="location">${location.Name}</h3>`;
    locoString +=  `<p class="address">${location.locationAddress}</p>`;
    locoString +=  `<p>${location.timeThatExUsuallyGoes}</p>`;
    locoString += `</div>`;
  });
  locoString += `</div>`;
  locoString += `</div>`;
  return locoString;
};

module.exports = {
  showEx,
  showLocal,
};
