const api = {
    key: 'a5eb23f98115acdbfc4522d411b818f6',
    base: 'https://api.openweathermap.org/data/2.5/'
};
const localStorageNotesKey = 'weathers';

let weathers = [];
  
const search = document.querySelector('#search');
document.querySelector('#Findbtn').addEventListener('click', setQuery);
  
function setQuery() {
    getResults(search.value);
}
  
function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(save).then(displayResults);
}
function save(weather){
    const w = {
        city: `${weather.name}, ${weather.sys.country}`,
        date: dateBuilder(new Date()),
        temp: `${Math.floor(weather.main.temp)}<span>°c</span>`,
        weather: weather.weather[0].main,
        hilow: `${Math.floor(weather.main.temp_min)}°c / ${Math.floor(weather.main.temp_max)}°c`
    };
    weathers.push(w);
    localStorage.setItem(localStorageNotesKey, JSON.stringify(weathers));
}

function displayResults () {
    weathers = JSON.parse(localStorage.getItem(localStorageNotesKey));

    const main = document.querySelector('main');
    main.innerHTML = '';

    for(let w of weathers){
        const htmlNode = document.createElement('section');
        htmlNode.classList.add('node');
        const htmlSection = document.createElement('section');
        htmlSection.classList.add('location');
        const htmlCity = document.createElement('div');
        htmlCity.classList.add('city');
        const htmlDate = document.createElement('div');
        htmlDate.classList.add('date');

        const htmlSection2 = document.createElement('section');
        htmlSection2.classList.add('current');
        const htmlTemp = document.createElement('div');
        htmlTemp.classList.add('temp');
        const htmlWeather = document.createElement('div');
        htmlWeather.classList.add('weather');
        const htmlHiLow = document.createElement('div');
        htmlHiLow.classList.add('hi-low');
    
        htmlCity.innerHTML = w.city;
        htmlDate.innerHTML = w.date;
        htmlTemp.innerHTML = w.temp;
        htmlWeather.innerHTML = w.weather;
        htmlHiLow.innerHTML = w.hilow;
    
        htmlSection.appendChild(htmlCity);
        htmlSection.appendChild(htmlDate);
        htmlSection2.appendChild(htmlTemp);
        htmlSection2.appendChild(htmlWeather);
        htmlSection2.appendChild(htmlHiLow);
        
        htmlNode.appendChild(htmlSection);
        htmlNode.appendChild(htmlSection2);
        main.appendChild(htmlNode);
    }
    /*
    document.querySelector('.location .city').innerText = `${weather.name}, ${weather.sys.country}`;
    document.querySelector('.location .date').innerText = dateBuilder(new Date());
    document.querySelector('.current .temp').innerHTML = `${Math.floor(weather.main.temp)}<span>°c</span>`;
    document.querySelector('.current .weather').innerText = weather.weather[0].main;
    document.querySelector('.hi-low').innerHTML = `${Math.floor(weather.main.temp_min)}°c / ${Math.floor(weather.main.temp_max)}°c`;
    */
}
  
function dateBuilder (d) {
    let months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    let days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

    return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}