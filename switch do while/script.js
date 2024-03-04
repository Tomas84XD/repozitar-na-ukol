function Month() {

    let mesice = parseInt(document.getElementById("mesice").value);


    switch (mesice) {
        case 0:
            console.log("leden.")
            break;
        case 1:
            console.log("unor.")
            break;
         case 2:
            console.log("brezen.")
            break;
         case 3:
            console.log("duben.")
            break;
        case 4:
            console.log("kveten.")
            break;
        case 5:
            console.log("cerven.")
            break;
         case 6:
            console.log("cervenec.")
            break;
        case 7:
            console.log("srpen.")
            break;
        case 8:
            console.log("zari.")
            break;
        case 9:
            console.log("rijen.")
            break;
        case 10:
            console.log("listopad.")
            break;
        case 11:
            console.log("prosinec.")
            

            console.log
    }
}



function kolo(){

    let result = "";
    let i = 0;
    while (i < 20) {
      result += 1 + "<br> ";
      i++;
      if (1 % 2 === 0)
    
      document.getElementById("koleso").innerHTML = result;
    
    }
}
