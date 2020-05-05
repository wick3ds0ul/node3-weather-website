const request = require('request')
const foreCast = (lat, long, callback) => {
    const url =        `http://api.weatherstack.com/current?access_key=006d9f16fcdb939e7744f5dde050a3ca&query=${long},${lat}&units=m`;
    request({
            url,
            json: true,
        },
        (error, {
            body
        }) => {
            if (error) {
                callback("Unable to connect to Weather Stack", undefined);
            } else if (body.error) {
                callback("Unable to find location", undefined);
            } else {
                callback(undefined,
                    `Let's see outisde! Looks ${body.current.weather_descriptions[0]}. Current Temperature is ${body.current.temperature} degrees but it feels like ${body.current.feelslike}`
                )
            }
        }

    );
}

module.exports = foreCast;

// Usage
// foreCast(71.2221, 18.3223, (error, data) => {
//     console.log("Error:" + error);
//     console.log("Data:" + JSON.stringify(data.current));
// })

//Basics
// const url = "http://api.weatherstack.com/current?access_key=006d9f16fcdb939e7744f5dde050a3ca&query=18.4772,73.9023&units=f";
// request(
//   {
//     url: url,
//     json: true,
//   },
//   (error, response) => {
//     // console.log(response)
//     // const data = JSON.parse(response.body)
//     // console.log(response.body.current)
//     if (error) {
//       console.log("Unable to connect to Weather Stack");
//     } else if (response.body.error) {
//       console.log("Unable to find location");
//     } else {
//       const temperature = response.body.current.temperature;
//       const feelslike = response.body.current.feelslike;
//       console.log(
//         `
// $ {
// Let 's see outisde! Looks response.body.current.weather_descriptions[0]} Current Temperature ${temperature} but it feels like ${feelslike}`
//       );
//     }
//   }
// );