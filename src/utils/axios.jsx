import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzZlNDE0MDVkZmUzYzAxZTkyN2UwOTQ1YjZhZGE0MyIsIm5iZiI6MTc0MzQyNzAzNC42ODIsInN1YiI6IjY3ZWE5NWRhY2YzMmVmMTYzNGY2ZDA5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JTaJaw4GKG1helubI7uzX120JZWQp0bsZ_0-u1Umtzk",
  },
});

export default instance;
