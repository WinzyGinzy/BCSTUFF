(function () {
    document.querySelector("button").addEventListener("click", function (event) {
        event.preventDefault();
        executeScript();
    });
  
    function executeScript() {
      let cityName = document.getElementById("city").value;
      if (!cityName) {
          alert("Please enter a city name");
          return;
      }
      
      let key = "a0868cb9555996f644667fa10cd2d765";
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`
      )
        .then((response) => {
            if (response.ok) {
            return response.json();
          } else {
            return Promise.reject("City not Found. Please check spelling.");
          }
        })
      
        .then((data) => showTemperature(data.main.temp, cityName))
        
        .catch((err) => alert(err));
    }
  
    function showTemperature(temp, cityName) {
      temp = Math.ceil(temp);
      document.getElementById(
        "result"
      ).textContent = `It is currently ${temp}°C in ${cityName}`;
    }
  })();