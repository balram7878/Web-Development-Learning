const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

async function fetchData(url, res) {
  try {
    const response = await fetch(url, {
      headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Accept": "application/json, text/plain, */*",
    "Referer": "https://www.swiggy.com/",
  },
    });
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed to fetch data from swiggy" });
  }
}

app.get("/restaurants", (req, res) => {
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.730231845869277&lng=76.77189049002534&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  fetchData(url, res);
});

app.get("/city/chandigarh/:id", (req, res) => {
  const id = req.params.id;
  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.730231845869277&lng=76.77189049002534&restaurantId=${id}`;
  fetchData(url, res);
});

// app.get("/city/chandigarh/:id/:query", (req, res) => {
//   const id = req.params.id;
//   const query = req.params.query;
//   const url = `https://www.swiggy.com/dapi/menu/pl/search?lat=30.730231845869277&lng=76.77189049002534&restaurantId=${id}&isMenuUx4=true&query=${query}`;
//   fetchData(url, res);
// });

app.listen(process.env.PORT, () => {
  console.log("Listen at 5678");
});
