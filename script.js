const btn = document.getElementById('simularBtn');
const fastestLapEl = document.getElementById('fastestLap');
const topSpeedEl = document.getElementById('topSpeed');
const trackTempEl = document.getElementById('trackTemp');

btn.addEventListener('click', () => {
  const milisegundos = Math.floor(Math.random() * 500) + 120;
  const nuevaVuelta = `1:30.${milisegundos}`;
  const nuevaVelocidad = Math.floor(Math.random() * 12) + 328;
  const nuevaTemp = (Math.random() * 3 + 28).toFixed(1);

  fastestLapEl.textContent = nuevaVuelta;
  topSpeedEl.textContent = `${nuevaVelocidad} km/h`;
  trackTempEl.textContent = `${nuevaTemp} °C`;
});