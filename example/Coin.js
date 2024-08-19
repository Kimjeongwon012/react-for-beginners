import { useEffect, useState } from "react";
import styles from "./Coin.module.css";

function App() {
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(0);
    const [coins, setCoin] = useState([]);
    // 한번만 실행시키고 싶을때 사용한다.
    const onChange = (event) => {
        setAmount(event.target.value);
    }
    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then((response) => response.json())
        .then((json) => {
            setCoin(json);
            setLoading(false);
        });
    }, []);
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            <label>How much is my dollar worth in coins?</label><br/>
            <input className={styles.input} type="number" placeholder="Enter the amount in USD (default : $1)" onChange={onChange}/>
            <br/>
            {loading ? <strong>Loading...</strong> :             
                <select>
                {coins.map((coin) => 
                    <option key={coin.id}>
                        {coin.name} : {amount == 0 ? (1 / coin.quotes.USD.price).toFixed(5) : (amount / coin.quotes.USD.price).toFixed(5)} ({coin.symbol})
                    </option>
                )}
            </select>                
            }
        </div>
    );
}

export default App;