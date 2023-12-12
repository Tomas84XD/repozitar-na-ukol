function ano() {

    let text = "";

    const inputNumber = parseInt(document.getElementById("ne").value);

    for (let i = 1; i <= inputNumber; i++) {

      if ((inputNumber % 2 === 0 && i % 2 === 0) || (inputNumber % 2 !== 0 && i % 3 === 0)) {

        text +=  + i + ",";

      }

    }

    document.getElementById("orangutan").innerHTML = text;

  }