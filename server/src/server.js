const express = require("express");
const app = express();
const port = 8001;
const cors = require("cors");
const axios = require("axios");

app.use(express.urlencoded({ exteneded: true }));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

app.get("/now_playing", cors(), async (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=41c4b7faa3dc1822e456602f773a98ab"
    )
    .then((response) => {
      const data = response.data.results;
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ error: "AN error occured" });
    });
});
app.get("/top_rated", cors(), async (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=41c4b7faa3dc1822e456602f773a98ab"
    )
    .then((response) => {
      const data = response.data.results;
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ error: "AN error occured" });
    });
});
