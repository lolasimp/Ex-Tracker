const showEx = (exes) => {
  let exString = '';
  exString += `<div class="container-fluid">`;
  exString += `<div class="row">`;
  exString += `<div class="text-center">`;
  exString += `<img class="ex=pic" src="${exes[0].img} width="20%">`;
  exString += `</div>`;
  exString += `<div class="col-md-4 col-md-offset-4">`;
  exString += `<h2>Name: ${exes[0].name}</h2>`,
  exString += `<span>Age:${exes[0].age}</span>`;
  exString += `<p><h3>Flaws:</h3>${exes[0].flaws}</p>`;
  exString += `</div>`;
  exString += `</div>`;
  exString += `</div>`;
  return exString;
};

const showLocal = (locations) => {
  let locoString = '';
  locations.forEach((location) => {
    locoString += `<div class="location-card ${location.timeThatExUsuallyGoes} col-lg-4">`;
    locoString += `<img src="${location.localImg}">`;
    locoString += `<h2> ${location.Name}</h2>`;
    locoString += `<p>${location.locationAddress}</p>`;
    locoString += `<h3 class="timeThatExUsuallyGoes ${location.timeThatExUsuallyGoes}">${location.timeThatExUsuallyGoes}</h3>`;
    locoString += `</div>`;
  });
  return locoString;
};

module.exports = {
  showEx,
  showLocal,
};

// const exesOutputDiv = $('#exPast');
// const localOutputDiv = $('#locateMe');

// const showLocal = (locations, exes) => {
//   let domString = '';
//   locations.forEach((location) => {
//     domString += `<div class="location-card ${location.timeThatExUsuallyGoes} col-lg-4">`;
//     domString +=    `<h3>${location.Name}</h3>`;
//     domString +=    `<img src="${location.localImg}">`;
//     domString +=    `<h4>${location.locationAddress}</h4>`;
//     domString +=    `<p><strong>Time of Day:  ${location.timeThatExUsuallyGoes}</strong></p>`;
//     domString +=    `<p>Who visits this location:</p>`;
//     exes.forEach((ex) => {
//       ex.locationNums.forEach((num) => {
//         if (num === location.locationId) {
//           domString += `<p>${ex.name}</p>`;
//         }
//       });
//     });
//     domString +=  `</div>`;
//   });
//   printLocations(domString);
// };

// const singleLocal = (locations) => {
//   let domString = '';
//   locations.forEach((location) => {
//     domString +=  `<div class="col-lg-2">`;
//     domString += `<div class="single-location-card ${location.timeThatExUsuallyGoes} panel panel-info">`;
//     domString +=    `<div class="panel-heading">`;
//     domString +=      `<h4>${location.Name}</h4>`;
//     domString +=    `</div>`;
//     domString +=    `<div class="panel-body">`;
//     domString +=      `<img src="${location.localImg}">`;
//     domString +=      `<h4>${location.locationAddress}</h4>`;
//     domString +=      `<p><strong>Time to Ghost: <strong> ${location.timeThatExUsuallyGoes}</p>`;
//     domString +=    `</div>`;
//     domString +=  `</div>`;
//     domString +=  `</div>`;
//   });
//   printLocations(domString);
// };

// // const showEx = (exes) => {
// //   let domString = '';
// //   domString +=  `<h3 class="location-heading">Exes:</h3>`;
// //   exes.forEach((ex) => {
// //     domString +=  `<div class="ex-card col-md-3">`;
// //     domString +=    `<h3>${ex.name}</h3>`;
// //     domString +=    `<img src="${ex.img}">`;
// //     domString +=    `<h4>${ex.age}</h4>`;
// //     domString +=    `<h5>Flaw:</h5>`;
// //     domString +=    `<p>${ex.flaws}</p>`;
// //     domString +=    `<button class="mfr btn" id="${ex.id}">See More About ${ex.name}</button>`;
// //     domString +=  `</div>`;
// //   });
// //   printExes(domString);
// // };

// // const singleEx = (ex) => {
// //   let domString = '';
// //   domString +=  `<div id="back-button">`;
// //   domString +=    `<button class="btn btn-primary" id="back-btn"><span class="glyphicon glyphicon-chevron-left"></span>Back</button>`;
// //   domString +=  `</div>`;
// //   domString +=  `<div class="single-ex-card col-md-6">`;
// //   domString +=    `<img src="${ex.img}">`;
// //   domString +=    `<h3>${ex.name}</h3>`;
// //   domString +=    `<h4>${ex.age}</h4>`;
// //   domString +=    `<h4>Flaws:</h4>`;
// //   domString +=    `<p>${ex.flaws}</p>`;
// //   domString +=    `<button class="getUm btn" id="${ex.id}">See More About ${ex.name}</button>`;
// //   domString +=  `</div>`;
// //   printExes(domString);
// // };

// const printExes = (exes) => {
//   exesOutputDiv.html(exes);
// };

// const printLocations = (locations) => {
//   localOutputDiv.html(locations);
// };

// module.exports = {
//   showLocal,
//   showEx,
//   // singleEx,
//   // singleLocal,
// };
