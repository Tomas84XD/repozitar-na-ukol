document.addEventListener('DOMContentLoaded', function () {
    loadCards();
  });
   
  function addCard() {
    var englishWord = document.getElementById('englishWord').value;
    var czechTranslation = document.getElementById('czechTranslation').value;
    var explanation = document.getElementById('explanation').value;
   
    if (englishWord && czechTranslation && explanation) {
      var card = {
        englishWord: englishWord,
        czechTranslation: czechTranslation,
        explanation: explanation
      };
   
      localStorage.setItem(englishWord, JSON.stringify(card));
   
      document.getElementById('englishWord').value = '';
      document.getElementById('czechTranslation').value = '';
      document.getElementById('explanation').value = '';
   
      loadCards();
    } else {
      alert('Prosím, vyplňte všechna pole.');
    }
  }
   
  function loadCards() {
    var cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
   
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var card = JSON.parse(localStorage.getItem(key));
   
      var cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.textContent = card.englishWord;
   
      cardElement.addEventListener('click', function () {
        this.textContent = card.czechTranslation + ' - ' + card.explanation;
      });
   
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Smazat';
      deleteButton.addEventListener('click', function () {
        localStorage.removeItem(key);
        loadCards();
      });
   
      cardElement.appendChild(deleteButton);
      cardContainer.appendChild(cardElement);
    }
  }