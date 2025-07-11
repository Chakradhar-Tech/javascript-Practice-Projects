$(window).on("load", function(){
    


    const inputEl  = $("#input-el");
    const searchEl = $("#search-el");
    const cityEl = $("#city-el span");
    const temp = $("#temp-el span");
    const sTime = $("#sunset-time span");
    const countryEl =$("#country-el span");

    searchEl.on("click", function(e){
        e.preventDefault();
        const cityValue = inputEl.val().trim();
        if(cityValue !== ""){
        const aipKey = "b294693c7e11681ba33bf6fe1c30e07d";
         
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${aipKey}&units=metric`)
        .then((res)=>{
            if(!res.ok){
                throw new Error("an error has occurred");
            }
            return res.json()
        })
        .then((data)=>{
            cityEl.text(data.name);
            const temperature = data.main.temp;
            const country = data.sys.country;
            const sunset = data.sys.sunset;
            const sunsetTime = new Date(sunset * 1000);
            let hours = sunsetTime.getHours();
            let minutes = sunsetTime.getMinutes();
            const condition  = data.weather[0].main;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
           
            sTime.text(`${hours}:${minutes}`);
            countryEl.text(country);
            temp.text(temperature);
            $("#image-el").attr("src", iconUrl);
            $("#condition-el span").text(condition);
        })
        .catch(err=>console.log(err));
     }
    });







});

