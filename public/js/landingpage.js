let profile = document.querySelector("#profile");


// If the user is logged in, when they navigate to the profile page or schedule, the session data is refered to. A query is made to the sever based on the session data, and the user that is referenced's data is returned. The Id of said user is then used in the url endpoint via template literal
//`/studentprofile/${id}`
if (profile) {
  profile.addEventListener("click", () => {
    document.location.replace(`/studentprofile/`);
    //make this so that whoever is logged in, their primary key shows in the URL (we hard coded in 1 for testing purposes)--this might be done in handlebars
  });
}

let schedule = document.querySelector("#schedule");

if (schedule) {
  schedule.addEventListener("click", () => {
    document.location.replace("/schedule");
  });
}
