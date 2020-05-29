//wheatherApi key=>96168f7b89f98466b36b184ee6437461


let input input = document.getElementById("input");

input.addEvedntListener("keyup" , (e) => {
    e.preventDefault();
    let searchKey = e.target.value;
    searchweather(searchKey);
});

function searchweather(searchKey){
    let weatherApi ="http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=d1c10de4aa956fbf53bfcf8c23d91d5f";
}

