import './Coins.scss'

const Coins = ({ coins }) => {
  return (
    <div className="coins_container">
      {coins.map((coin, key) => {
        return (
          <div className="coin_row">
            <div className="coin">
              <img src={coin.image} className="coin_img" alt={coin.name}></img>
              <h1 className="coin_name">{coin.name}</h1>
              <div className="coin_symbol">{coin.symbol}</div>
            </div>
            <div className="coin_data">
                <p className="coin_price">${coin.current_price.toLocaleString()}</p>
                <p className="coin_volume">${coin.total_volume.toLocaleString()}</p>
                {
                    coin.price_change_percentage_24h < 0 ?
                    (
                        <p className="coin_change red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    ) :

                    (
                        <p className="coin_change green">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    )
                }
                <p className="coin_market_cap">Mkt Cap: ${coin.market_cap.toLocaleString()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Coins;
