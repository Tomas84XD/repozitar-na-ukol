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
   
  function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert("Účet vytvořen. Nyní se můžete přihlásit.");
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