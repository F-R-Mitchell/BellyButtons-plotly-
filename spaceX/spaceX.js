const url = "https://api.spacexdata.com/v2/launchpads";

// Pulling data from launches by SpaceX
//d3.json(url).then(receivedData => console.log(receivedData));

// Pulling lat and long from the first launch entry
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.longitude));