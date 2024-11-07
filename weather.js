const search=async ()=>{
    console.log(country.value);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.value}&appid=7070d686d26048ffa1aa911c7c4bcb83`)

    response.json().then((data) => {
        console.log(data);

        document.getElementById("weather-data").style.display='none';
        document.getElementById("temp-details").style.display='none';
        document.getElementById("goBackbtn").style.display='block';



        const tempKelvin=data.main.temp;
        const tempCelsius=(tempKelvin-273.15).toFixed(2);
        console.log(tempCelsius);
    
        const feelKelvin=data.main.feels_like;
        const feelCelsius=(feelKelvin-273.15).toFixed(2)
        console.log(feelCelsius);
    
        const time = new Date()
        console.log(time);
        
        let country=data.sys.country
        console.log(country);
    
        let descriptions=data.weather[0].description
        console.log(descriptions);
        
        let place=data.name
        console.log(place);
    
        let Humidity=data.main.humidity
        console.log(Humidity);
    
        let wind=data.wind.speed
        console.log(wind); 
    
        let pressure=data.main.pressure
        console.log(pressure);

        result.innerHTML= `  
     <div>
        <h1 style="margin-top: 140px;">${tempCelsius}℃</h1>
        <p class="fs-5">feels like ${feelCelsius} ℃ , ${descriptions}</p>
        <h1 class="fs-1">${place}</h1>
        <p class="fs-6 mt-2 text-white">${time}</p>
        <div class="mt-4">
            <img src="https://cdn-icons-png.flaticon.com/512/376/376325.png" alt=" no image" height="35px" width="35px" >
            <img src="https://png.pngtree.com/png-clipart/20220909/original/pngtree-sun-cloud-icon-weather-png-image_8508243.png" alt="no image" height="50px" width="50px">
        </div>
    </div> `


    details.innerHTML=`<div>
    <div class="d-flex ">
        <h1 class="fs-3 text-black mt-3">Country Name  :</h1>
        <h1 class="text-white fs-3 ms-3 mt-3"> ${country}</h1>

    </div>

    <div style="display: flex;justify-content: space-between;" >
            <div>
                <h1 class="fs-3 text-black mt-3"><i class="fa-solid fa-droplet"></i> Humidity</h1>
                <h1 class="text-white ms-4 fs-3">${Humidity}%</h1>
            </div>
            <div>
                <h1 class="fs-3 text-black mt-3"><i class="fa-solid fa-wind"></i> Wind</h1>
                <h1 class="text-white ms-4 fs-3">${wind}mph</h1>
            </div>
           
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items:center">
        <h1 class="fs-3 text-black mt-3"><img src="https://icon-library.com/images/pressure-icon-png/pressure-icon-png-5.jpg" height="50px;" style="width: 50px;">Pressure</h1>
        <h1 class="text-white ms-4 fs-3">${pressure}hPa</h1>
        </div>
    </div>`
        
    })
    
}
function goBack() {
    location.reload();
}