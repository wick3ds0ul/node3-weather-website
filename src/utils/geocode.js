const request = require("request");
const geoCode = (address, callback) => {
    const addr = encodeURIComponent(address);
    const mapboxtoken =
        "pk.eyJ1Ijoid2ljazNkIiwiYSI6ImNrN3NhZGUyYzBoYjMzZnFycDh2ZWhodGUifQ.pqYC2t8W0pKQ9neMEoGmjw";
    const url =
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        addr +
        ".json?access_token=" +
        mapboxtoken +
        "&limit=1";

    request({
            url,
            json: true,
        },
        (error, {
            body
        } = {}) => {
            if (error) {
                callback("Unable to connect to location services", undefined);
            } else if (body.features.length === 0) {
                callback("Unable to find location,Try another search", undefined);
            } else {
                callback(
                    undefined, {
                        lat: body.features[0].center[0],
                        long: body.features[0].center[1],
                        place: body.features[0].place_name,
                    }
                    // console.log(response)
                );
            }
        }
    );
};

module.exports = geoCode;






// const request = require('request');
// const geoCode = (address, callback) => {
//     const addr = encodeURIComponent(address);
//     const mapboxtoken =
//         "pk.eyJ1Ijoid2ljazNkIiwiYSI6ImNrN3NhZGUyYzBoYjMzZnFycDh2ZWhodGUifQ.pqYC2t8W0pKQ9neMEoGmjw";
//     const geoCodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//         addr + ".json?access_token=" + mapboxtoken + "&limit=1";
//     request({
//         url: geoCodeurl,
//         json: true
//     }, (error, response) => {
//         if (error) {
//             callback("Unable to connect to location services", undefined)
//         } else if (response.body.features.length === 0) {
//             callback("Unable to find location,Try another search", undefined);
//         } else {
//             callback(undefined, {
//                     lat: response.body.features[0].center[0],
//                     long: response.body.features[0].center[1],
//                     place: response.body.features[0].place_name
//                 }
//                 // console.log(response)
//             )
//         }
//     })
// }

// module.exports = geoCode;

//Calling
//[Object object]
// geoCode('Boston', (error, data) => {
//     console.log("Error:" +
//         error);
//     // console.log("Data:" + data.long);
//     // console.log("Data:" + data.lat);
//     // console.log("Data:" + data.place);
//     console.log("Data:" + JSON.stringify(data))
// })

//Basics
// const mapboxtoken =
//   "pk.eyJ1Ijoid2ljazNkIiwiYSI6ImNrN3NhZGUyYzBoYjMzZnFycDh2ZWhodGUifQ.pqYC2t8W0pKQ9neMEoGmjw";
// const geoCodeurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapboxtoken}&limit=1`;
// request(
//   {
//     url: geoCodeurl,
//     json: true,
//   },
//   (error, response) => {
//     if (error) {
//       console.log("Unable to connect to mapbox");
//     } else if (response.body.features.length === 0) {
//       console.log("Unable to find location");
//     } else {
//       const long = response.body.features[0].center[0];
//       const lat = response.body.features[0].center[1];
//       console.log(`Longitude:${long} and Lattittudes:${lat}`);
//     }
//   }
// );




// const geoCode = (address, callback) => {
//     const addr = encodeURIComponent(address);
//     const geoCodeurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addr}.json?access_token=pk.eyJ1Ijoid2ljazNkIiwiYSI6ImNrN3NhZGUyYzBoYjMzZnFycDh2ZWhodGUifQ.pqYC2t8W0pKQ9neMEoGmjw&limit=1`
//     request({
//             geoCodeurl,
//             json: true,
//         },
//         (error, {
//             body
//         } = {}) => {
//             if (error) {
//                 callback("Unable to connect to location services,geocode" + error);
//             } else if (body.features.length === 0) {
//                 callback("Unable to find location,Try another search", undefined);
//             } else {
//                 callback(
//                     undefined, {
//                         lat: body.features[0].center[0],
//                         long: body.features[0].center[1],
//                         place: body.features[0].place_name,
//                     }
//                 );
//             }
//         }
//     );
// };