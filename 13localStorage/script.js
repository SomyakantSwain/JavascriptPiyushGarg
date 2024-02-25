const button = document.getElementById("clickbutton");
const uname = document.getElementById("in");
const username = document.getElementById("user");
button.addEventListener("click", () => {
  const value = uname.value;
  localStorage.setItem("name", value); // to set the data in the storage
  location.reload();
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name"); // to get the data from the storage
  username.innerHTML = value;
});
