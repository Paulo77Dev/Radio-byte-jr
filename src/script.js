const stationsUrl = {
  94.3: 'atlantida',
  97.1: 'oceano',
  102.1: 'gaucha',
  103.3: 'cultura'
}

const stations = {
  94.3: 'Atlantida',
  97.1: 'Oceano',
  102.1: 'Gaúcha',
  103.3: 'Cultura',
}

window.addEventListener('load', function() {

const image = document.querySelector(' #img ');
const input = document.querySelector('#range-input');
const stationText = document.querySelector('#stationtext');
const currentStationNumber = document.querySelector('#station-sumber');

input.addEventListener('input', function (e){
  const freq = e.target.value;

  const newStation = stationsUrl[freq];

 /* if(newStation === undefined ){
    image.src = 'public/assets/station/${newStation}.png' ;
    currentStationNumber.innerHTML = freq;
    stationText.innerHTML = ' - Rádio ${stations[freq]}' ;

}else{
  if(StationText.textContent == 'Fora do ar') return;

  image.src = 'public/assets/stations/default.png';
  currentStationNumber.innerHTML = freq;
  stationText.innerHTML = ' - Fora do ar';
}*/
});
});