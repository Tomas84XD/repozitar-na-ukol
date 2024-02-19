
const fromCurrency = document.getElementById('fromCurrency');

const toCurrency = document.getElementById('toCurrency');

const amount = document.getElementById('amount');

const result = document.getElementById('result');

const convert = document.getElementById('convert');

const swap = document.getElementById('swap');

let fromCurrencyValue;
let toCurrencyValue;
const fromCurrencyRate = 1;

let toCurrencyRate = null;


function convertCurrency() {
    if (toCurrencyRate === null || isNaN(parseFloat(amount.value))) return;
    const convertedAmount = parseFloat(amount.value) * toCurrencyRate;
    result.value = convertedAmount.toFixed(2);
}

const currencyListAPI_URL =
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json';

fetch(currencyListAPI_URL)
    .then((response) => response.json())
    .then((data) => {

        for (i in data) {
            const option1 = new Option(data[i], i);
            const option2 = new Option(data[i], i);
            fromCurrency.add(option1);
            toCurrency.add(option2);
        }
    });

async function fetchCurrenciesInfo() {

    if (!fromCurrencyValue || !toCurrencyValue) return;


    convert.disabled = true;
    swap.disabled = true;

    convert.innerText = 'Fetching...';

    const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrencyValue}/${toCurrencyValue}.json`;
    try {

        const data = await (await fetch(apiUrl)).json();
     
        
        if (
            data[toCurrencyValue] &&
            !isNaN(parseFloat(data[toCurrencyValue]))
        ) {
            toCurrencyRate = parseFloat(data[toCurrencyValue]);
        } else {
            toCurrencyRate = null;
            alert('Currency Rate not found in the Response JSON.');
        }
    } catch (err) {
        toCurrencyRate = null;
        console.log(err.message);
    } finally {
        convert.innerText = 'Convert';
        convert.disabled = false;
        swap.disabled = false;
    }
}


const onSelectChange = (e, fromCurrency = true) => {

    e.target.disabled = true;
    e.target.disabled = false;

    const value = e.target.value;

    if (fromCurrency) {
        fromCurrencyValue = value;
    } else {
        toCurrencyValue = value;
    }

    fetchCurrenciesInfo();
};


fromCurrency.addEventListener('change', (e) => onSelectChange(e));
toCurrency.addEventListener('change', (e) => onSelectChange(e, false));


convert.addEventListener('click', convertCurrency);


swap.addEventListener('click', () => {
    if (!toCurrencyValue || !fromCurrencyValue) return;

    [toCurrencyValue, fromCurrencyValue] = [fromCurrencyValue, toCurrencyValue];


    fromCurrency.value = fromCurrencyValue;
    toCurrency.value = toCurrencyValue;


    
    [amount.value, result.value] = [result.value, amount.value];


    toCurrencyRate = fromCurrencyRate / toCurrencyRate;
    convertCurrency();
});