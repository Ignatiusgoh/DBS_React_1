import React from "react";

export default function Userinfo(props) { 
    return(
        <body className = "info">
            <div className = 'Name'>
                <p className = 'firstName'>Ignatius </p>
                <p className = 'lastName'>Goh</p>
            </div>
            <p className = 'email'>ignatius@gmail.com</p>

        <button className="editUserInfo">Edit User Info</button>
        </body>
    )
}