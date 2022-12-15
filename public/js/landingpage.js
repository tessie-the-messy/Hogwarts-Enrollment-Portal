let profile = document.querySelector("#profile");
let schedule = document.querySelector("#schedule");

profile.addEventListener("click", () => {
  //have to grab the value of the data attribute and store in a variable

  const id = profile.getAttribute("data-id");

  document.location.replace(`/studentprofile/${id}`);
});

schedule.addEventListener("click", () => {
  document.location.replace("/schedule");
});
