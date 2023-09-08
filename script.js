const getDay = document.getElementById("current-day");
const getTime = document.getElementById("current-time");
const getUserName = document.getElementById("user-name");
const getTrack = document.getElementById("track");

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

const getCurrentTime = () => {
  const getDate = new Date();
  const getUTC = getDate.toUTCString(getDate);
  getTime.textContent = `Time: ${getUTC}`;
};
setInterval(getCurrentTime, 1000);

getUserName.textContent = "Slack Name: mubzie";

getTrack.textContent = "Track: Frontend";
