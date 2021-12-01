import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-f9170.cloudfunctions.net/api"
  // "http://localhost:5001/clone-f9170/us-central1/api", // the api(cloud function ) url
});

// console.log("this is the instance ", instance);

export default instance;
