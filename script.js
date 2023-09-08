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
getDay.textContent = `Current Day of the Week: ${daysOfWeek[today]}`;

// set time
const getCurrentTime = () => {
  const getDate = new Date();
  const getUTC = getDate.getUTCMilliseconds(getDate);
  getTime.textContent = `Current UTC Time: ${getUTC} ms`;
};
setInterval(getCurrentTime, 1000);

// set userName
getUserName.textContent = "Slack Name: Mubzie";

//set track
getTrack.textContent = "Track: Frontend";
