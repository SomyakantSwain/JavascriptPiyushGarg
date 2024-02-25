function showTime() {
  const currentTime = new Date();

  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  document.getElementById("time").innerText = time;
}

let interval = setInterval(showTime, 1000);
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  clearInterval(interval);
});
