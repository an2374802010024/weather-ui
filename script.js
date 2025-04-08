async function getWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    const city = cityInput || "Hanoi"; // nếu không nhập thì mặc định là Hanoi
  
    const url = `https://weather-api-rejv.onrender.com/api/weather?city=${encodeURIComponent(city)}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Không tìm thấy thành phố!");
      }
      const data = await response.json();
  
      // Cập nhật UI với dữ liệu thời tiết
      document.getElementById("weatherResult").style.display = "block";
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temperature").innerText = data.main.temp + "°C";
      document.getElementById("description").innerText = data.weather[0].description;
      document.getElementById("humidity").innerText = data.main.humidity + "%";
      document.getElementById("wind").innerText = data.wind.speed + " m/s";
    } catch (error) {
      alert("Không lấy được dữ liệu thời tiết. Vui lòng kiểm tra lại tên thành phố.");
      console.error("Lỗi:", error);
    }
  }
  