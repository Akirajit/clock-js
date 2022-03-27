function getArgentinaTime() {
  document.getElementById("buenosAiresTime").innerHTML =
    new Date().toLocaleString("EN-US", {
      timeZone: "America/Argentina/Buenos_Aires",
      timeStyle: "medium",
      hourCycle: "h24",
    });
}

function getBelfastTime() {
  document.getElementById("belfastTime").innerHTML = new Date().toLocaleString(
    "EN-US",
    {
      timeZone: "Europe/Belfast",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
}

function getLondonTime() {
  document.getElementById("londonTime").innerHTML = new Date().toLocaleString(
    "EN-US",
    {
      timeZone: "Europe/London",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
}

function getDubaiTime() {
  document.getElementById("dubaiTime").innerHTML = new Date().toLocaleString(
    "EN-US",
    {
      timeZone: "Asia/Dubai",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
}

getArgentinaTime();
setInterval(() => {
  getArgentinaTime();
}, 1000);

getBelfastTime();
setInterval(() => {
  getBelfastTime();
}, 1000);

getLondonTime();
setInterval(() => {
  getLondonTime();
}, 1000);

getDubaiTime();
setInterval(() => {
  getDubaiTime();
}, 1000);
