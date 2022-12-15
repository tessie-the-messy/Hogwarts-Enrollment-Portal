let profile = document.querySelector("#profile");
let schedule = document.querySelector("#schedule");

profile.addEventListener("click", () => {
  console.log(profile.dataset);
  const id = getAttribute("data.id");
  document.location.replace(`/studentprofile/${id}`);
});

schedule.addEventListener("click", () => {
  document.location.replace("/schedule");
});
