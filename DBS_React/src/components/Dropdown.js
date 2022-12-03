import React from "react"

// dropdown feature
export default function Dropdown(props){
    return(
        <select className="dropdown">
            <option value="SavingAccount">Savings Account</option>
            <option value="CurrentAccount">Current Account</option>
            <option selected value="MultiplierAccount">Multiplier Account</option>
        </select>
        // <h1> hi</h1>
        
        )
}


