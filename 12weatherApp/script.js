const button = document.getElementById("Search");
const input = document.getElementById("City");
const cityName = document.getElementById("City-name");
const citytime = document.getElementById("City-time");
const citytemp = document.getElementById("City-temp");

async function getData(cityName) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=37df728032cf4c99b8532914241102&q=${cityName}&aqi=yes`
  );
  return await data.json();
}
button.addEventListener("click", async () => {
  const city = input.value;
  const result = await getData(city);
  cityName.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
  citytime.innerText = result.location.localtime;
  citytemp.innerText = result.current.temp_c;
});
//http://api.weatherapi.com/v1/current.json?key=37df728032cf4c99b8532914241102&q=London&aqi=yes
