const request = require('request');
const endPoint = "https://api.thecatapi.com/v1/breeds/search?q=";
const breed = process.argv[2];
const URL = endPoint.concat(breed);

request(URL, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  if (!data[0]) throw new Error("Breed does not exist");
  console.log(data[0].description);
});