function loadLocations() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../assets/locations.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const locations = JSON.parse(xhr.responseText);
      displayLocations(locations);
    }
  };
  xhr.send();
}

function displayLocations(locations) {
  const container = document.getElementById("locations-container");
  locations.forEach((location) => {
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location");

    const locationTitle = document.createElement("h2");
    locationTitle.textContent = location.location;

    const bestTime = document.createElement("p");
    bestTime.classList.add("best-time");
    bestTime.textContent = "Best Time: " + location.best_time;

    const description = document.createElement("p");
    description.textContent = location.description;

    const site = document.createElement("a");
    site.textContent = "View more";
    site.href = location.site;
    site.target = "_blank";

    locationDiv.appendChild(locationTitle);
    locationDiv.appendChild(bestTime);
    locationDiv.appendChild(description);
    locationDiv.appendChild(site);

    container.appendChild(locationDiv);
  });
}

window.onload = function () {
  loadLocations();
};
