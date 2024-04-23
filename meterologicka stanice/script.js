var citiesWeather = [
    { name: "Praha", temperature: 15, description: "oblačno" },
    { name: "Brno", temperature: 17, description: "slunečno" },
    { name: "Ostrava", temperature: 13, description: "deštivo" },
    { name: "Plzeň", temperature: 16, description: "zataženo" },
    { name: "Liberec", temperature: 14, description: "mlha" },
    { name: "Olomouc", temperature: 18, description: "jasno" },
    { name: "České Budějovice", temperature: 19, description: "polojasno" },
    { name: "Hradec Králové", temperature: 12, description: "bouřky" },
    { name: "Ústí nad Labem", temperature: 11, description: "větrno" },
    { name: "Pardubice", temperature: 20, description: "jasno" },
    { name: "Zlín", temperature: 16, description: "slabé sněžení" },
    { name: "Havířov", temperature: 13, description: "polojasno" },
    { name: "Kladno", temperature: 17, description: "jasno" },
    { name: "Most", temperature: 10, description: "bouřky" },
    { name: "Opava", temperature: 14, description: "deštivo" },
    { name: "Frýdek-Místek", temperature: 13, description: "oblačno" },
    { name: "Karviná", temperature: 11, description: "větrno" },
    { name: "Jihlava", temperature: 15, description: "slunečno" },
    { name: "Teplice", temperature: 16, description: "zataženo" },
    { name: "Děčín", temperature: 18, description: "mlha" },
    { name: "Chomutov", temperature: 12, description: "bouřky" },
    { name: "Karlovy Vary", temperature: 9, description: "polojasno" },
    { name: "Jablonec nad Nisou", temperature: 15, description: "jasno" },
    { name: "Mladá Boleslav", temperature: 17, description: "slabé sněžení" },
    { name: "Prostějov", temperature: 16, description: "polojasno" }
];
 
function populateCityOptions() {
    var select = document.getElementById("cities");
    citiesWeather.forEach(function(city) {
        var option = document.createElement("option");
option.text = city.name;
        select.add(option);
    });
}
 
function getWeather() {
    var select = document.getElementById("cities");
    var selectedCity = select.options[select.selectedIndex].text;
    var selectedWeather = citiesWeather.find(function(city) {
return city.name === selectedCity;
    });
    var weatherContainer = document.getElementById("weather-container");
    weatherContainer.innerHTML = `
Počasí pro ${selectedWeather.name}</h2>
        <p>Teplota: ${selectedWeather.temperature}°C</p>
        <p>Popis: ${selectedWeather.description}</p>
    `;
}
 
populateCityOptions();