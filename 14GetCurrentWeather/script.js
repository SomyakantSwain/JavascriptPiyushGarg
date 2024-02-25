const button = document.getElementById("btn");
const cityname = document.getElementById("h3");
async function getData(lat, long) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=37df728032cf4c99b8532914241102&q=${lat},${long}&aqi=yes`
  );
  return await data.json();
}

async function getlocation(position) {
  const res = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(res);
}

function failedlocation() {
  console.log("There was some problem");
}

button.addEventListener("click", async () => {
  await navigator.geolocation.getCurrentPosition(getlocation, failedlocation);

  //   cityname.innerText = res.location.location.name;
  //   console.log(res);
});
