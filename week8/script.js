const endpoint = "https://api.openweathermap.org/data/2.5/forecast?"
const apiKey = "2db7ba08ff2dbcaf118a886631b423c6";

const kelvinToF = (value) => {
  let fahrenheit = (((Number(value) - 273.15) * 9) / 5) + 32;
  return fahrenheit.toFixed(2);
}

const validateInput = (input) => {
  if (!input || !input.trim()) {
    return false;
  }
  if (/\d/.test(input)){
    return false;
  }
  return true;
}

const getHeaders = () => {
  let ths = $("th");
  let headers = [];
  for (let i = 0; i < ths.length; i++) {
      headers.push(ths[i].textContent);
  }
  return headers;
}

const parseResponse = (response) => {
  let information = [];
  for (let i = 0; i < 5 * 8; i += 8) {
    let info = {};

    let date = response["list"][i];
    let unix_timestamp = date["dt"];
    let forecast_date = new Date(unix_timestamp * 1000);
    info['date'] = forecast_date;

    info['max_temp'] = kelvinToF(date["main"]["temp_max"]);
    info['min_temp'] = kelvinToF(date["main"]["temp_min"]);

    info['humidity'] = date["main"]["humidity"];

    info['description'] = date["weather"][0]["description"];

    info['icon'] = `https://openweathermap.org/img/w/${date["weather"][0]["icon"]}.png`;

    information.push(info);
  }
  return information;
}

const processResponse = (response) => {
  const parsedResponse = parseResponse(response);

  let headers = getHeaders();
  let table = $("tbody");
  for (const i in parsedResponse) {
    let obj = parsedResponse[i];
    let tr = $("<tr>");
    for (const header of headers) {
      if (header === "icon") {
        tr.append($(`<img src=${obj[header]} margin=10%></img>`))
      } else {
        tr.append($(`<th>${obj[header]}</th>`));
      }
    }
    table.append(tr);
  }
}