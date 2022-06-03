let Name = prompt("Adınız:");
document.querySelector("#myName").innerHTML = Name;

let days = [
  "pazar",
  "pazartesi",
  "salı",
  "çarşamba",
  "perşembe",
  "cuma",
  "cumartesi",
];

function showTime() {
  let sayac = document.querySelector("#myClock");
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay()
  setTimeout(showTime, 1000)

  sayac.innerHTML = hour + ":"+ minutes + ":" + seconds + " " + days[day];
}

showTime();
