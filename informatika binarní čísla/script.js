function convertBinaryToDecimal() {
    var binaryNumber = document.getElementById("binaryInput").value;
    var decimalNumber = parseInt(binaryNumber, 2);
    document.getElementById("result").innerText = "Desítkové číslo: " + decimalNumber;
}


function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2); 
}
 
function convert() {
    var decimalInput = document.getElementById("decimalInput").value;
    var binaryOutput = document.getElementById("binaryOutput");
    
    if (!isNaN(decimalInput)) {
        binaryOutput.innerHTML = "Binární číslo: " + decimalToBinary(decimalInput);
    } else {
        binaryOutput.innerHTML = "Špatně zadané číslo";
    }
}