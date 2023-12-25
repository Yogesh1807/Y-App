const axios = require('axios');




export const getPlaces=(center)=> {
    const apiKey = 'AmiGl_w6FImQLtd3KD4ONT-iXjb2_i9PUWamH9_jSwuzxeuxNYYiAGOHO-bKshFq';
    const category = 'hospital'; // Replace with your desired category
    const location = `${center.lat},${center.lng}`; // Example: San Francisco coordinates

// Construct the API URL for the search
    const apiUrl = `https://dev.virtualearth.net/REST/v1/LocalSearch/?query=${category}&userLocation=${location}&key=${apiKey}`;

// Make the API request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            const places = data.resourceSets[0].resources;
            console.log(places);
        })
        .catch(error => {
            console.error('Error fetching nearby places:', error);
        });

}