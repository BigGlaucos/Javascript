const countdown = () => {
  const countDate = new Date("May 17, 2023 00:00:00").getTime();
  console.log(countDate);

  const gapToEvent = countDate - nowDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const TextDay = Math.floor(gapToEvent / day);
  const TextHour = Math.floor((gapToEvent % day) / hour);
  const TextMinute = Math.floor((gapToEvent % hour) / minute);
  const TextSecond = Math.floor((gapToEvent % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = texHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);
