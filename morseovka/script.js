const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
};
 
function convertToMorse() {
    const textInput = document.getElementById('textInput').value.toUpperCase();
    let morseResult = '';
 
    for (let char of textInput) {
        if (morseCode[char]) {
            morseResult += morseCode[char] + ' ';
        } else {
            morseResult += ' ';
        }
    }
 
    document.getElementById('morseCode').value = morseResult.trim();
}

function morseToText(morseCode) {
    const morseAlphabet = {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z",
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        ".-.-.-": ".",
        "--..--": ",",
        "---...": ":",
        "..--..": "?",
        ".----.": "'",
        "-....-": "-",
        "-..-.": "/",
        "-.--.": "(",
        "-.--.-": ")",
        ".-...": "&",
        "---.": "!",
        "-.-.--": "!",
        "-...-": "=",
        ".-.-.": "+",
        "-....-": "-",
        "..--.-": "_",
        ".-..-.": "\"",
        "...-..-": "$",
        ".--.-.": "@",
        "...---...": "SOS"
    };

    const morseWords = morseCode.trim().split("   ");
    let decodedText = "";

    for (let i = 0; i < morseWords.length; i++) {
        const morseWord = morseWords[i].split(" ");
        let decodedWord = "";

        for (let j = 0; j < morseWord.length; j++) {
            if (morseAlphabet[morseWord[j]]) {
                decodedWord += morseAlphabet[morseWord[j]];
            } else {
                decodedWord += "?";
            }
        }

        decodedText += decodedWord + " ";
    }

    return decodedText.trim();
}

function decodeMorse() {
    const morseCode = document.getElementById("morseCodeInput").value;
    const decodedText = morseToText(morseCode);
    document.getElementById("decodedText").innerText = decodedText;
}