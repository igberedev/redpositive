import React from "react";

import "./ExchangeRate.css"

const ExchangeRate = () => {
    return (
        <div className="exchange-rate">
            <p className="cell cell--header">Currency</p>
            <p className="cell cell--header">Price</p>
            <p className="cell cell--header">%Change</p>
            <p className="cell">EURUSD</p>
            <p className="cell">1.14702</p>
            <p className="cell cell--green">+0.21%</p>
            <p className="cell">USDCHF</p>
            <p className="cell">0.9866</p>
            <p className="cell cell--red">-0.15%</p>
        </div>
    )
}

export default ExchangeRate;