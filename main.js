"use strict";
{
  // apiコードのベース
  // https://api.openweathermap.org/data/3.0/onecall?lat={緯度}&lon={経度}&exclude={option：データを一部除外して取得したい場合}&unites={option：単位},&appid={API key}&lang={option:言語指定}

  const API_KEY = "403dbc5ea76be6c820e7d913daae82b1";
  // 緯度・経度で東京を指定
  const locationTokyo = "lat=35.68944&lon=139.69167";
  const locationSapporo = "lat=43.0642&lon=141.3469";
  const locationSendai = "lat=38.2689&lon=140.8719";
  const locationNigata = "lat=37.90222&lon=139.02361";
  const locationKanazawa = "lat=36.5944&lon=136.6256";
  const locationNagoya = "lat=35.1803&lon=136.9067";
  const locationOsaka = "lat=34.6937&lon=135.5022";
  const locationHiroshima = "lat=34.3963&lon=132.4594";
  const locationKochi = "lat=33.55972&lon=133.53111";
  const locationFukuoka = "lat=33.60639&lon=130.41806";
  const locationNaha = "lat=26.2125&lon=127.68111";

  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?" +
    locationTokyo +
    "&lang=ja&units=metric";

  let data;
  //   const weatherIcon = document.querySelector(".weather-icon");
  //   非同期処理 リクエストを送信したら、レスポンスがあるまで処理が行われない（他の作業はできる）
  async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${API_KEY}`);
    data = await response.json();

    // document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector("#description").textContent =
      data.weather[0].description;
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";
    let iconUrl =
      "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    const weatherIcon = document.querySelector("#weatherIcon");
    weatherIcon.src = iconUrl;
    document.querySelector("#tempMax").textContent = Math.round(
      data.main.temp_max
    );
    document.querySelector("#tempMin").textContent = Math.round(
      data.main.temp_min
    );

    const card = document.querySelector(".card");

    if (data.weather[0].main === "Clouds") {
      card.style.backgroundImage = "url(./images/weatherBg/cloud.jpg)";
    } else if (data.weather[0].main === "Clear") {
      card.style.backgroundImage = "url(./images/weatherBg/clear.jpg)";
    } else if (
      data.weather[0].main === "Drizzle" ||
      "Mist" ||
      "Smoke" ||
      "Haze" ||
      "Dust" ||
      "Fog" ||
      "Sand" ||
      "Dust" ||
      "Ash" ||
      "Squall" ||
      "Tornado"
    ) {
      card.style.backgroundImage = "url(./images/weatherBg/rain.jpg)";
    } else if (data.weather[0].main === "Rain") {
      card.style.backgroundImage = "url(./images/weatherBg/rain.jpg)";
    } else if (data.weather[0].main === "Snow") {
      card.style.backgroundImage = "url(./images/weatherBg/snow.jpg)";
    } else if (data.weather[0].main === "Thunderstorm") {
      card.style.backgroundImage = "url(./images/weatherBg/thunder.jpg)";
    }
  }
  checkWeather();

  // 札幌
  document.querySelector("#sapporo").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationSapporo +
      "&lang=ja&units=metric";
    checkWeather();
    document.querySelector(".city").textContent = "札幌市";
  });
  // 仙台
  document.querySelector("#sendai").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationSendai +
      "&lang=ja&units=metric";
    document.querySelector(".city").textContent = "仙台市";
    checkWeather();
  });
  // 新潟
  document.querySelector("#nigata").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationNigata +
      "&lang=ja&units=metric";
    document.querySelector(".city").textContent = "新潟市";
    checkWeather();
  });
  // 金沢
  document.querySelector("#kanazawa").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationKanazawa +
      "&lang=ja&units=metric";
    checkWeather();
    document.querySelector(".city").textContent = "金沢市";
  });
  // 名古屋
  document.querySelector("#nagoya").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationNagoya +
      "&lang=ja&units=metric";
    checkWeather();
    document.querySelector(".city").textContent = "名古屋市";
  });
  // 東京
  document.querySelector("#tokyo").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationTokyo +
      "&lang=ja&units=metric";
    checkWeather();
    document.querySelector(".city").textContent = "新宿区";
  });
  // 大阪
  document.querySelector("#osaka").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationOsaka +
      "&lang=ja&units=metric";
    checkWeather();
    document.querySelector(".city").textContent = "大阪市";
  });
  // 広島
  document.querySelector("#hiroshima").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationHiroshima +
      "&lang=ja&units=metric";
    checkWeather();
    document.querySelector(".city").textContent = "広島市";
  });
  // 高知
  document.querySelector("#kochi").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationKochi +
      "&lang=ja&units=metric";
    checkWeather();
    document.querySelector(".city").textContent = "高知市";
  });
  // 福岡
  document.querySelector("#fukuoka").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationFukuoka +
      "&lang=ja&units=metric";
    checkWeather();
    document.querySelector(".city").textContent = "福岡市";
  });
  // 那覇
  document.querySelector("#naha").addEventListener("click", () => {
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?" +
      locationNaha +
      "&lang=ja&units=metric";
    checkWeather();
    document.querySelector(".city").textContent = "那覇市";
  });

  //   searchBtn.addEventListener("click", () => {
  //   });

  // 週間天気予報 5日分、3時間おきの40データ
  let weeklyApi =
    "https://api.openweathermap.org/data/2.5/forecast?" +
    locationTokyo +
    "&lang=ja&units=metric";
  async function checkWeeklyWeather() {
    const response = await fetch(weeklyApi + `&appid=${API_KEY}`);
    let weeklyData = await response.json();
    console.log(weeklyData);
  }

  checkWeeklyWeather();
}
