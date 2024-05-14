function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  alert("Účet vytvořen. Nyní se můžete přihlásit.");
}

function makeReservation() {
const date = document.getElementById('calendar-date').value;
const time = document.getElementById('reservation-time').value;
const numberOfGuests = document.getElementById('number-of-guests').value;
const reservation = { date: date, time: time, guests: numberOfGuests };
saveReservation(reservation);
loadReservations();
}

function removeReservation(index) {
const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
reservations.splice(index, 1);
localStorage.setItem('reservations', JSON.stringify(reservations));
loadReservations();
}

function login() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (checkUser(username, password)) {
}
else {
  alert("Neplatné uživatelské jméno nebo heslo.");
}
}

function checkUser(username, password) {
const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');
return username === storedUsername && password === storedPassword;
}

function loadReservations() {
const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
const reservationList = document.getElementById('reservation-list');
reservationList.innerHTML = '';
reservations.forEach((reservation, index) => {
  const listItem = document.createElement('li');
listItem.textContent = `Datum: ${reservation.date}, Čas: ${reservation.time}, Hosté: ${reservation.guests}`;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Odebrat';
  removeButton.onclick = function() {
    removeReservation(index);
  };
  listItem.appendChild(removeButton);
  reservationList.appendChild(listItem);
});
}

function saveReservation(reservation) {
const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
reservations.push(reservation);
localStorage.setItem('reservations', JSON.stringify(reservations));
}

function init() {
loadReservations();
}

document.addEventListener('DOMContentLoaded', init);
function makeReservation() {
const date = document.getElementById('calendar-date').value;
const time = document.getElementById('reservation-time').value;
const numberOfGuests = document.getElementById('number-of-guests').value;
const repeatOption = document.getElementById('repeat-reservation').value;
const serviceType = document.getElementById('service-type').value;

if (!isDuplicateReservation(date, time)) {
  const reservation = { date: date, time: time, guests: numberOfGuests, repeat: repeatOption, service: serviceType };
  saveReservation(reservation);
  loadReservations();
} else {
  alert("Rezervace pro tento čas již existuje.");
}
}

function isDuplicateReservation(date, time) {
const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
return reservations.some(reservation => reservation.date === date && reservation.time === time);
}
function makeReservation() {
const username = localStorage.getItem('username');
const password = localStorage.getItem('password');
const isLoggedIn = username && password;

if (isLoggedIn) {
  const date = document.getElementById('calendar-date').value;
  const time = document.getElementById('reservation-time').value;
  const numberOfGuests = document.getElementById('number-of-guests').value;
  const repeatOption = document.getElementById('repeat-reservation').value;
  const serviceType = document.getElementById('service-type').value;

  if (date && time && numberOfGuests && repeatOption && serviceType) {
    if (!isDuplicateReservation(date, time)) {
      const reservation = { date: date, time: time, guests: numberOfGuests, repeat: repeatOption, service: serviceType };
      saveReservation(reservation);
      loadReservations();
    } else {
      alert("Rezervace pro tento čas již existuje.");
    }
  } else {
    alert("Prosím, vyplňte všechna pole formuláře.");
  }
} else {
  alert("Pro vytvoření rezervace se prosím přihlaste.");
}
}

function isDuplicateReservation(date, time) {
const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
return reservations.some(reservation => reservation.date === date && reservation.time === time);
}
function logout() {
localStorage.removeItem('username');
localStorage.removeItem('password');
alert("Byli jste úspěšně odhlášeni.");
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (checkUser(username, password)) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      alert("Byli jste úspěšně přihlášeni.");
  } else {
      localStorage.removeItem('isLoggedIn'); 
      alert("Neplatné uživatelské jméno nebo heslo.");
  }
}

function init() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (isLoggedIn) {
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      document.getElementById('username').value = storedUsername;
      document.getElementById('password').value = storedPassword;
  }
  loadReservations();       
}



document.addEventListener('DOMContentLoaded', init);