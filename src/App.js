import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Coins from "./components/Coins";

function App() {
  const [coins, setCoins] = useState([]);
  const [searchedInput, setSearchedInput] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {});
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchedInput.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearchedInput(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <SearchBar type="text" onChange={handleChange} placeHolder="Search" />
      <Coins coins={filteredCoins} />
    </div>
  );
}

export default App;
