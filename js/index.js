async function forecast(city = "cairo") {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=06755cd8b3e749ba859123024241912&q=${city}&days=3`)
    if (response.ok) {
        let data = await response.json()
        let dateObject = new Date(data.forecast.forecastday[0].date);
        let dayName = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
        document.querySelector(".current").innerHTML = `
                        <div class="d-flex justify-content-between rowcard rowcard1 text-white-50" style="background-color: #2D303D;">
                            <h4 class="fs-6">${dayName}</h4>
                            <h4 class="fs-6">${dateObject.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</h4>
                        </div>
                        <h3 class="pt-2  mt-5 text-white-50 ">${data.location.name}</h3>
                        <div class="row deg align-items-center ">
                            <div class="col-9">
                                <h1 class="py-3 text-white">${data.current.temp_c}&deg;C</h1>
                            </div>
                            <div class="col-3">
                                <img class = "w-100" src="https:${data.current.condition.icon}" alt="">
                            </div>
    
                        </div>
    
                        <!-- <h1 class="py-3 text-white">16*c <span class="ps-4"><i class="fa-solid fa-moon"></i></span></h1> -->
                        <p class="text-info pb-2">${data.current.condition.text}</p>
                        <div class="icons d-flex">
                            <div>
                                <i class="fa-solid fa-umbrella pe-2 text-white-50"></i>
                                <span class="text-white-50">20%</span>
                            </div>
    
                            <div class="mx-2">
                                <i class="fa-solid fa-umbrella pe-2 text-white-50"></i>
                                <span class="text-white-50">20Km/h</span>
                            </div>
    
                            <div>
                                <i class="fa-solid fa-umbrella pe-2 text-white-50"></i>
                                <span class="text-white-50">East</span>
                            </div>
                        </div>`



        document.querySelector(".nextday").innerHTML = `
                        <div class=" rowcard text-white-50 text-center" style="background-color: #222530;">
                            <h4 class="fs-6">${new Date(data.forecast.forecastday[1].date).toLocaleDateString('en-US', { weekday: 'long' })}</h4>
                        </div>
                        <div class="text-center text-white fs-1 py-5 m-auto iconimg" >
                        <img class = "w-100" src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="">
                        </div>
                        <h1 class=" pb-2 text-white text-center">${data.forecast.forecastday[1].day.maxtemp_c}&deg;C</h1>
                        <h2 class=" text-white-50 fs-4 text-center">${data.forecast.forecastday[1].day.mintemp_c}&deg;C</h2>
                        <p class="text-info pb-2 text-center">${data.forecast.forecastday[1].day.condition.text}</p>`


        document.querySelector(".day3").innerHTML = `
                        <div class="text-center text-white-50 rowcard text-white-50" style="background-color: #2D303D;">
                            <h4 class="fs-6">${new Date(data.forecast.forecastday[2].date).toLocaleDateString('en-US', { weekday: 'long' })}</h4>
                        
                        </div>
                        <div class="text-center text-white fs-1 py-5 iconimg m-auto" >
                            <img class = "w-100" src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="">
                        </div>
                        <h1 class="pb-2 text-white text-center">${data.forecast.forecastday[2].day.maxtemp_c}&deg;C</h1>
                        <h2 class=" text-white-50 fs-4 text-center">${data.forecast.forecastday[1].day.mintemp_c}&deg;C</h2>
    
                        <p class="text-info pb-2 text-center">${data.forecast.forecastday[2].day.condition.text}</p>`
    
    }
}
forecast();

var input = document.querySelector(".foreInput");
input.addEventListener("input" , function(){
    forecast(input.value)
})


