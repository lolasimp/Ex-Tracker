const showEx = (exes) => {
  console.log(exes);
  let exString = '';
  exString += `<div class="ex-card">`;
  exString +=   `<img src="${exes[0].img} width="20%">`;
  exString +=    `<h2>${exes[0].name}</h2>`,
  exString +=     `<span>${exes[0].age}</span>`;
  exString +=      `<p>${exes[0].flaws}</p>`;
  exString += `</div>`;
  return exString;
};

const showLocal = (locations) => {
  let locoString = '';
  locoString += `<div class="container-fluid">`;
  locoString +=  `<div class="row">`;
  locations.forEach((location) => {
    locoString +=  `<div class="col-md-4 col-md-4">`;
    locoString +=    `<img class="loco-pic" src="${location.localImg}">`;
    locoString +=     `<h2> ${location.Name}</h2>`;
    locoString +=      `<p>${location.locationAddress}</p>`;
    locoString +=       `<p>${location.timeThatExUsuallyGoes}</p>`;
    locoString +=  `</div>`;
  });
  locoString += `</div>`;
  locoString += `</div>`;
  return locoString;
};

module.exports = {
  showEx,
  showLocal,
};
