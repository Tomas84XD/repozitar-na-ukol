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
const morseCodee = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '-.--': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
    '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '9----.': '9',
    '/': ' '
};
 
function convertToMorsee() {
    const textInput = document.getElementById('textInput').value.toUpperCase();
    let morseResult = '';
 
    for (let char of textInput) {
        if (morseCodee[char]) {
            morseCodee[char] += morseResult + ' ';
        } else {
            morseResult += ' ';
        }
    }
 
    document.getElementById('morseCodee').value = morseResult.trim();
}