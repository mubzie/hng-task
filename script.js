const getDay = document.getElementById("current-day");
const getTime = document.getElementById("current-time");
const getUserName = document.getElementById("user-name");
const getTrack = document.getElementById("track");

// set day
const today = new Date().getDay();
const daysOfWeek = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursay",
  "Friday",
  "Saturday",
];
getDay.textContent = `Day: ${daysOfWeek[today]}`;

// set time
const getCurrentTime = () => {
  const getHours = new Date();
  const time = getHours.toLocaleTimeString();
  getTime.textContent = `Time: ${time}`;
};
setInterval(getCurrentTime, 1000);

// set userName
getUserName.textContent = "UserName: mubzie";

//set track
getTrack.textContent = "Track: Frontend";
