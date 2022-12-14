let profile = document.querySelector("#profile");

if (profile) {
  profile.addEventListener("click", () => {
    document.location.replace("/studentprofile");
  });
}

let schedule = document.querySelector("#schedule");

if (schedule) {
  schedule.addEventListener("click", () => {
    document.location.replace("/schedule");
  });
};