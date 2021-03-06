var kmlUrls;

function buildSearchOptions(data) {
  var cleanedData = [];
  for (var i in data) {
    if (data[i] && !cleanedData.includes(data[i].trim())) {cleanedData.push(data[i].trim())}
  }
  cleanedData.sort();
  for (var i in cleanedData) {
    $('#trailName').append('<option value="' + cleanedData[i] + '">')
  }
}

getTrailNames(buildSearchOptions);


document.getElementById('search').addEventListener('submit', function() {
  var newTrail = document.getElementById('trailNameInput').value;
  history.pushState(null, null, "/trail/" + newTrail);
  localStorage.setItem('lastTrail', newTrail);
  loadNewGraph(new Trail(newTrail), buildGraph);
});
